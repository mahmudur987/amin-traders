import { useContext, useState } from "react";
import UpdateInternetUserModal from "./UpdateInternetUserModal";
import { authContext } from "../../../context/UserContext";
import { UsedbUser } from "../../Hooks/dbUser";

/* eslint-disable react/prop-types */
const UserInfo = ({ user, revalidator }) => {
  const { user: authuser } = useContext(authContext);
  const [dbuser] = UsedbUser(authuser?.email);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(user);
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
                <strong>Package Name:</strong> {user?.packageName?.name}
              </p>
              <p>
                <strong>Monthly Bill Amount:</strong> {user?.packageName?.price}
              </p>
              <p>
                <strong>Service Name:</strong> {user?.serviceName}
              </p>
            </div>
          )}
        </div>
        {dbuser?.role === "admin" && (
          <div className="flex justify-end my-3">
            <button onClick={openModal} className="btn btn-outline ">
              Update Info
            </button>
          </div>
        )}
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
