/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import OilBuyModal from "./OilBuyModal";
import { Link, useLoaderData, useLocation } from "react-router-dom";

import { authContext } from "../../../context/UserContext";
import toast from "react-hot-toast";
import Advantage from "../../shared/Advantage/Advantage";
import LikeOil from "../../shared/YouMayLike/Oil/LikeOil";
import SubscriptionForm from "../../shared/Subscriibe/SubscriptionForm";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { UsedbUser } from "../../Hooks/dbUser";
import RecentlyViewed from "../../shared/recentlyViewed/RecentlyViewed";
import MostViewed from "../../shared/mostViewed/Mostviewed";
// eslint-disable-next-line react/prop-types
const OilProductDetails = () => {
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  const { pathname } = useLocation();
  const data = useLoaderData().data.data;
  const { picture, name, brandName, quantity, price, offer } = data || {};

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!user) return toast.error("please LogIn first");

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (!user) {
      return;
    }
    const recentViewedData = { userId: dbuser?._id, oilProduct: data?._id };

    AxiosBaseURL.post("/recentview", recentViewedData)
      .then((data) => {
        console.log("recentviewdData", data.data);
      })
      .catch((err) => {
        console.log("recentviewdData", err);
      });
  }, [user, dbuser, data]);
  return (
    <main>
      <div className="card max-w-5xl w-full mx-auto lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-full  " src={picture} alt="Shoes" />
        </figure>
        <div className="card-body items-center justify-center ">
          <div className="flex flex-col gap-3 lg:gap-10">
            <h2 className="card-title uppercase">
              {name}

              {offer?.isOffer && (
                <div className="badge badge-secondary">Offer</div>
              )}
            </h2>
            <p>
              Quantity : <span>{quantity}</span> Liter
            </p>

            <p>
              Brand : <span>{brandName}</span>
            </p>

            {offer?.isOffer ? (
              <p>
                Offer Price : <span className="line-through">{price}</span>{" "}
                <span>{price - offer.lessPrice}</span>
              </p>
            ) : (
              <p>
                Price : <span>{price}</span>
              </p>
            )}
            <div className="flex justify-end">
              {pathname === "/" ? (
                <Link to={"/service/oilpage"}>
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
          </div>
        </div>
      </div>
      <Advantage />
      <LikeOil />
      {user && <RecentlyViewed />}
      {!user && <MostViewed />}
      <SubscriptionForm />

      <OilBuyModal data={data} isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default OilProductDetails;
