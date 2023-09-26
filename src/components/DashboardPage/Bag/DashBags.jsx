import React, { useState } from "react";
import DashBag from "./Dashbag";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
import AddBagModal from "./AddBagModal";

const DashBags = () => {
  const {
    data: Bags,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["bag"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/bag");
      return data.data.data;
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    refetch();
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
    <div className="flex flex-col gap-10 lg:gap-20">
      <h1 className="w-full font-bold text-center text-3xl lg:text-4xl">
        All bags
      </h1>
      <div className=" w-full flex justify-end">
        <button onClick={openModal} className="btn btn-outline">
          Add New Bag{" "}
        </button>
      </div>
      <div className=" w-full flex flex-wrap justify-around gap-5">
        {Bags?.map((data) => (
          <DashBag key={data._id} data={data} refetch={refetch} />
        ))}
      </div>

      <AddBagModal
        refetch={refetch}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default DashBags;
