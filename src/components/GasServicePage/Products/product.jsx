/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import GasBuyModal from "./GasBuyModal";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../../../context/UserContext";
import toast from "react-hot-toast";

const Product = ({ data }) => {
  const { user } = useContext(authContext);
  const { pathname } = useLocation();
  const {
    picture,
    Brand,
    name,
    offer,
    price,
    quantity,
    valveSize,
    use,
    valveType,
  } = data;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!user) return toast.error("please LogIn first");

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {data && (
        <div className="card max-w-sm bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-80" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              {offer?.isOffer && (
                <div className="badge badge-secondary">Offer</div>
              )}
            </h2>
            <p>
              Quantity : <span>{quantity}</span>
            </p>
            <p>
              Valve Size : <span>{valveSize}</span>
            </p>
            <p>
              Valve Type : <span>{valveType}</span>
            </p>
            <p>
              Use For : <span>{use}</span>
            </p>
            <p>
              Brand : <span>{Brand}</span>
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
                <Link to={"/service/gasservice"}>
                  {" "}
                  <button className="btn btn-sm btn-secondary">
                    Order Now
                  </button>
                </Link>
              ) : (
                <button
                  onClick={openModal}
                  className="btn btn-sm btn-secondary"
                >
                  Order Now
                </button>
              )}
            </div>
            <GasBuyModal
              data={data}
              isOpen={isModalOpen}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
