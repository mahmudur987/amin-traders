// src/components/Slider.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
// Import your images

const GasPageBanner = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/banner");
      return data.data.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return toast.error(error.message, {
      id: "clipboard",
    });
  }

  const sliderData = data?.filter((x) => x.bannerFor === "gasPage");

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {sliderData.map((x, i) => (
        <div className="mx-auto" key={i}>
          <div
            className="hero min-h-[450px] bg-center"
            style={{
              backgroundImage: `url(${x.ImageUrl})`,
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="flex justify-center ">
              <div className="w-full text-white ">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                  {" "}
                  {x.heading}{" "}
                </h1>
                <p className="mb-5 text-xl">{x.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default GasPageBanner;
