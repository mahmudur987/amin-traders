import { useState } from "react";
import { ImCross } from "react-icons/im";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const AddInternetUserModal = ({ isOpen, onClose, refetch }) => {
  const {
    data: IP,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/internetservice/allpackage");
      return data.data.data;
    },
  });

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    address: "",
    serviceName: "internet",
    packageName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const internetUser = {
      ...formData,
      PaymentInfo: [
        {
          MonthName: "January",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "February",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "March",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "April",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "May",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "June",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "July",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "August",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "September",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "October",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "November",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
        {
          MonthName: "December",
          status: false,
          billAmount: 0,
          DateOfBill: "",
        },
      ],
    };
    AxiosBaseURL.post(`/internetusers`, internetUser)
      .then((data) => {
        console.log(data.data);
        toast.success(data.data.status);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
    console.log(internetUser);
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
            <p className="text-xl font-bold"> Add New Internet User</p>
            <div
              className="modal-close text-2xl cursor-pointer z-50"
              onClick={onClose}
            >
              <ImCross />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="555-555-5555"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="123 Main St, City, Country"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="serviceName" className="block text-gray-600">
                Service Name
              </label>
              <input
                type="text"
                id="serviceName"
                name="serviceName"
                value={formData.serviceName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Service Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="packageName" className="block text-gray-600">
                Package Name
              </label>

              <select
                className="w-full border rounded-lg py-2 px-3"
                id="packageName"
                name="packageName"
                value={formData.packageName}
                onChange={handleChange}
              >
                <option value="">Please select a Package</option>
                {IP?.map((x, index) => (
                  <option key={index} value={x?.name}>
                    {x?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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

export default AddInternetUserModal;
