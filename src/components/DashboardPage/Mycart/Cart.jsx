/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";

const Cart = ({ index, cart, refetch }) => {
  const { packageName, serviceName, paymentAmount, packageId, _id } = cart;
  console.log(cart);
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
      <td>
        {packageName}

        {cart.Gas && (
          <span className="mx-2 font-bold">{cart.Gas.quantity}</span>
        )}
        {cart.Oil && (
          <span className="mx-2 font-bold">{cart.Oil.quantity} L</span>
        )}
      </td>
      <td>{paymentAmount}</td>
      <td>
        {serviceName === "Gas" && (
          <Link to={`/service/gasservice/${cart.Gas._id}`}>
            <button className="btn btn-sm btn-primary">Order</button>
          </Link>
        )}
        {serviceName === "Oil" && (
          <Link to={`/service/oilpage/${cart.Oil._id}`}>
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
