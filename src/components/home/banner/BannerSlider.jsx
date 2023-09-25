// src/components/Slider.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
// Import your images

const BannerSlider = () => {
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

  const sliderData = data?.filter((x) => x.bannerFor === "homePage");

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
    <div>
      <Slider {...settings}>
        {sliderData.map((x, i) => (
          <div className="mx-auto" key={i}>
            <div
              className="hero min-h-[650px]"
              style={{
                backgroundImage: `url(${x.ImageUrl})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="flex lg:justify-start text-center text-white">
                <div className="w-full lg:w-2/3">
                  <h1 className="mb-5 text-2xl lg:text-4xl font-bold uppercase">
                    {x.heading}
                  </h1>
                  <p className="mb-5">{x.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
