/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import GasBuyModal from "./GasBuyModal";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../../context/UserContext";
import toast from "react-hot-toast";
import { UsedbUser } from "../../Hooks/dbUser";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import Advantage from "../../shared/Advantage/Advantage";
import SubscriptionForm from "../../shared/Subscriibe/SubscriptionForm";
import LikeGas from "../../shared/YouMayLike/Gas/LikeGas";
import RecentlyViewed from "../../shared/recentlyViewed/RecentlyViewed";
import MostViewed from "../../shared/mostViewed/Mostviewed";
import Animation from "../../shared/Animation/Animation";
import DownGascart from "./DownGasCart";

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
  const [showFixedDiv, setShowFixedDiv] = useState(false);

  useEffect(() => {
    // Define the scroll event handler
    const handleScroll = () => {
      // Calculate the position on the page where you want to show the div
      const scrollPosition = window.scrollY;
      const triggerPosition = 500; // Adjust this value as needed

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
      Gas: data?._id,
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
    if (!dbuser) {
      return;
    }
    const recentViewedData = {
      userId: dbuser?._id,
      gasProductId: data?._id,
      serviceName: "Gas",
      packageName: data?.name,
      userEmail: dbuser?.email,
    };
    console.log(JSON.stringify(recentViewedData));
    AxiosBaseURL.post("/recentview", recentViewedData)
      .then((data) => {
        console.log("recentviewdData", data.data);
      })
      .catch((err) => {
        console.log("recentviewdData", err);
      });
  }, [user, data, dbuser]);

  return (
    <main>
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
            <Animation>
              <p> Delevery within 2-3 days.100% COD</p>
            </Animation>
            <div className="flex justify-end gap-3 flex-wrap">
              <button onClick={openModal} className="btn btn-sm btn-secondary">
                Buy Now
              </button>
              <button
                onClick={handleAddTocart}
                className="btn btn-sm btn-secondary"
              >
                Add To cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Advantage />
      {showFixedDiv && (
        <div className="fixed z-10 bottom-0 left-0 right-0 p-4 shadow-md">
          <DownGascart
            data={data}
            openModal={openModal}
            handleAddTocart={handleAddTocart}
          />
        </div>
      )}
      <LikeGas />
      {user && <RecentlyViewed />}

      {!user && <MostViewed />}
      <SubscriptionForm />
      <GasBuyModal data={data} isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default ProductDetails;
