import { useState } from "react";
import { OilData } from "../../../constant/constant";
import OilProduct from "./OilProduct";

const OilProducts = () => {
  const [count, setCount] = useState(3);
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="my-20 flex flex-col gap-10 items-center">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Available Food Oil
      </h1>

      {/* packages */}

      {OilData && (
        <div className="w-full p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {OilData?.slice(0, count).map((data, i) => (
            <OilProduct data={data} key={i}></OilProduct>
          ))}
        </div>
      )}

      <p>
        {!showAll && (
          <button
            onClick={() => {
              setCount(OilData.length);

              setShowAll(!showAll);
            }}
            className="btn btn-info"
          >
            see all
          </button>
        )}
        {showAll && (
          <button
            onClick={() => {
              setCount(3);

              setShowAll(!showAll);
            }}
            className="btn btn-info"
          >
            See less
          </button>
        )}
      </p>
    </div>
  );
};

export default OilProducts;
