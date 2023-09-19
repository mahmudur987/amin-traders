/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const UGP = ({ data }) => {
  return (
    <div className="flex flex-col items-center  w-64 h-[300px]  shadow-xl">
      <figure className=" h-3/5">
        <img className=" h-full" src={data.picture} alt="Shoes" />
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
  );
};

export default UGP;
