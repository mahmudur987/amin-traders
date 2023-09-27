/* eslint-disable react/prop-types */
import { useState } from "react";
import LoadingSpinner from "../loading/Loading";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";

const PaymentForm = ({ setOnlinePayment, Setshow }) => {
  const [PaymentMethod, setSelectedPaymentMethod] = useState("bkash");
  const [transactionId, setTransactionId] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { PaymentMethod, transactionId, userPhoneNumber };
    setOnlinePayment(data);
    Setshow(false);
  };
  const {
    data: AddressDetails,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["extrah"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/extrah");
      return data.data.data[0];
    },
  });
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return toast.error(error.message, {
      id: "clipboard",
    });
  }
  const { bkashNumber, roketNumber, nagadNumber } = AddressDetails;
  return (
    <div className="max-w-md mx-auto">
      {bkashNumber && <p>Bkash :{bkashNumber}</p>}
      {roketNumber && <p>Roket :{roketNumber}</p>}
      {nagadNumber && <p>Nagad :{nagadNumber}</p>}

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Payment Method
          </label>
          <div className="flex gap-2">
            {bkashNumber && (
              <label className="mr-4">
                <input
                  type="radio"
                  value="bkash"
                  checked={PaymentMethod === "bkash"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Bkash
              </label>
            )}
            {nagadNumber && (
              <label>
                <input
                  type="radio"
                  value="nagad"
                  checked={PaymentMethod === "nagad"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Nagad
              </label>
            )}
            {roketNumber && (
              <label>
                <input
                  type="radio"
                  value="roket"
                  checked={PaymentMethod === "roket"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Roket
              </label>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Transaction ID
          </label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Transaction ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Baksh/Nagod Number
          </label>
          <input
            type="text"
            value={userPhoneNumber}
            onChange={(e) => setUserPhoneNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="User Phone Number"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
