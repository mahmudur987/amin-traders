/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import UpdateOilModal from "./UpdateOilModal";

// eslint-disable-next-line react/prop-types
const DashOilProduct = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { picture, name, brandName, quantity, price, offer } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}

          {offer?.isOffer && <div className="badge badge-secondary">Offer</div>}
        </h2>
        <p>
          Quantity : <span>{quantity}</span>
        </p>

        <p>
          Brand : <span>{brandName}</span>
        </p>
        <p>
          Price : <span>{price}</span>
        </p>
        {offer?.isOffer && (
          <p>
            Offer Price : <span>{price - offer.lessPrice}</span>
          </p>
        )}
        <div className="flex justify-end">
          <button onClick={openModal} className="btn btn-sm btn-secondary">
            Buy Now
          </button>
        </div>
        <UpdateOilModal data={data} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default DashOilProduct;
