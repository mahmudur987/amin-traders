/* eslint-disable react/prop-types */

import { data } from "autoprefixer";
import toast from "react-hot-toast";
import AxiosBaseURL from "../../../axios/AxiosConfig";

const User = ({ user }) => {
  const { name, email, phoneNumber, address, photoUrl } = user || {};

  const AddUserToInternet = () => {
    const internetUser = {
      name,
      email,
      phoneNumber,
      address,
      serviceName: "internet",
      packageName: "",
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
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(internetUser);
  };

  const handleDelete = (id) => {
    return toast.error("you cant delete user right now");
    // AxiosBaseURL.delete(`/gasservice/${id}`)
    //   .then((data) => {
    //     console.log(data.data);
    //     refetch();
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };
  return (
    <>
      {user && (
        <div className="  shadow-xl  flex flex-col justify-between p-1">
          <div className="bg-base-200 h-32 flex justify-center ">
            <img className="h-32 rounded" src={photoUrl} alt="Profile" />
          </div>
          <div className="flex flex-col justify-between flex-wrap h-full">
            <h1 className="text-2xl uppercase font-bold mb-4">{name}</h1>
            <p className="text-gray-600  flex flex-wrap">Email : {email}</p>
            <p className="text-gray-600 ">Phone Number : {phoneNumber}</p>
            <p className="text-gray-600 ">
              Address {address ? address : "please add your address"}
            </p>
          </div>
          <div className="flex  gap-2 justify-end my-3 items-center">
            <p className="text-primary">
              Add this member to internet user List
            </p>
            <button
              onClick={() => AddUserToInternet()}
              className="btn btn-sm btn-primary"
            >
              Add{" "}
            </button>
          </div>
          <div className="flex flex-wrap mt-2 justify-end">
            <button
              onClick={() => handleDelete(data._id)}
              className="btn btn-sm btn-info"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
