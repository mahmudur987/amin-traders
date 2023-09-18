import { useEffect, useState } from "react";
import SinglePackage from "../../InternetServicePage/InternetPackages/SinglePackage";

import AxiosBaseURL from "../../../axios/AxiosConfig";
// import LoadingSpinner from "../../shared/loading/Loading";
// import toast from "react-hot-toast";
import Product from "../../GasServicePage/Products/product";
import OilProduct from "../../Oilpage/oilProducts/OilProduct";
import UgI from "./Ugi";
import UGP from "./UGP";
import UOP from "./UOP";

const UpComingProducts = () => {
  const [Internet, setInternet] = useState(null);
  const [Gas, setGas] = useState(null);
  const [Oil, setOil] = useState(null);

  useEffect(() => {
    AxiosBaseURL.get("/internetservice/allpackage")
      .then((data) => {
        setInternet(data.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
    AxiosBaseURL.get("/gasservice/allgaspackage")
      .then((data) => {
        setGas(data.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
    AxiosBaseURL.get("/oilservice/alloilpackage")
      .then((data) => {
        setOil(data.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Assuming your data is stored in a variable called 'data'
  const currentDate = new Date();

  const futureInternetData = Internet?.filter(
    (item) => new Date(item.date) > currentDate
  );

  const futureGasData = Gas?.filter(
    (item) => new Date(item.publishDate) > currentDate
  );

  const futureOilData = Oil?.filter(
    (item) => new Date(item.publishDate) > currentDate
  );

  // if (isLoading || gasisLoading || oilisLoading) {
  //   return <LoadingSpinner />;
  // }
  //   if (isError || gasisError || oilisError) {
  //     return toast.error(error.message, {
  //       id: "clipboard",
  //     });
  //   }
  return (
    <div className="my-10 ">
      <h1 className="text-center font-bold text-secondary text-xl md:text-2xl lg:text-4xl">
        Upcoming Products
      </h1>
      <div className="w-full  flex flex-wrap justify-around gap-3">
        {/* internet */}

        {futureInternetData && (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold my-5 md:my-10">Internet</h1>
            <div className="">
              {futureInternetData?.slice(0, 2).map((data) => (
                <UgI data={data} key={data._id} />
              ))}
            </div>
          </div>
        )}

        {/* gas */}

        {futureGasData && (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold my-5 md:my-10">Lpg Gas</h1>
            {futureGasData && (
              <div className="   ">
                {futureGasData?.slice(0, 2).map((data) => (
                  <UGP data={data} key={data._id}></UGP>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Food Oil */}

        {futureOilData && (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold my-5 md:my-10">Food Oil</h1>
            {futureOilData && (
              <div className="  ">
                {futureOilData?.slice(0, 2).map((data) => (
                  <UOP data={data} key={data._id}></UOP>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpComingProducts;
