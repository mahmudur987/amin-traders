/* eslint-disable react/prop-types */
import React from "react";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";

const BannerCard = ({ banner, refetch }) => {
  const { ImageUrl, heading, bannerFor, text, _id } = banner;

  const handleDelete = (id) => {
    AxiosBaseURL.delete(`/banner/${id}`)
      .then((data) => {
        console.log("bannerdelete", data);
        refetch();
        toast.success("Banner Delete successfully");
      })
      .catch((err) => {
        console.log("bannerdeleteError", err);
        toast.success("some Error happen", {
          id: "banner delete",
        });
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-56" src={ImageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{heading}</h2>
        <p> {text} </p>
        <div className="font-bold ">
          <p> {bannerFor === "homePage" && "Home Page"} </p>
          <p> {bannerFor === "gasPage" && "Gas Service Page"} </p>
          <p> {bannerFor === "oilPage" && "Oil service Page"} </p>
          <p> {bannerFor === "internetPage" && "Internet service Page"} </p>
        </div>
        <div className="card-actions justify-end">
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
