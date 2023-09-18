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
      heading: "Welcome to  AMIN-TRADERS",
      text: "we're committed to making your life easier. Whether you need high-speed broadband internet to stay connected, cylinder gas for cooking, or essential items like food oil and woven bags, we have it all. Explore our wide range of products and services.",
    },
    {
      ImageUrl:
        "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      heading: "Discover Convenience and Quality ",
      text: "Discover a new level of convenience and quality at [AMIN_TRADERS]. We offer a range of essential services, including high-speed broadband internet, cylinder gas, and everyday necessities like food oil and woven bags. Step into a shopping experience that's tailored to your needs, and let us simplify your life.",
    },
    {
      ImageUrl:
        "https://images.unsplash.com/photo-1598007805442-51d4c5f83236?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      heading: "Experience Hassle-Free Shopping for All Your Needs",
      text: "Welcome to [AMIN_TRADERS], your trusted source for all your essential requirements. With a wide range of services, including broadband internet, cylinder gas, food oil, and woven bags, we're here to make your life easier. Experience the convenience of shopping with us and enjoy top-notch products and services.",
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
              <div className="w-full lg:w-2/3">
                <h1 className="mb-5 text-2xl lg:text-4xl font-bold uppercase">
                  {x.heading}
                </h1>
                <p className="mb-5">{x.text}</p>
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
