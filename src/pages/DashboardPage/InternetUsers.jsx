import { AiFillCaretDown } from "react-icons/ai";
import InternetUser from "../../components/DashboardPage/InternetUsers/InternetUser";
import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import AxiosBaseURL from "../../axios/AxiosConfig";
import LoadingSpinner from "../../components/shared/loading/Loading";
import AddInternetUserModal from "../../components/DashboardPage/InternetUsers/AddInternetUserModal";
import { useState } from "react";

const InternetUsers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: internetUsers,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/internetusers");
      return data.data.data;
    },
  });
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
    <div className="my-10 flex flex-col gap-10 items-center p-2 lg:p-10">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Internet Users
      </h1>

      <div className="w-full flex justify-end">
        <button onClick={openModal} className="btn btn-outline ">
          ADD A NEW USER{" "}
        </button>
      </div>
      {/* internet order */}
      <div className="w-full flex flex-col  gap-10">
        <div className="w-full flex justify-around   flex-wrap gap-5">
          {internetUsers?.map((user, i) => (
            <InternetUser refetch={refetch} key={i} index={i} user={user} />
          ))}
        </div>
      </div>

      <AddInternetUserModal
        refetch={refetch}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default InternetUsers;
