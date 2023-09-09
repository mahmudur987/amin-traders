/* eslint-disable react/prop-types */
import { BsFillHouseCheckFill } from "react-icons/bs";
import Modal from "./Modal";
import { useState } from "react";
const SinglePackage = ({ data }) => {
  const { name, speed, price, condition } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-5 border p-2 rounded-xl shadow-xl">
      <h1 className="text-lg font-bold">{name}</h1>

      <div className="flex gap-5 justify-center">
        <p className="w-1/2 flex justify-center items-center  border-r-4">
          <span className="text-3xl font-semibold">{speed}</span>
          <span>Mbps</span>
        </p>
        <p className="w-1/2 ">
          <span className="text-xl">BDT</span>
          <span className="text-3xl font-bold">{price}</span>
          <p className="text-lg">PerMonth</p>
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
        <button onClick={openModal} className="btn btn-sm btn-secondary">
          BooK Now
        </button>
      </div>
      <Modal data={data} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SinglePackage;
