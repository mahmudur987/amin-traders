import { useQuery } from "@tanstack/react-query";
import React from "react";
import AxiosBaseURL from "../../../axios/AxiosConfig";

const GasOrder = ({ index, order, refetch }) => {
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
    orderDate,
    orderStatus,
  } = order;
  const handleOrderrecived = (id) => {
    AxiosBaseURL.post(`/orders/orderrecive/${id}`)
      .then((data) => {
        console.log("orderrecived", data);
        refetch();
      })
      .catch((err) => {
        console.error("orderReciveEroor", err);
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl border">
      <div className="card-body">
        <p className="text-xl">Order No :{index + 1}</p>
        <h2 className="card-title">Name: {userName}</h2>
        <h2 className="font-bold"> Phone: {userPhoneNumber}</h2>
        <h2 className="font-bold">Email: {userEmail}</h2>
        <h2 className="font-bold">Address: {userAddress}</h2>
        <p>package Name :{packageName} </p>
        <p>Payment Amount :{paymentAmount} </p>
        <p>Payment Status :{paymentStatus} </p>
        <p>Order Status :{orderStatus ? orderStatus : "N/A"} </p>
        <p>Order Date :{orderDate.slice(0, 10)} </p>
        <div className="card-actions justify-end">
          {!orderStatus && (
            <button
              onClick={() => handleOrderrecived(_id)}
              className="btn btn-outline btn-sm"
            >
              Recived
            </button>
          )}
          <button className="btn btn-outline btn-sm">Delevered</button>
        </div>
      </div>
    </div>
  );
};

export default GasOrder;
