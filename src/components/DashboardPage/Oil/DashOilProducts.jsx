import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import DashOilProduct from "./DashOilproduct";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
import AddOilModal from "./AddOilModal";
import { AiFillPlusSquare } from "react-icons/ai";
import { useState } from "react";
const DashOilProducts = () => {
  const {
    data: OilData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/oilservice/alloilpackage");
      return data.data.data;
    },
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
      <div className="my-20 flex flex-col gap-10 items-center">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">Oil</h1>
        <div className="w-full flex justify-end">
          <button onClick={openModal} className="btn btn-outline ">
            ADD A New Oil{" "}
            <span className="text-3xl">
              <AiFillPlusSquare />
            </span>{" "}
          </button>
        </div>

        {/* packages */}

        {OilData && (
          <div className="w-full p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {OilData?.map((data, i) => (
              <DashOilProduct data={data} key={i}></DashOilProduct>
            ))}
          </div>
        )}
      </div>
      <AddOilModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default DashOilProducts;
