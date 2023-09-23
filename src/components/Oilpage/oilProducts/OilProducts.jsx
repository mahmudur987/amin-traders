import { useState } from "react";
import OilProduct from "./OilProduct";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import LoadingSpinner from "../../shared/loading/Loading";

const OilProducts = () => {
  const [count, setCount] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const {
    data: OilData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["alloilpackage"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/oilservice/alloilpackage");
      return data.data.data.filter(
        (item) => new Date(item.publishDate) < new Date()
      );
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
    <div className="my-20 flex flex-col gap-10 items-center">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Available Food Oil
      </h1>

      {/* packages */}

      {OilData && (
        <div className="w-full p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {OilData?.slice(0, count).map((data, i) => (
            <OilProduct data={data} key={i}></OilProduct>
          ))}
        </div>
      )}

      <p>
        {!showAll && (
          <button
            onClick={() => {
              setCount(OilData.length);

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

export default OilProducts;
