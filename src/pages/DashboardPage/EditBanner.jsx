import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AxiosBaseURL from "../../axios/AxiosConfig";
import LoadingSpinner from "../../components/shared/loading/Loading";
import toast from "react-hot-toast";
import BannerCard from "../../components/DashboardPage/EditBanner/BannerCard";
import AddBannerModal from "../../components/DashboardPage/EditBanner/AddBannerModal";

const EditBanner = () => {
  const {
    data: Banners,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/banner");
      return data.data.data;
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    refetch();
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
    <div className="w-full">
      <h1 className="text-center uppercase text-2xl md:text-4xl font-bold my-10">
        All Banners
      </h1>
      <div className="flex justify-end my-5">
        <button onClick={openModal} className="btn btn-accent">
          Add a New Banner
        </button>
      </div>
      <div className="flex justify-around flex-wrap gap-3">
        {Banners?.map((banner, i) => (
          <BannerCard refetch={refetch} key={i} banner={banner} i={i} />
        ))}
      </div>

      <AddBannerModal
        refetch={refetch}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default EditBanner;
