import React from "react";

const Feedback = ({ data }) => {
  return (
    <div className="h-56 flex flex-col justify-around items-center bg-green-400 m-3 p-5 rounded-2xl">
      <h1 className="font-bold uppercase text-lg">{data.fullName}</h1>
      <p className="text-lg">{data.message.slice(0, 80)} . . .</p>
    </div>
  );
};

export default Feedback;
