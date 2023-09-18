import React from "react";
import SinglePackage from "../../InternetServicePage/InternetPackages/SinglePackage";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
import Product from "../../GasServicePage/Products/product";
import OilProduct from "../../Oilpage/oilProducts/OilProduct";

const UpComingProducts = () => {
  const {
    data: Internet,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/internetservice/allpackage");
      return data.data.data;
    },
  });
  const {
    data: Gas,
    isLoading: gasisLoading,
    isError: isgasError,
    error: gasError,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/gasservice/allgaspackage");
      return data.data.data;
    },
  });
  const {
    data: Oil,
    isLoading: oilisLoading,
    isError: oilisError,
    error: oilError,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/oilservice/alloilpackage");
      return data.data.data;
    },
  });

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
  console.log(Internet);
  console.log(Gas);
  console.log(Oil);

  console.log(futureGasData);

  if (isLoading || gasisLoading || oilisLoading) {
    return <LoadingSpinner />;
  }
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* internet */}
        <div>
          <h1>Internet</h1>
          {futureInternetData && (
            <div className="w-full  ">
              {futureInternetData?.slice(0, 2).map((data) => (
                <SinglePackage data={data} key={data._id}></SinglePackage>
              ))}
            </div>
          )}
        </div>
        {/* gas */}

        <div>
          <h1>Lpg Gas</h1>
          {futureGasData && (
            <div className="w-full   ">
              {futureGasData?.slice(0, 2).map((data) => (
                <Product data={data} key={data._id}></Product>
              ))}
            </div>
          )}
        </div>

        {/* Food Oil */}

        <div>
          <h1>Food Oil</h1>
          {futureOilData && (
            <div className="w-full   ">
              {futureOilData?.slice(0, 2).map((data) => (
                <OilProduct data={data} key={data._id}></OilProduct>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpComingProducts;
