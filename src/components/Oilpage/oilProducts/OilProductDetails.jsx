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
import Animation from "../../shared/Animation/Animation";
import Downcart from "./Downcart";
// eslint-disable-next-line react/prop-types
const OilProductDetails = () => {
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  const [showFixedDiv, setShowFixedDiv] = useState(false);

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

  const handleAddTocart = () => {
    if (!dbuser) return toast.error("please LogIn first");
    const cartdata = {
      userName: dbuser?.name,
      userEmail: dbuser?.email,
      userId: dbuser?._id,
      serviceName: "Oil",
      packageName: data?.name,
      Oil: data?._id,
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

  useEffect(() => {
    if (!user) {
      return;
    }
    const recentViewedData = {
      userId: dbuser?._id,
      oilProductId: data?._id,
      serviceName: "Oil",
      packageName: data?.name,
      userEmail: dbuser?.email,
    };

    AxiosBaseURL.post("/recentview", recentViewedData)
      .then((data) => {
        console.log("recentviewdData", data.data);
      })
      .catch((err) => {
        console.log("recentviewdData", err);
      });
  }, [user, dbuser, data]);

  useEffect(() => {
    // Define the scroll event handler
    const handleScroll = () => {
      // Calculate the position on the page where you want to show the div
      const scrollPosition = window.scrollY;
      const triggerPosition = 500; // Adjust this value as needed
      console.log(scrollPosition);
      // Check if the user has scrolled to the desired position
      if (scrollPosition > triggerPosition) {
        setShowFixedDiv(true);
      } else {
        setShowFixedDiv(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="card max-w-5xl w-full mx-auto lg:card-side bg-base-100 shadow-xl">
        <figure className="flex flex-col justify-center items-center">
          <img className="w-full h-full  " src={picture} alt="Shoes" />
          <p className="w-full text-center text-green-700">
            {Math.floor(Math.random() * 10) + 1} people watch in the last 12
            hour
          </p>
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
            <Animation>
              <p> Delevery within 2-3 days.100% COD</p>
            </Animation>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleAddTocart}
                className="btn btn-sm btn-secondary"
              >
                Add to Cart
              </button>
              <button onClick={openModal} className="btn btn-sm btn-secondary">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Advantage />

      {showFixedDiv && (
        <div className="fixed bottom-0 left-0 right-0 z-10 p-4 shadow-md">
          <Downcart
            data={data}
            openModal={openModal}
            handleAddTocart={handleAddTocart}
          />
        </div>
      )}

      <LikeOil />
      {user && <RecentlyViewed />}
      {!user && <MostViewed />}
      <SubscriptionForm />

      <OilBuyModal data={data} isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default OilProductDetails;
