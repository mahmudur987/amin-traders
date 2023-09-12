/* eslint-disable react/prop-types */
// Modal.js
import { useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";
// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const UpdateOilModal = ({ isOpen, onClose, data }) => {
  // eslint-disable-next-line no-unused-vars
  //   const { picture, name, brandName, quantity, price, offer } = data;
  const [name, setName] = useState(data?.name);
  const [price, setprice] = useState(data.price);
  const [speed, setspeed] = useState(data.speed);
  const [condition, setCondition] = useState(data.condition);
  const [vat, setvat] = useState(data.vat);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { name, price, speed, condition, vat };

    AxiosBaseURL.post("/internetpack/:id", newData)
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
            {/* name */}
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

export default UpdateOilModal;
