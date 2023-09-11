import { useState } from "react";

import Product from "./product";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";

const Products = () => {
  const [count, setCount] = useState(3);
  const [showAll, setShowAll] = useState(false);
  const {
    data: LpgGasData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/gasservice/allgaspackage");
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
    <div className="my-20 flex flex-col gap-10 items-center p-2 lg:p-10">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Available L P G Gas
      </h1>

      {/* packages */}

      {LpgGasData && (
        <div className="w-full p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {LpgGasData?.slice(0, count).map((data) => (
            <Product data={data} key={data._id}></Product>
          ))}
        </div>
      )}

      <p>
        {!showAll && (
          <button
            onClick={() => {
              setCount(LpgGasData.length);

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

export default Products;
