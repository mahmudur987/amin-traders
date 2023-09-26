/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import AxiosBaseURL from "../../../axios/AxiosConfig";

const MyBooked = ({ order, index, refetch }) => {
  const {
    userName,
    userPhoneNumber,
    userEmail,
    userAddress,
    packageName,
    paymentAmount,
    paymentStatus,
    serviceName,
    orderDate,
    orderStatus,
    orderQuantity,
    delivery,
    _id,
  } = order;
  const handleDeleteOrder = (id) => {
    AxiosBaseURL.delete(`/orders/${id}`)
      .then((data) => {
        toast.success(data.data.status);
        refetch();
      })
      .catch((err) => {
        toast.error(err.meassage);
      });
  };

  return (
    <div className="card max-w-2xl w-full  bg-base-100 shadow-xl border">
      <p className="text-xl bg-base-300">Order No :{index + 1}</p>
      <div className="card-body text-xl">
        {/* product Information */}
        <div>
          <p className="text-xl font-bold text-primary">Product Information</p>
          <p>Service Name :{serviceName} </p>

          {order.Internet.length > 0 && (
            <>
              <p>package Name :{packageName} </p>
              <p>Speed :{order.Internet[0].speed} </p>

              <p>Payment Amount :{paymentAmount} </p>
              {serviceName !== "Internet" && (
                <p>Quantity :{orderQuantity} piece </p>
              )}
            </>
          )}
          {order.Gas.length > 0 && (
            <>
              <p>
                package Name :{packageName}{" "}
                <span className="mx-3 font-bold">
                  ( {order?.Gas[0].quantity})
                </span>{" "}
              </p>
              <p>Brand Name :{order?.Gas[0].Brand} </p>
              <p>Price :{paymentAmount} </p>

              {serviceName !== "Internet" && (
                <p>Quantity :{orderQuantity} piece </p>
              )}
            </>
          )}
          {order.Oil.length > 0 && (
            <>
              <p>
                package Name :{packageName}{" "}
                <span className="mx-3 font-bold">
                  ( {order?.Oil[0].quantity} liter)
                </span>{" "}
              </p>
              <p>Brand Name :{order?.Oil[0].brandName} </p>
              <p>Price :{paymentAmount} </p>

              {serviceName !== "Internet" && (
                <p>Quantity :{orderQuantity} piece </p>
              )}
            </>
          )}
          {order.Bag.length > 0 && (
            <>
              <p>
                package Name :{packageName}{" "}
                <span className="mx-3 font-bold">
                  ( {order?.Bag[0].quantity} piece)
                </span>{" "}
              </p>
              <p>Brand Name :{order?.Bag[0].brandName} </p>
              <p>Price :{paymentAmount} </p>

              {serviceName !== "Internet" && (
                <p>Quantity :{orderQuantity} package </p>
              )}
            </>
          )}
        </div>
        <hr />
        <div>
          <p className="text-xl font-bold text-primary">Your Information</p>
          <h2 className="card-title">Your Name: {userName}</h2>
          <h2 className="font-bold"> Phone: {userPhoneNumber}</h2>
          <h2 className="font-bold">Email: {userEmail}</h2>
        </div>
        <hr />
        <div>
          <p className="text-xl font-bold text-primary">shipping information</p>
          <h2 className="">Shipping Address: {userAddress}</h2>
          <p>Payment Amount :{paymentAmount} </p>

          <p>Payment Status :{paymentStatus} </p>
          <p>Order Status :{orderStatus ? orderStatus : "N/A"} </p>
        </div>
        <p>Order Date :{orderDate.slice(0, 10)} </p>

        <p className="font-bold text-red-500 uppercase">
          {delivery.status ? "deliverd" : "not deleverd"}
        </p>
      </div>
      {(!orderStatus || orderStatus === "pending") && (
        <>
          <p className="p-3">
            if the order status is pending Yo can cancel this order
            <button
              onClick={() => handleDeleteOrder(_id)}
              className="btn btn-sm btn-secondary mx-3"
            >
              Cancel{" "}
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default MyBooked;
