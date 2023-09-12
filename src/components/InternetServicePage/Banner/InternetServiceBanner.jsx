// src/components/Slider.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import your images

const serviceBanner = () => {
  const sliderData = [
    {
      ImageUrl:
        "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      heading: "Connecting the World. Internet Service Providers Explained",
      text: "Customer Support and Satisfaction: A Critical Factor in ISP Choice",
    },
    {
      ImageUrl:
        "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGludGVybmV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      heading: "Choosing the Right Internet Service Provider for Your Needs",
      text: "Broadband vs. DSL vs. Fiber: Understanding Internet Technologies",
    },
    {
      ImageUrl:
        "https://images.unsplash.com/photo-1564760290292-23341e4df6ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGludGVybmV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
      heading: "High-Speed Internet, A Necessity in the Digital Age",
      text: "Comparing Internet Service Plans: Finding the Best Fit for You",
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
            className="hero min-h-[450px]"
            style={{
              backgroundImage: `url(${x.ImageUrl})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex lg:justify-start text-center text-white">
              <div className="w-full lg:w-1/2">
                <h1 className="mb-5 text-3xl lg:text-5xl font-bold">
                  {" "}
                  {x.heading}{" "}
                </h1>
                <p className="mb-5">{x.text}</p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default serviceBanner;
