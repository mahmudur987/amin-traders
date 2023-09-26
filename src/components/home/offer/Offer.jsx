import AxiosBaseURL from "../../../axios/AxiosConfig";
import SinglePackage from "../../InternetServicePage/InternetPackages/SinglePackage";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../context/UserContext";
import Product from "../../GasServicePage/Products/product";
import OilProduct from "../../Oilpage/oilProducts/OilProduct";
import BagDisplay from "../../Bags/BagDisplay";
const Offer = () => {
  const [Internet, setInternet] = useState(null);
  const [Gas, setGas] = useState(null);
  const [Oil, setOil] = useState(null);
  const [Bag, setBag] = useState(null);
  const { loading, Setloading } = useContext(authContext);
  useEffect(() => {
    Setloading(true);
    AxiosBaseURL.get("/internetservice/allpackage")
      .then((data) => {
        setInternet(data.data.data.filter((x) => x.bestDeals === true));
      })
      .catch((err) => {
        console.error(err);
        toast.error("some Error happen");
      });
    AxiosBaseURL.get("/gasservice/allgaspackage")
      .then((data) => {
        setGas(data.data.data.filter((x) => x.bestDeals === true));
      })
      .catch((err) => {
        console.error(err);
        toast.error("some Error happen");
      });
    AxiosBaseURL.get("/oilservice/alloilpackage")
      .then((data) => {
        setOil(data.data.data.filter((x) => x.bestDeals === true));
      })
      .catch((err) => {
        console.error(err);
        toast.error("some Error happen");
      });
    AxiosBaseURL.get("/bag")
      .then((data) => {
        setBag(data.data.data.filter((x) => x.bestDeals === true));
      })
      .catch((err) => {
        console.error(err);
        toast.error("some Error happen");
      });
    Setloading(false);
  }, []);
  console.log(Bag);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 200,
    cssEase: "linear",
  };
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {(Internet?.length > 0 || Gas?.length > 0 || Oil?.length > 0) && (
        <div className="my-10 flex flex-col items-center ">
          <h1 className="text-center font-bold text-secondary text-xl md:text-2xl lg:text-4xl md:my-8">
            Todays Exclusive Offer
          </h1>

          <div className="w-full  flex justify-around flex-wrap gap-5 ">
            {Internet?.length > 0 && (
              <div className="w-full max-w-lg h-[500px] border p-5 ">
                <Slider {...settings}>
                  {Internet?.slice(0, 4).map((data) => (
                    <SinglePackage data={data} key={data._id}></SinglePackage>
                  ))}
                </Slider>
              </div>
            )}
            {Gas?.length > 0 && (
              <div className="w-full max-w-lg  h-[500px] border  p-5 ">
                <Slider {...settings}>
                  {Gas?.slice(0, 4).map((data) => (
                    <Product data={data} key={data._id} />
                  ))}
                </Slider>
              </div>
            )}
            {Oil?.length > 0 && (
              <div className="w-full max-w-lg  h-[500px] border    p-5 ">
                <Slider {...settings}>
                  {Oil?.slice(0, 4).map((data) => (
                    <OilProduct data={data} key={data._id} />
                  ))}
                </Slider>
              </div>
            )}
            {Bag?.length > 0 && (
              <div className="w-full max-w-lg  h-[500px] border    p-5 ">
                <Slider {...settings}>
                  {Bag?.slice(0, 4).map((data) => (
                    <BagDisplay bag={data} key={data._id} />
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Offer;
