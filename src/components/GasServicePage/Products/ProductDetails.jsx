/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import GasBuyModal from "./GasBuyModal";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../../context/UserContext";
import toast from "react-hot-toast";
import { UsedbUser } from "../../Hooks/dbUser";
import AxiosBaseURL from "../../../axios/AxiosConfig";

const ProductDetails = () => {
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  const data = useLoaderData().data.data;
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
  } = data || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    if (!user) return toast.error("please LogIn first");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTocart = () => {
    if (!dbuser) return toast.error("please LogIn first");
    const cartdata = {
      userName: dbuser?.name,
      userEmail: dbuser?.email,
      userId: dbuser?._id,
      serviceName: "Gas",
      packageName: data?.name,
      packageId: data?._id,
      paymentAmount: parseInt(data?.price),
    };
    console.log(cartdata);

    AxiosBaseURL.post("/cart", cartdata)
      .then((data) => {
        toast.success(data.data.status);
        console.log("cartadded", data);
      })
      .catch((err) => {
        toast.error("Error happen ");
        console.error("cart eroor", err);
      });
  };
  return (
    <>
      {data && (
        <div className="card max-w-5xl w-full mx-auto lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-md" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body items-center">
            <div className="flex flex-col gap-3">
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
              <div className="flex justify-end gap-3 flex-wrap">
                <button
                  onClick={openModal}
                  className="btn btn-sm btn-secondary"
                >
                  Buy Now
                </button>
                <button
                  onClick={handleAddTocart}
                  className="btn btn-sm btn-secondary"
                >
                  Add To cart
                </button>
              </div>
              <GasBuyModal
                data={data}
                isOpen={isModalOpen}
                onClose={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
