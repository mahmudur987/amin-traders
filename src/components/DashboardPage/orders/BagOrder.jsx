/* eslint-disable react/prop-types */

import AxiosBaseURL from "../../../axios/AxiosConfig";

const BagOrder = ({ index, order, refetch }) => {
  console.log(order);
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
    onlinePayment,
    delivery,
  } = order;
  const {
    PaymentMethod,
    transactionId,
    userPhoneNumber: phone,
  } = onlinePayment || {};
  const { status, deliveryDate } = delivery || {};
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
  const handleOrderDelever = (id) => {
    AxiosBaseURL.post(`/orders/orderdeliver/${id}`)
      .then((data) => {
        console.log("orderrecived", data);
        refetch();
      })
      .catch((err) => {
        console.error("orderReciveEroor", err);
      });
  };
  return (
    <div className="card  bg-base-100 shadow-xl border">
      <div className="card-body">
        <p className="text-xl">Order No :{index + 1}</p>
        <h2 className="card-title">Name: {userName}</h2>
        <h2 className="font-bold"> Phone: {userPhoneNumber}</h2>
        <h2 className="font-bold">Email: {userEmail}</h2>
        <h2 className="font-bold">Address: {userAddress}</h2>
        <p>package Name :{packageName} </p>
        <p>Payment Amount :{paymentAmount} </p>
        <p>Payment Status :{paymentStatus} </p>
        {paymentStatus === "complete" && onlinePayment && (
          <>
            <p>Method :{PaymentMethod}</p>
            <p>transactionId :{transactionId}</p>
            <p>
              {PaymentMethod} Number :{phone}
            </p>
          </>
        )}

        <p>Order Status :{orderStatus ? orderStatus : "N/A"} </p>
        <p>Order Date :{orderDate.slice(0, 10)} </p>

        {status && (
          <>
            <p className="text-secondary">
              Delevery Complete at {deliveryDate}
            </p>
          </>
        )}

        <div className="card-actions justify-end">
          {!orderStatus ||
            (orderStatus === "pending" && (
              <button
                onClick={() => handleOrderrecived(_id)}
                className="btn btn-outline btn-sm"
              >
                Recived
              </button>
            ))}
          {orderStatus !== "delivered" && (
            <button
              onClick={() => handleOrderDelever(_id)}
              className="btn btn-outline btn-sm"
            >
              Delivered
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BagOrder;
