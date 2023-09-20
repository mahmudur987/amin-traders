/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";

const Cart = ({ index, cart, refetch }) => {
  const { packageName, serviceName, paymentAmount, packageId, _id } = cart;

  const handleremovefromCart = (id) => {
    const sure = confirm("are you sure?");
    console.log(sure);
    if (sure) {
      AxiosBaseURL.delete(`/cart/${id}`)
        .then((data) => {
          console.log("cart remove", data);
          refetch();
          toast.success("product remove from cart successfully");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  return (
    <tr className="bg-base-200">
      <th>{index + 1}</th>
      <td>{serviceName}</td>
      <td>{packageName}</td>
      <td>{paymentAmount}</td>
      <td>
        {serviceName === "Gas" && (
          <Link to={`/service/gasservice/${packageId}`}>
            <button className="btn btn-sm btn-primary">Order</button>
          </Link>
        )}
      </td>
      <td>
        <Link>
          <button
            onClick={() => handleremovefromCart(_id)}
            className="btn btn-sm btn-secondary"
          >
            Remove
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Cart;
