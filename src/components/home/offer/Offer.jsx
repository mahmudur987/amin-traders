import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import SinglePackage from "../../InternetServicePage/InternetPackages/SinglePackage";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Offer = () => {
  const {
    data: InternetPackagesData,
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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return toast.error(error.message, {
      id: "clipboard",
    });
  }
  return (
    <div className="my-10 flex flex-col items-center ">
      <h1 className="text-center font-bold text-secondary text-xl md:text-2xl lg:text-4xl">
        Todays Exclusive Offer
      </h1>

      <div className="w-full  flex justify-around flex-wrap">
        {InternetPackagesData && (
          <div className="w-full md:w-1/2 lg:1/3  p-5 ">
            <Slider {...settings}>
              {InternetPackagesData?.filter((x) => x.bestDeals === true)
                .slice(0, 4)
                .map((data) => (
                  <SinglePackage data={data} key={data._id}></SinglePackage>
                ))}
            </Slider>
          </div>
        )}
        {/* {InternetPackagesData && (
          <div className="w-full md:w-1/2 lg:1/3   p-5 ">
            <Slider {...settings}>
              {InternetPackagesData?.filter((x) => x.bestDeals === true)
                .slice(0, 4)
                .map((data) => (
                  <SinglePackage data={data} key={data._id}></SinglePackage>
                ))}
            </Slider>
          </div>
        )}
        {InternetPackagesData && (
          <div className="w-full md:w-1/2 lg:1/3   p-5 ">
            <Slider {...settings}>
              {InternetPackagesData?.filter((x) => x.bestDeals === true)
                .slice(0, 4)
                .map((data) => (
                  <SinglePackage data={data} key={data._id}></SinglePackage>
                ))}
            </Slider>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Offer;
