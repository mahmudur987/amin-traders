/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import ProductLogo from "../Hooks/ProductLogo";

const BagDisplay = ({ bag }) => {
  const { offer, price, _id, quantity } = bag || {};
  return (
    <div className="card w-full max-w-xs bg-base-100 shadow-xl mx-auto">
      <div className="w-full h-52">
        <ProductLogo url={bag?.image} />
      </div>
      <div className="card-body p-2 gap-1">
        <h2 className="card-title">
          {bag?.name}

          {offer?.isOffer && <div className="badge badge-secondary">Offer</div>}
        </h2>
        <h2 className="text-xl font-semibold mt-2"></h2>
        <p className="text-gray-700">Material: {bag?.material}</p>
        <p className="text-gray-700">Color: {bag?.color}</p>
        <p className="text-gray-700">Size: {bag?.size}</p>
        <p className="text-gray-700">quantity: {quantity}</p>

        {offer?.isOffer ? (
          <p>
            Offer Price : <span className="line-through">{price}</span>{" "}
            <span>{price - offer.lessPrice}</span>
          </p>
        ) : (
          <p>
            Price : <span>{price}</span>
          </p>
        )}
        <div className="flex justify-end">
          <Link to={`/service/bags/${_id}`}>
            <button className="btn btn-sm btn-secondary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BagDisplay;
