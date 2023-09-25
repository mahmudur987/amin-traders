/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";
const InternetUser = ({ user, refetch }) => {
  const handleDelete = (id) => {
    AxiosBaseURL.delete(`/internetusers/${id}`)
      .then((data) => {
        console.log(data);
        toast.success(data.data.status);
        refetch();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="card   bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{user?.name}</h2>
        <p>{user?.phoneNumber}</p>
        <p>{user?.email}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(user?._id)}
            className="btn btn-secondary btn-sm"
          >
            Delete
          </button>

          <Link to={`/dashboard/internetuser/${user?._id}`}>
            <button className="btn btn-sm btn-primary">Details </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternetUser;
