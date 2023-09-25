import React from "react";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";

const SingleFeedBack = ({ data, refetch }) => {
  const handleDelete = (id) => {
    AxiosBaseURL.delete(`/extrah/feedback/${id}`)
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
    <div className=" flex flex-col justify-around items-center bg-base-300 m-3 p-2 rounded-2xl">
      <h1 className="font-bold uppercase text-lg">{data.fullName}</h1>
      <p className="text-lg">{data.message} . . .</p>

      <div className="w-full mt-1 flex justify-end">
        <button
          onClick={() => handleDelete(data?._id)}
          className="btn btn-secondary btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleFeedBack;
