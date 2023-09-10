// src/components/Slider.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import your images

const BannerSlider = () => {
  const sliderData = [
    {
      ImageUrl:
        "https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1373&q=80",
      heading: "Banner 1 Heading",
      text: "Some text describing Banner 1.",
    },
    {
      ImageUrl:
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      heading: "Banner 2 Heading",
      text: "Some text describing Banner 2.",
    },
    {
      ImageUrl:
        "https://images.unsplash.com/photo-1598007805442-51d4c5f83236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      heading: "Banner 3 Heading",
      text: "Some text describing Banner 3.",
    },
  ];

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
            className="hero min-h-[650px]"
            style={{
              backgroundImage: `url(${x.ImageUrl})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex lg:justify-start text-center text-white">
              <div className="w-full lg:w-1/2">
                <h1 className="mb-5 text-2xl lg:text-4xl font-bold uppercase">
                  Welcome
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
