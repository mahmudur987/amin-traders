/* eslint-disable react/prop-types */
import React from "react";

const Product = ({ data }) => {
  const {
    picture,
    Brand,
    name,
    offer,
    price,
    quantity,
    valveSize,
    use,
    valveType,
  } = data;

  console.log(data);

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
          Valve Size : <span>{valveSize}</span>
        </p>
        <p>
          Valve Type : <span>{valveType}</span>
        </p>
        <p>
          Use For : <span>{use}</span>
        </p>
        <p>
          Brand : <span>{Brand}</span>
        </p>
        <p>
          Price : <span>{price}</span>
        </p>
        {offer.isOffer && (
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

export default Product;