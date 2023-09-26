/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import { useState } from "react";

const DashBag = ({ data }) => {
  //   console.log(data);
  const {
    offer: { isOffer, lessPrice },
    _id,
    bagType,
    name,
    material,
    color,
    size,
    price,
    image,

    description,
    bestDeals,
    publishDate,
    quantity,
  } = data || {};

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    Setloading(true);
    AxiosBaseURL.delete(`/bags/${id}`)
      .then((data) => {
        refetch();
        console.log(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
    Setloading(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    refetch();
    setIsModalOpen(false);
  };

  return (
    <div className="card w-full max-w-xs  bg-base-100 shadow-xl mx-auto">
      <figure className="w-full h-52">
        <img className="w-full h-full  " src={image} alt={name} />
      </figure>
      <div className="card-body p-2 gap-1">
        <h2 className="card-title">
          {name}

          {isOffer && <div className="badge badge-secondary">Offer</div>}
          {bestDeals && <div className="badge badge-info">Best Deals</div>}
        </h2>
        <h2 className="text-xl font-semibold mt-2"></h2>
        <p className="text-gray-700">Material: {material}</p>
        <p className="text-gray-700">Color: {color}</p>
        <p className="text-gray-700">Size: {size}</p>
        <p className="text-gray-700">quantity: {quantity}</p>
        <p className="text-gray-700 uppercase">Bag Type: {bagType}</p>
        <p className="text-gray-700">Discriptioin: {description}</p>
        <p className="text-gray-700">
          Publish Date: {publishDate.slice(0, 10)}
        </p>

        {isOffer ? (
          <p>
            Offer Price : <span className="line-through">{price}</span>{" "}
            <span>{price - lessPrice}</span>
          </p>
        ) : (
          <p>
            Price : <span>{price}</span>
          </p>
        )}
        <div className="flex justify-end">
          <button onClick={openModal} className="btn btn-sm btn-secondary">
            Update{" "}
          </button>
          <button className="btn btn-sm btn-secondary">Delete </button>
        </div>
      </div>
    </div>
  );
};

export default DashBag;
