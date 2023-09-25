import React from "react";

const Downcart = ({ data, openModal, handleAddTocart }) => {
  const { picture, price, offer } = data || {};

  return (
    <div className="bg-lime-300 h-10 flex justify-between items-center p-3 m-2 rounded-md  ">
      <div className="flex items-center gap-3 ">
        <img className=" h-10" src={picture} alt="" />
        {offer?.isOffer ? (
          <p className="font-bold">
            Offer Price : <span className="line-through">{price}</span>{" "}
            <span>{price - offer.lessPrice}</span>
          </p>
        ) : (
          <p>
            Price : <span>{price}</span>
          </p>
        )}
      </div>

      <div className="flex justify-end gap-3">
        <button onClick={handleAddTocart} className="btn btn-sm btn-info">
          Add to Cart
        </button>
        <button onClick={openModal} className="btn btn-sm btn-info">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Downcart;
