/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const InternetUser = ({ user }) => {
  return (
    <div className="card w-52  bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{user?.name}</h2>
        <p>{user?.phoneNumber}</p>
        <p>{user?.email}</p>
        <div className="card-actions justify-end">
          <Link to={`/dashboard/internetuser/${user?._id}`}>
            <button className="btn btn-sm btn-primary">Details </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternetUser;
