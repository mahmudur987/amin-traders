/* eslint-disable react/prop-types */

import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";

const InternetConnectionReq = ({ data, refetch }) => {
  const {
    _id,
    address,
    fullName,
    packageName,
    phoneNumber,
    email,
    deleveryStatus,
  } = data;

  const handleStatusUpdate = () => {
    AxiosBaseURL.post(`/extrah/inter-connection-request/${_id}`, {
      deleveryStatus: "connected",
    })
      .then((data) => {
        toast.success(data.data.status);
        refetch();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleDelete = () => {
    AxiosBaseURL.delete(`/extrah/inter-connection-request/${_id}`)
      .then((data) => {
        toast.success(data.data.status);
        refetch();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{fullName}</h2>
          <p>{phoneNumber} </p>
          <p>{email} </p>
          <p>{address} </p>
          <p>{packageName} </p>
          <p> Status : {deleveryStatus} </p>

          <div className="card-actions justify-end">
            <button
              onClick={() => handleStatusUpdate()}
              className="btn btn-primary"
            >
              Connected
            </button>
            <button onClick={() => handleDelete()} className="btn btn-primary">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetConnectionReq;
