import { useLoaderData, useRevalidator } from "react-router-dom";
import UserInfo from "./UserInfo";
import PaymentInfo from "./PaymentInfo";
import AddBillModal from "./AddBillModal";
import { useState } from "react";
const InternetUserDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const revalidator = useRevalidator();
  const user = useLoaderData().data.data;
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {" "}
      <UserInfo revalidator={revalidator} user={user} />
      <div className="flex justify-end gap-3 p-2">
        <button onClick={openModal} className="btn btn-outline">
          Add Bill
        </button>
      </div>
      <PaymentInfo paymentData={user} />
      <AddBillModal
        revalidator={revalidator}
        isOpen={isModalOpen}
        onClose={closeModal}
        user={user}
      />
    </div>
  );
};

export default InternetUserDetails;
