import { useContext, useEffect, useState } from "react";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import UIP from "./UIP";
import UGP from "./UGP";
import UOP from "./UOP";
import { authContext } from "../../../context/UserContext";
import LoadingSpinner from "../../shared/loading/Loading";
import UBP from "./UBP";

const UpComingProducts = () => {
  const [Internet, setInternet] = useState(null);
  const [Gas, setGas] = useState(null);
  const [Oil, setOil] = useState(null);
  const [Bags, setBags] = useState(null);
  const { loading, Setloading } = useContext(authContext);
  useEffect(() => {
    Setloading(true);
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
    AxiosBaseURL.get("/bag")
      .then((data) => {
        setBags(data.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
    Setloading(false);
  }, [loading, Setloading]);

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
  const futureBagData = Bags?.filter(
    (item) => new Date(item.publishDate) > currentDate
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="my-10 ">
      <h1 className="text-center font-bold text-secondary text-xl md:text-2xl lg:text-4xl">
        Upcoming Products
      </h1>
      <div className="w-full  flex flex-wrap justify-around gap-3">
        {/* internet */}

        {futureInternetData?.length > 0 && (
          <div className="w-full h-full flex flex-col items-center ">
            <h1 className="text-2xl font-bold my-5 md:my-10">Internet</h1>
            <div className="w-full">
              {futureInternetData?.slice(0, 1).map((data) => (
                <UIP data={data} key={data._id} />
              ))}
            </div>
          </div>
        )}

        {/* gas */}

        {futureGasData?.length > 0 && (
          <div className=" h-full flex flex-col items-center">
            <h1 className="text-2xl font-bold my-5 md:my-10">Lpg Gas</h1>
            {futureGasData && (
              <div className=" h-full  ">
                {futureGasData?.slice(0, 1).map((data) => (
                  <UGP data={data} key={data._id}></UGP>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Food Oil */}

        {futureOilData?.length > 0 && (
          <div className="h-full flex flex-col items-center">
            <h1 className="text-2xl font-bold my-5 md:my-10">Food Oil</h1>
            {futureOilData && (
              <div className=" h-full ">
                {futureOilData?.slice(0, 1).map((data) => (
                  <UOP data={data} key={data._id}></UOP>
                ))}
              </div>
            )}
          </div>
        )}
        {/* Bags */}

        {futureBagData?.length > 0 && (
          <div className="h-full flex flex-col items-center">
            <h1 className="text-2xl font-bold my-5 md:my-10">Bags</h1>
            {futureBagData && (
              <div className=" h-full ">
                {futureBagData?.slice(0, 2).map((data) => (
                  <UBP data={data} key={data._id}></UBP>
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
