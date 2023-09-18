import React from "react";
import AxiosBaseURL from "../../../axios/AxiosConfig";

const MyBooked = ({ order, index, refetch }) => {
  // console.log(order);
  const {
    _id,
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
  } = order;
  const handleDelete = (id) => {
    AxiosBaseURL.delete(`/orders/${id}`)
      .then((data) => {
        refetch();
        console.log("ordedelete", data);
      })
      .catch((err) => {
        console.error("orderdelete ", err);
      });
  };

  return (
    <div className="card  bg-base-100 shadow-xl border">
      <div className="card-body text-xl">
        <p className="text-2xl">Order No :{index + 1}</p>
        <h2 className="card-title">Name: {userName}</h2>
        <h2 className="font-bold"> Phone: {userPhoneNumber}</h2>
        <h2 className="font-bold">Email: {userEmail}</h2>
        <h2 className="font-bold">Address: {userAddress}</h2>
        <p>Service Name :{serviceName} </p>
        <p>package Name :{packageName} </p>
        <p>Payment Amount :{paymentAmount} </p>
        <p>Payment Status :{paymentStatus} </p>
        <p>Order Status :{orderStatus ? orderStatus : "N/A"} </p>
        <p>Order Date :{orderDate.slice(0, 10)} </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBooked;
