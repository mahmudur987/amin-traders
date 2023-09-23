import Slider from "react-slick";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../../axios/AxiosConfig";
import LoadingSpinner from "../../loading/Loading";
import SinglePackage from "../../../InternetServicePage/InternetPackages/SinglePackage";

const LikeInternet = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allpackage"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/internetservice/allpackage");
      return data.data.data.filter((item) => new Date(item.date) < new Date());
    },
  });
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: "green",
          width: "40px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          background: "green",
          width: "40px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          margin: "0px -20px ",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <div className="my-10 md:my-20 lg:my-32 mx-auto px-7 lg:px-20">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold my-5 md:my-8 lg:my-10">
        You Might Also Like
      </h1>
      <Slider {...settings}>
        {data.map((x, i) => (
          <SinglePackage key={i} data={x} />
        ))}
      </Slider>
    </div>
  );
};

export default LikeInternet;
