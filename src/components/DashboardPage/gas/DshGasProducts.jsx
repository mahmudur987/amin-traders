import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import DashGasProduct from "./DashGasProduct";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";

const DashGasProducts = () => {
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
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">L P G GAS</h1>

      {/* packages */}

      {LpgGasData && (
        <div className="w-full p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {LpgGasData?.map((data) => (
            <DashGasProduct data={data} key={data._id}></DashGasProduct>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashGasProducts;
