/* eslint-disable react/prop-types */
// Modal.js
// eslint-disable-next-line react/prop-types
import { useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";

const AddInternetPackModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [price, setprice] = useState(0);
  const [speed, setspeed] = useState("");
  const [condition, setCondition] = useState("");
  const [vat, setvat] = useState(false);
  const [bestDeals, setBestDeals] = useState(false);
  const [date, setdate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { name, price, speed, condition, vat, date };

    AxiosBaseURL.post("/internetservice/allpackage", newData)
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.error(err);
      });

    console.log(newData);
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
            <p className="text-xl font-bold"> Update Internet Package </p>
            <div
              className="modal-close text-2xl cursor-pointer z-50"
              onClick={onClose}
            >
              <ImCross />
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
                name="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Price
              </label>
              <input
                type="text"
                name="email"
                defaultValue={price}
                onChange={(e) => setprice(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Speed
              </label>
              <input
                type="text"
                name="phoneNumber"
                defaultValue={speed}
                onChange={(e) => setspeed(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="speed"
              />
            </div>
            {/* publish date */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                publish Date
              </label>
              <input
                type="date"
                name="publish date"
                onChange={(e) => setdate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4  flex gap-10 items-center">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="phoneNumber"
              >
                Vat
              </label>
              <input
                type="checkbox"
                name="vat"
                onChange={(e) => setvat(e.target.checked)}
              />
            </div>

            {/* ?best deals  */}
            <div className="mb-4  flex gap-10 items-center">
              <label
                className="block text-gray-700 text-sm font-bold "
                htmlFor="phoneNumber"
              >
                Best Deals
              </label>
              <input
                type="checkbox"
                name="vat"
                onChange={(e) => setBestDeals(e.target.checked)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Condition
              </label>
              <textarea
                name="address"
                defaultValue={condition ? condition[0] : ""}
                onChange={(e) => setCondition([e.target.value])}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="condition"
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

export default AddInternetPackModal;
