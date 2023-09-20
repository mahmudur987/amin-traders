/* eslint-disable react/prop-types */
import { BsFillHouseCheckFill } from "react-icons/bs";
import Modal from "./Modal";
import { useContext, useState } from "react";
import { authContext } from "../../../context/UserContext";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
const SinglePackage = ({ data }) => {
  const { name, speed, price, condition, bestDeals } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();

  const { user } = useContext(authContext);
  const openModal = () => {
    if (!user) {
      return toast.error("please Log In first", {
        id: "50",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`flex max-w-xs flex-col gap-5 border p-5  rounded-xl shadow-xl`}
    >
      <h1 className="text-lg font-bold">{name}</h1>
      {bestDeals && <div className="badge badge-secondary">Offer</div>}
      <div className="flex gap-5 justify-center">
        <p className="w-1/2 flex  items-center  border-r-4">
          <span className="text-2xl font-semibold">{speed}</span>
          <span>Mbps</span>
        </p>
        <p className="w-1/2 ">
          <span className="text-xl">BDT</span>
          <span className="text-2xl font-bold">{price}</span>
          <p className="">PerMonth</p>
          <span>Excluding Vat</span>
        </p>
      </div>
      <div className="divider"></div>
      <p>
        {condition?.map((x, i) => (
          <p key={i} className="flex gap-3 items-center">
            <span>
              <BsFillHouseCheckFill />
            </span>

            <span>{x}</span>
          </p>
        ))}
      </p>

      <div className="flex justify-end">
        {pathname === "/" ? (
          <Link to={"/service"}>
            {" "}
            <button className="btn btn-sm btn-secondary">Order Now</button>
          </Link>
        ) : (
          <button onClick={openModal} className="btn btn-sm btn-secondary">
            Order Now
          </button>
        )}
      </div>
      <Modal data={data} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SinglePackage;
