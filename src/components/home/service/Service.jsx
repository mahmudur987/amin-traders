/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Service = ({ service }) => {
  // eslint-disable-next-line no-unused-vars
  const { name, description, imageUrl, link } = service;

  return (
    <Link to={link}>
      <div className="card  shadow-xl">
        <figure>
          <img className="h-52 w-full" src={imageUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <p>{name}</p>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </Link>
  );
};

export default Service;
