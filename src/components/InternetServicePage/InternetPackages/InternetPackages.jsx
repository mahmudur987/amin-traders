import { useState } from "react";
import SinglePackage from "./SinglePackage";
import { InternetPackagesData } from "../../../constant/constant";

const InternetPackages = () => {
  const [count, setCount] = useState(3);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="my-10 flex flex-col gap-10 items-center p-2 lg:p-10">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        Home Internet Packages
      </h1>

      <button className="btn btn-outline rounded-full">Basic Packages</button>

      {/* packages */}

      {InternetPackagesData && (
        <div className="w-full p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {InternetPackagesData?.slice(0, count).map((data) => (
            <SinglePackage data={data} key={data.index}></SinglePackage>
          ))}
        </div>
      )}

      <p>
        {!showAll && (
          <button
            onClick={() => {
              setCount(InternetPackagesData.length);

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

export default InternetPackages;
