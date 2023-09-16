/* eslint-disable react/prop-types */
// Modal.js
import { useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";
const AddBillModal = ({ isOpen, onClose, user, revalidator }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedMonth, setSelectedMonth] = useState("January");
  const [billAmount, setBillAmount] = useState("");

  const handleAddBill = () => {
    if (billAmount === "") {
      return toast.error("Please enter a bill amount.");
    }

    const data = { MonthName: selectedMonth, billAmount: parseInt(billAmount) };

    AxiosBaseURL.post(`/internetusers/${user?._id}`, data)
      .then((data) => {
        console.log("addbill", data.data);
        revalidator.revalidate();
      })
      .catch((err) => {
        console.error("add bill error", err);
      });

    console.log(data);
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
            <p className="text-xl font-bold"> Add Your bill </p>
            <div
              className="modal-close text-2xl cursor-pointer z-50"
              onClick={onClose}
            >
              <ImCross />
            </div>
          </div>

          <main>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Month
              </label>
              <select
                className="w-full border rounded-lg py-2 px-3"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Bill Amount
              </label>
              <input
                type="number"
                className="w-full border rounded-lg py-2 px-3"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
              />
            </div>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => handleAddBill()}
                className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddBillModal;
