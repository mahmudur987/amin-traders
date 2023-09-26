import { Link } from "react-router-dom";
import ProductLogo from "../../Hooks/ProductLogo";

// eslint-disable-next-line react/prop-types
const OilProduct = ({ data }) => {
  const { picture, name, brandName, quantity, price, offer, _id } = data || {};

  return (
    <div className="card w-full max-w-xs h-96  bg-base-100 shadow-xl mx-auto">
      <figure className="h-52">
        <ProductLogo url={picture} />
      </figure>
      <div className="card-body p-2 gap-1">
        <h2 className="card-title">
          {name}

          {offer?.isOffer && <div className="badge badge-secondary">Offer</div>}
        </h2>
        <p>
          Quantity : <span>{quantity}</span> Liter
        </p>

        <p>
          Brand : <span>{brandName}</span>
        </p>

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
          <Link to={`/service/oilpage/${_id}`}>
            <button className="btn btn-sm btn-secondary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OilProduct;
