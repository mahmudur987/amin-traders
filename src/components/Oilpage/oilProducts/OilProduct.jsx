/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import OilBuyModal from "./OilBuyModal";
import { Link, useLocation } from "react-router-dom";

import { authContext } from "../../../context/UserContext";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const OilProduct = ({ data }) => {
  const { user } = useContext(authContext);
  const { pathname } = useLocation();
  const { picture, name, brandName, quantity, price, offer } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!user) return toast.error("please LogIn first");

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="card max-w-sm  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-52" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body p-3">
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
          {pathname === "/" ? (
            <Link to={"/service/oilpage"}>
              {" "}
              <button className="btn btn-sm btn-secondary">Order Now</button>
            </Link>
          ) : (
            <button onClick={openModal} className="btn btn-sm btn-secondary">
              Order Now
            </button>
          )}
        </div>
        <OilBuyModal data={data} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default OilProduct;
