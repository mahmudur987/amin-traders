import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { useQuery } from "@tanstack/react-query";
import DashIntPackage from "./DashIntPackage";
import AddInternetPackModal from "./AddInternetPackModal";
import { AiFillPlusSquare } from "react-icons/ai";
import { useState } from "react";

const DashIntPackages = () => {
  const {
    data: InternetPackagesData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allpackage"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/internetservice/allpackage");
      return data.data.data.sort((a, b) => new Date(a.date) - new Date(b.date));
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
    <>
      <div className="my-10 flex flex-col gap-10 items-center p-2 lg:p-10">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
          Internet Packages
        </h1>
        <div className="w-full flex justify-end">
          <button onClick={openModal} className="btn btn-outline ">
            ADD A New Internert Packages{" "}
            <span className="text-3xl">
              <AiFillPlusSquare />
            </span>{" "}
          </button>
        </div>
        {/* packages */}

        {InternetPackagesData && (
          <div className="w-full p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {InternetPackagesData?.map((data) => (
              <DashIntPackage
                refetch={refetch}
                data={data}
                key={data._id}
              ></DashIntPackage>
            ))}
          </div>
        )}
      </div>
      <AddInternetPackModal
        refetch={refetch}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default DashIntPackages;
