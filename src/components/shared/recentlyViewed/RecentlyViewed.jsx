import { useContext } from "react";
import { authContext } from "../../../context/UserContext";
import { UsedbUser } from "../../Hooks/dbUser";
import LoadingSpinner from "../loading/Loading";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";

import OilProduct from "../../Oilpage/oilProducts/OilProduct";
import Product from "../../GasServicePage/Products/product";

const RecentlyViewed = () => {
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  const {
    data: recentViews,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["recentview", dbuser],
    queryFn: async () => {
      const data = await AxiosBaseURL.get(`/recentview/${dbuser?._id}`);
      return data.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return toast.error(error.message, {
      id: "clipboard",
    });
  }

  return (
    <>
      {recentViews.length > 0 && (
        <div className="my-10 md:my-20 lg:my-32 mx-auto px-7 lg:px-20">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-5 md:my-8 lg:my-10">
            Recently Viewed
          </h1>

          <div className="w-full flex flex-wrap justify-around gap-3 ">
            {/* {recentViews?.slice(0, 4).map((data, i) => {
              if (data.oilProduct.length > 0) {
                return <OilProduct key={i} data={data.oilProduct[0]} />;
              }
              if (data.gasProduct.length > 0) {
                return <Product key={i} data={data.gasProduct[0]} />;
              }
            })} */}
          </div>
        </div>
      )}
    </>
  );
};

export default RecentlyViewed;
