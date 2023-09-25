/* eslint-disable react/prop-types */

import TimeDifference from "./TimeDifference";

// eslint-disable-next-line react/prop-types
const UOP = ({ data }) => {
  return (
    <div className=" w-full   lg:h-[300px] flex flex-wrap justify-around items-center gap-5 ">
      <div className="flex max-w-xs flex-col items-center  w-64 h-[300px]  shadow-xl">
        <figure className=" h-3/5">
          <img className="h-full rounded-xl" src={data.picture} alt="Shoes" />
        </figure>
        <div className="p-2">
          <h2 className="card-title">
            {data.name}
            <div className="badge badge-secondary">upcoming</div>
          </h2>
          <p>Quantity : {data.quantity}</p>
          <p>Price : {data.price}</p>
        </div>
      </div>

      <TimeDifference fDate={data?.publishDate} />
    </div>
  );
};

export default UOP;
