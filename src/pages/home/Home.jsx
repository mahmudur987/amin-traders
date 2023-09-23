import ContactUs from "../../components/home/ConntacUs/ContactUs";
import Galarry from "../../components/home/Gallary/Galarry";
import UpComingProducts from "../../components/home/UpcomingProduct/UpComingProducts";
import BannerSlider from "../../components/home/banner/BannerSlider";
import FeedbackForm from "../../components/home/feedbackFrom/FeedBackFrom";
import HomeAboutUs from "../../components/home/homeAboutUs/HomeAboutUs";
import Offer from "../../components/home/offer/Offer";
import Services from "../../components/home/service/Services";
import Advantage from "../../components/shared/Advantage/Advantage";
import LikeGas from "../../components/shared/YouMayLike/Gas/LikeGas";
import LikeInternet from "../../components/shared/YouMayLike/Internet/LikeInternet";
import LikeOil from "../../components/shared/YouMayLike/Oil/LikeOil";

const Home = () => {
  return (
    <div className=" mx-auto ">
      <div className="min-h-[650px] bg-gray-700">
        <BannerSlider />
      </div>

      <Services />
      <UpComingProducts />
      <Offer />

      <HomeAboutUs />

      <Advantage />
      <LikeInternet />
      <LikeGas />
      <LikeOil />
      <Galarry />
      <ContactUs />
      <FeedbackForm />
    </div>
  );
};

export default Home;
