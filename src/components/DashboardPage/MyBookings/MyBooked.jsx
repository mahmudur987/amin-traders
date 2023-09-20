/* eslint-disable react/prop-types */

const MyBooked = ({ order, index }) => {
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
  } = order;

  return (
    <div className="card  bg-base-100 shadow-xl border">
      <div className="card-body text-xl">
        <p className="text-2xl">Order No :{index + 1}</p>
        <h2 className="card-title">Your Name: {userName}</h2>
        <h2 className="font-bold"> Phone: {userPhoneNumber}</h2>
        <h2 className="font-bold">Email: {userEmail}</h2>
        <h2 className="font-bold">Address: {userAddress}</h2>
        <p>Service Name :{serviceName} </p>
        <p>package Name :{packageName} </p>
        <p>Quantity :{orderQuantity} piece </p>

        <p>Payment Amount :{paymentAmount} </p>
        <p>Payment Status :{paymentStatus} </p>
        <p>Order Status :{orderStatus ? orderStatus : "N/A"} </p>
        <p>Order Date :{orderDate.slice(0, 10)} </p>

        <p className="font-bold text-red-500 uppercase">
          {delivery.status ? "deliverd" : "not deleverd"}
        </p>
      </div>
    </div>
  );
};

export default MyBooked;
