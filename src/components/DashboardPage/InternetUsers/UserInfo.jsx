import { useState } from "react";
import UpdateInternetUserModal from "./UpdateInternetUserModal";

/* eslint-disable react/prop-types */
const UserInfo = ({ user, revalidator }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          {user && (
            <div className=" rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">User Information</h2>
              <p>
                <strong>Name:</strong> {user?.name}
              </p>
              <p>
                <strong>Phone Number:</strong> {user?.phoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {user?.email}
              </p>
              <p>
                <strong>Address:</strong> {user?.address}
              </p>
              <p>
                <strong>Package Name:</strong> {user?.packageName}
              </p>
              <p>
                <strong>Service Name:</strong> {user?.serviceName}
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-end my-3">
          <button onClick={openModal} className="btn btn-outline ">
            Update Package
          </button>
        </div>
      </div>
      <UpdateInternetUserModal
        user={user}
        isOpen={isModalOpen}
        onClose={closeModal}
        revalidator={revalidator}
      />
    </>
  );
};

export default UserInfo;
