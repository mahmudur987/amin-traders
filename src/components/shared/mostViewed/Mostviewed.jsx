import React, { useContext } from "react";
import { authContext } from "../../../context/UserContext";
import { UsedbUser } from "../../Hooks/dbUser";
import LoadingSpinner from "../loading/Loading";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";

import OilProduct from "../../Oilpage/oilProducts/OilProduct";
import Product from "../../GasServicePage/Products/product";
import BagDisplay from "../../Bags/BagDisplay";

const MostViewed = () => {
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  const {
    data: mostviews,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["recentview", dbuser],
    queryFn: async () => {
      const data = await AxiosBaseURL.get(`/recentview`);
      return data.data.data;
    },
  });
  console.log(mostviews);
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
      {mostviews?.length > 0 && (
        <div className="my-10 md:my-20 lg:my-32 mx-auto px-7 lg:px-20">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-5 md:my-8 lg:my-10">
            Most viewed Product
          </h1>

          <div className="w-full flex ">
            {mostviews?.slice(0, 4).map((data, i) => {
              if (data.oilProductId) {
                return <OilProduct key={i} data={data.oilProductId} />;
              }
              if (data.gasProductId) {
                return <Product key={i} data={data.gasProductId} />;
              }
              if (data.bagProductId) {
                return <BagDisplay key={i} bag={data.bagProductId} />;
              }
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MostViewed;
