/* eslint-disable react-refresh/only-export-components */

import TimeDifference from "./TimeDifference";

/* eslint-disable react/prop-types */
const UIP = ({ data }) => {
  return (
    <div
      className=" w-full bg-center   bg-base-200 h-[300px] flex flex-wrap justify-around items-center rounded-xl "
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/6466143/pexels-photo-6466143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="  w-64 h-2/3 flex flex-col justify-around font-bold  items-center  bg-base-100 shadow-xl">
        <h2 className="card-title">
          {data.name}
          <div className="badge badge-secondary">upcoming</div>
        </h2>
        <p>Speed : {data.speed}</p>
        <p>Price : {data.price}</p>
      </div>

      <TimeDifference fDate={data?.date} />
    </div>
  );
};

export default UIP;
