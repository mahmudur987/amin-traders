/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Service = ({ service }) => {
  // eslint-disable-next-line no-unused-vars
  const { name, description, imageUrl, link } = service;

  return (
    <Link to={link}>
      <div className="card w-52 h-72 flex flex-col justify-around shadow-xl">
        <figure>
          <img className="h-52 w-full" src={imageUrl} alt="Shoes" />
        </figure>
        <div className="p-2 w-full">
          <h2 className="card-title w-full">
            <p className="text-center w-full">{name}</p>
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Service;
