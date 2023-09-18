/* eslint-disable react/prop-types */
const UgI = ({ data }) => {
  console.log(data);
  return (
    <div className=" w-64 h-[300px]  bg-base-100 shadow-xl ">
      <div className=" w-full h-full flex flex-col justify-around font-bold  items-center">
        <h2 className="card-title">
          {data.name}
          <div className="badge badge-secondary">upcoming</div>
        </h2>
        <p>Speed : {data.speed}</p>
        <p>Price : {data.price}</p>
      </div>
    </div>
  );
};

export default UgI;
