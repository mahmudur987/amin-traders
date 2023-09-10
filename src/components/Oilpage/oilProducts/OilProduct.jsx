/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const OilProduct = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { picture, name, brandName, quantity, price, offer } = data;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}

          {offer.isOffer && <div className="badge badge-secondary">Offer</div>}
        </h2>
        <p>
          Quantity : <span>{quantity}</span>
        </p>

        <p>
          Brand : <span>{brandName}</span>
        </p>
        <p>
          Price : <span>{price}</span>
        </p>
        {offer?.isOffer && (
          <p>
            Offer Price : <span>{price - offer.lessPrice}</span>
          </p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default OilProduct;
