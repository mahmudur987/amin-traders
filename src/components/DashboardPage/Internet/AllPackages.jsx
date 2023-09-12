import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { useQuery } from "@tanstack/react-query";
import SinglePack from "./SinglePack";

const AllInternetPackage = () => {
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
    <div className="my-10 flex flex-col gap-10 items-center p-2 lg:p-10">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        Internet Packages
      </h1>

      {/* packages */}

      {InternetPackagesData && (
        <div className="w-full p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {InternetPackagesData?.map((data) => (
            <SinglePack data={data} key={data._id}></SinglePack>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllInternetPackage;
