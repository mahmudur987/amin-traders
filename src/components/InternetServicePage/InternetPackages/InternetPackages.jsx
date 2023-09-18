import { useState } from "react";
import SinglePackage from "./SinglePackage";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";

const InternetPackages = () => {
  const [count, setCount] = useState(3);
  const [showAll, setShowAll] = useState(false);
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
        Home Internet Packages
      </h1>

      <button className="btn btn-outline rounded-full">Basic Packages</button>

      {/* packages */}

      {InternetPackagesData && (
        <div className="w-full p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {InternetPackagesData?.filter(
            (item) => new Date(item.date) < new Date()
          )
            .slice(0, count)
            .map((data) => (
              <SinglePackage data={data} key={data._id}></SinglePackage>
            ))}
        </div>
      )}

      <p>
        {!showAll && (
          <button
            onClick={() => {
              setCount(InternetPackagesData.length);

              setShowAll(!showAll);
            }}
            className="btn btn-info"
          >
            see all
          </button>
        )}
        {showAll && (
          <button
            onClick={() => {
              setCount(3);

              setShowAll(!showAll);
            }}
            className="btn btn-info"
          >
            See less
          </button>
        )}
      </p>
    </div>
  );
};

export default InternetPackages;
