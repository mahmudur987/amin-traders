/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import OilBuyModal from "./OilBuyModal";
import { useLocation } from "react-router-dom";

import { authContext } from "../../../context/UserContext";

// eslint-disable-next-line react/prop-types
const OilProduct = ({ data }) => {
  const { user } = useContext(authContext);

  const { picture, name, brandName, quantity, price, offer } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-80" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}

          {offer?.isOffer && <div className="badge badge-secondary">Offer</div>}
        </h2>
        <p>
          Quantity : <span>{quantity}</span> Liter
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
        <OilBuyModal data={data} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default OilProduct;
