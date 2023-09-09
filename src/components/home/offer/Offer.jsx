import { InternetPackagesData } from "../../../constant/constant";
import SinglePackage from "../../InternetServicePage/InternetPackages/SinglePackage";

const Offer = () => {
  return (
    <div className="my-10 ">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl">
        Todays Exclusive Offer
      </h1>

      {InternetPackagesData && (
        <div className="w-full p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {InternetPackagesData?.slice(0, 3).map((data) => (
            <SinglePackage data={data} key={data.index}></SinglePackage>
          ))}
        </div>
      )}
    </div>
  );
};

export default Offer;
