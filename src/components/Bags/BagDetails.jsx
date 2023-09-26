import React from "react";
import { useLoaderData } from "react-router-dom";
import Animation from "../shared/Animation/Animation";
import { useState } from "react";
import { useContext } from "react";
import { UsedbUser } from "../Hooks/dbUser";
import AxiosBaseURL from "../../axios/AxiosConfig";
import { authContext } from "../../context/UserContext";
import { useEffect } from "react";
import RecentlyViewed from "../shared/recentlyViewed/RecentlyViewed";
import BagBuyModal from "./BagBuyModal";
import toast from "react-hot-toast";
import ProductLogo from "../Hooks/ProductLogo";
import DownBagCart from "./DownBagCart";
import SubscriptionForm from "../shared/Subscriibe/SubscriptionForm";
import Advantage from "../shared/Advantage/Advantage";
import LikeGas from "../shared/YouMayLike/Gas/LikeGas";
import MostViewed from "../shared/mostViewed/Mostviewed";

const BagDetails = () => {
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  const data = useLoaderData().data.data;
  const {
    offer: { isOffer, lessPrice },
    _id,
    bagType,
    name,
    material,
    color,
    size,
    price,
    image,

    description,

    quantity,
  } = data;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFixedDiv, setShowFixedDiv] = useState(false);
  // scrooly
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 500;

      if (scrollPosition > triggerPosition) {
        setShowFixedDiv(true);
      } else {
        setShowFixedDiv(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

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
      serviceName: "Bag",
      packageName: name,
      Bag: _id,
      paymentAmount: parseInt(price),
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
      bagProductId: _id,
      serviceName: "Bag",
      packageName: dbuser?.name,
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
      <div className="container mx-auto mt-6">
        <div className="flex flex-col md:flex-row items-center justify-around flex-wrap">
          <div className="md:w-1/2">
            <ProductLogo url={image} />
          </div>
          <div className="md:w-1/2 px-4">
            <h1 className="text-3xl font-semibold mb-4">{name}</h1>

            {isOffer && <div className="badge badge-secondary">Offer</div>}
            <p className="text-gray-600">{description}</p>
            <Animation>
              <p> Delevery within 2-3 days.100% COD</p>
            </Animation>

            <div className="mt-4">
              <p className="text-gray-700">
                Material: <span className="font-semibold">{material}</span>
              </p>
              <p className="text-gray-700">
                Bag Type: <span className="font-semibold">{bagType}</span>
              </p>
              <p className="text-gray-700">
                Color: <span className="font-semibold">{color}</span>
              </p>
              <p className="text-gray-700">
                Size: <span className="font-semibold">{size}</span>
              </p>
              <p className="text-gray-700">quantity: {quantity} piece</p>

              <p className="text-gray-700">
                {isOffer ? (
                  <p>
                    Offer Price : <span className="line-through">{price}</span>{" "}
                    <span>{price - lessPrice}</span>
                  </p>
                ) : (
                  <p>
                    Price : <span>{price}</span>
                  </p>
                )}
              </p>
            </div>

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
      <RecentlyViewed />
      <BagBuyModal data={data} isOpen={isModalOpen} onClose={closeModal} />

      <Advantage />
      {showFixedDiv && (
        <div className="fixed z-10 bottom-0 left-0 right-0 p-4 shadow-md">
          <DownBagCart
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
    </main>
  );
};

export default BagDetails;
