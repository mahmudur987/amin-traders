/* eslint-disable react/prop-types */
// Modal.js
import { useContext, useState } from "react";
import { authContext } from "../../../context/UserContext";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { UsedbUser } from "../../Hooks/dbUser";
import toast from "react-hot-toast";
import { FaPlus, FaMinus } from "react-icons/fa";
const GasBuyModal = ({ isOpen, onClose, data }) => {
  const { name, offer, price, quantity } = data || {};
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [initialprice, setInitialPrice] = useState(
    parseInt(offer.isOffer ? price - offer?.lessPrice : data?.price)
  );
  const [totalPrice, setTotalPrice] = useState(initialprice);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return toast.error("please LogIn first");
    const from = e.target;
    const userPhoneNumber = from?.userPhoneNumber?.value;
    const userAddress = from?.userAddress?.value;

    // You can handle the form submission logic here
    const newOrder = {
      user: dbuser?._id,
      userName: dbuser?.name,
      userEmail: dbuser?.email,
      userPhoneNumber,
      userAddress,
      packageName: `${data?.name}`,
      Gas: data?._id,
      serviceName: "Gas",
      paymentAmount: totalPrice,
      orderQuantity: orderQuantity,
      paymentStatus: "pending",
    };
    console.log(newOrder);

    AxiosBaseURL.post("/orders", newOrder)
      .then((data) => {
        console.log("orderposted", data);
      })
      .catch((err) => {
        console.log("orderpostError", err);
      });

    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 overflow-y-auto z-50 flex items-center justify-center`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-xl font-bold">
              {" "}
              Buying Internet Package{" "}
              <span className="text-info text-2xl">{data.name}</span>{" "}
            </p>
            <div className="modal-close cursor-pointer z-50" onClick={onClose}>
              <svg
                className="fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M6.293 6.293a1 1 0 011.414 0L9 7.586l1.293-1.293a1 1 0 111.414 1.414L10.414 9l1.293 1.293a1 1 0 11-1.414 1.414L9 10.414l-1.293 1.293a1 1 0 01-1.414-1.414L7.586 9 6.293 7.707a1 1 0 010-1.414z"></path>
              </svg>
            </div>
          </div>
          <div>
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
              Price : <span>{totalPrice}</span>
            </p>
            <div className="flex justify-between items-center">
              <p>Order Quantity:</p>
              <p className="flex justify-end gap-1 items-center">
                <button
                  onClick={() => {
                    if (orderQuantity <= 0) {
                      return;
                    }
                    setOrderQuantity(orderQuantity - 1);
                    setTotalPrice(totalPrice - initialprice);
                  }}
                  className="btn btn-outline btn-sm"
                >
                  <FaMinus />
                </button>

                <span className="btn">{orderQuantity}</span>
                <button
                  onClick={() => {
                    setOrderQuantity(orderQuantity + 1);
                    setTotalPrice(initialprice * (orderQuantity + 1));
                  }}
                  className="btn btn-outline btn-sm"
                >
                  <FaPlus />
                </button>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="userName"
                defaultValue={user?.displayName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                value={user?.email}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="userPhoneNumber"
                defaultValue={dbuser?.phoneNumber}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                name="userAddress"
                defaultValue={dbuser?.address}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Address"
              ></textarea>
            </div>
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GasBuyModal;
