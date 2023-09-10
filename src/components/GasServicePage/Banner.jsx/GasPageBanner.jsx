// src/components/Slider.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import your images

const GasPageBanner = () => {
  const sliderData = [
    {
      ImageUrl:
        "https://bhowmickgasagency.weebly.com/uploads/7/7/3/5/77351913/94e5a3ffca3d6d4_orig.jpg",
      heading: "Banner 1 Heading",
      text: "Some text describing Banner 1.",
    },
    {
      ImageUrl:
        "https://bdbusinessfinder.com/wp-content/uploads/2019/12/top-lp-gas-in-Bangladesh-1.jpg",
      heading: "Banner 2 Heading",
      text: "Some text describing Banner 2.",
    },
    {
      ImageUrl:
        "https://www.bangladeshyp.com/img/bd/b/1668447067-18-jamuna-l-p-gas.jpg",
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

export default GasPageBanner;
