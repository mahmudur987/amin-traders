/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";

const Product = ({ data }) => {
  const { pathname } = useLocation();
  const { picture, Brand, name, offer, price, quantity, _id } = data;

  return (
    <>
      {data && (
        <div className="card max-w-sm bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-60" src={picture} alt="Shoes" />
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
            <p>
              Price : <span>{price}</span>
            </p>
            {offer?.isOffer && (
              <p>
                Offer Price : <span>{price - offer.lessPrice}</span>
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
