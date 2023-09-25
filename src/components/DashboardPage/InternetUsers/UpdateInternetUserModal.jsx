/* eslint-disable react/prop-types */
// Modal.js
// eslint-disable-next-line react/prop-types
import { useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const UpdateInternetUserModal = ({ isOpen, onClose, user, revalidator }) => {
  const [packageName, setPackageName] = useState("");
  const [address, setAddress] = useState(user?.address);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/internetservice/allpackage");
      return data.data.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(packageName);
    AxiosBaseURL.patch(`/internetusers/${user?._id}`, {
      packageName,
      address,
      phoneNumber,
    })
      .then((data) => {
        console.log("update userInfo", data.data);
        toast.success("update successfully");
        revalidator.revalidate();
      })
      .catch((err) => {
        console.error("add bill error", err);
        toast.error(err.message);
      });

    onClose();
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return toast.error(error.message, {
      id: "clipboard",
    });
  }
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
                Package Name
              </label>
              <select
                className="w-full border rounded-lg py-2 px-3"
                required
                onChange={(e) => setPackageName(e.target.value)}
              >
                <option value={user?.packageName._id}>
                  Please select a Package
                </option>
                {data.map((x, index) => (
                  <option key={index} value={x?._id}>
                    {x?.name}
                  </option>
                ))}
              </select>
            </div>
            {/* phone number */}
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="555-555-5555"
              />
            </div>
            {/* Address */}

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="write your full  address"
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

export default UpdateInternetUserModal;
