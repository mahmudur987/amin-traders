import { useContext, useState } from "react";

import { authContext } from "../../context/UserContext";
import { UsedbUser } from "../../components/Hooks/dbUser";
import ProfileUpdateModal from "../../components/DashboardPage/profile/ProfileUpdateModal";
import { useRevalidator } from "react-router-dom";
import LoadingSpinner from "../../components/shared/loading/Loading";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(authContext);
  const [dbuser, isLoading, isError, error, refetch] = UsedbUser(user?.email);

  const { name, email, phoneNumber, address, photoUrl } = dbuser || {};
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
    <>
      {dbuser && (
        <div className="container mx-auto py-1">
          <div className="max-w-4xl mx-auto shadow-xl  rounded flex flex-col gap-5 px-8 py-6">
            <div className="flex items-center ">
              <img
                src={photoUrl}
                alt="Profile"
                className="w-96 h-96 rounded-full mb-4"
              />
            </div>
            <div>
              <h1 className="text-2xl uppercase font-bold mb-4">{name}</h1>
              <p className="text-gray-600 mb-4">Email :{email}</p>
              <p className="text-gray-600 mb-4">Phone Number : {phoneNumber}</p>
              <p className="text-gray-600 mb-4">
                Address {address ? address : "please add your address"}
              </p>
            </div>
            <div className="flex justify-end">
              <button onClick={openModal} className="btn btn-sm btn-info">
                Update
              </button>
            </div>
          </div>

          <div>
            <ProfileUpdateModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
