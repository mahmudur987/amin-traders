import React, { useState } from "react";
import UpdateAboutUsModal from "./UpdateAboutUsModal";

const SingleaboutUs = ({ data, refetch }) => {
  const { heading, ImageUrl, text1, text2, aboutFor } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    refetch();
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className=" h-52" src={ImageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          <p>{text1}</p>
          <p>{text2}</p>
          <p className="text-xl font-bold text-secondary">{aboutFor}</p>
          <div onClick={openModal} className="card-actions justify-end">
            <button className="btn btn-primary">Update </button>
          </div>
        </div>
      </div>

      <UpdateAboutUsModal
        refetch={refetch}
        data={data}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default SingleaboutUs;
