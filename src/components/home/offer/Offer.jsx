import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import SinglePackage from "../../InternetServicePage/InternetPackages/SinglePackage";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";

const Offer = () => {
  const {
    data: InternetPackagesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/internetservice/allpackage");
      return data.data.data;
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
    <div className="my-10 ">
      <h1 className="text-center font-bold text-secondary text-xl md:text-2xl lg:text-4xl">
        Todays Exclusive Offer
      </h1>

      {InternetPackagesData && (
        <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {InternetPackagesData?.slice(0, 4).map((data) => (
            <SinglePackage data={data} key={data._id}></SinglePackage>
          ))}
        </div>
      )}
    </div>
  );
};

export default Offer;
