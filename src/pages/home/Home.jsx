import ContactUs from "../../components/home/ConntacUs/ContactUs";
import Galarry from "../../components/home/Gallary/Galarry";
import UpComingProducts from "../../components/home/UpcomingProduct/UpComingProducts";
import BannerSlider from "../../components/home/banner/BannerSlider";
import FeedbackForm from "../../components/home/feedbackFrom/FeedBackFrom";
import HomeAboutUs from "../../components/home/homeAboutUs/HomeAboutUs";
import Offer from "../../components/home/offer/Offer";
import Services from "../../components/home/service/Services";

const Home = () => {
  return (
    <div className=" mx-auto ">
      <BannerSlider />
      <Services />
      <Offer />

      <UpComingProducts />

      <HomeAboutUs />
      <Galarry />
      <ContactUs />
      <FeedbackForm />
    </div>
  );
};

export default Home;
