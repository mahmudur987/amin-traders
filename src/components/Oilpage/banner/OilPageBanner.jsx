// src/components/Slider.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import your images

const OilPageBanner = () => {
  const sliderData = [
    {
      ImageUrl:
        "https://www.ourpaleolife.com/wp-content/uploads/2021/10/Is-Soybean-Oil-Bad-For-You.jpg",
      heading: "Banner 1 Heading",
      text: "Some text describing Banner 1.",
    },
    {
      ImageUrl:
        "https://www.daily-sun.com/assets/news_images/2022/05/05/Soybean-oil-.jpg",
      heading: "Banner 2 Heading",
      text: "Some text describing Banner 2.",
    },
    {
      ImageUrl:
        "https://www.doctorschoiceoil.com/wp-content/uploads/2022/02/banner-1820-851-oil.jpg",
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
            className="hero min-h-[650px] bg-center"
            style={{
              backgroundImage: `url(${x.ImageUrl})`,
            }}
          >
            <div className="flex lg:justify-start text-center text-white">
              <div className="w-full lg:w-1/2">
                {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default OilPageBanner;
