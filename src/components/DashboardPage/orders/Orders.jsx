import toast from "react-hot-toast";

import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../shared/loading/Loading";
import AxiosBaseURL from "../../../axios/AxiosConfig";

import InternetOrder from "./InternetOrder";
import GasOrder from "./GasOrder";
import OilOrder from "./OilOrder";

const Ordrs = () => {
  const {
    data: orders,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/orders");
      return data.data.data;
    },
  });

  const InternetOrders = orders?.filter((x) => x.serviceName === "Internet");
  const GasOrders = orders?.filter((x) => x.serviceName === "Gas");
  const OilOrders = orders?.filter((x) => x.serviceName === "Oil");

  console.log(GasOrders);
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
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">All orders</h1>

      <div className="w-full flex justify-end">
        <button className="btn btn-outline ">
          sort
          <span className="text-3xl">v</span>{" "}
        </button>
      </div>
      {/* internet order */}
      <div className="w-full flex flex-col  gap-10">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold underline text-info">
          Internet Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {InternetOrders.map((order, i) => (
            <InternetOrder refetch={refetch} key={i} index={i} order={order} />
          ))}
        </div>
      </div>

      {/* gas order */}
      <div className="w-full flex flex-col  gap-10">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold underline text-info">
          Gas Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {GasOrders.map((order, i) => (
            <GasOrder refetch={refetch} key={i} index={i} order={order} />
          ))}
        </div>
      </div>
      {/* oil order */}

      <div className="w-full flex flex-col  gap-10">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold underline text-info">
          Oil Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {OilOrders.map((order, i) => (
            <OilOrder refetch={refetch} key={i} index={i} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ordrs;
