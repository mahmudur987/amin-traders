/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const { picture, Brand, name, offer, price, quantity, _id } = data || {};

  return (
    <>
      {data && (
        <div className="card max-w-xs w-full h-96 bg-base-100 shadow-xl mx-auto">
          <figure className="w-full h-52">
            <img className="w-full h-full" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body p-3">
            <h2 className="card-title">
              {name}
              {offer?.isOffer && (
                <div className="badge badge-secondary">Offer</div>
              )}
            </h2>
            <p>
              Quantity : <span>{quantity}</span>
            </p>

            <p>
              Brand : <span>{Brand}</span>
            </p>

            {offer?.isOffer ? (
              <p>
                Price :<span className="line-through">{price}</span>{" "}
                <span>{price - offer.lessPrice}</span>
              </p>
            ) : (
              <p>
                Price : <span>{price}</span>
              </p>
            )}
            <div className="flex justify-end">
              <Link to={`/service/gasservice/${_id}`}>
                <button className="btn btn-sm btn-secondary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
