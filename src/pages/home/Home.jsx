import ContactUs from "../../components/home/ConntacUs/ContactUs";
import FeedBacks from "../../components/home/Feedbacks/FeedBacks";
import Galarry from "../../components/home/Gallary/Galarry";
import UpComingProducts from "../../components/home/UpcomingProduct/UpComingProducts";
import BannerSlider from "../../components/home/banner/BannerSlider";
import FeedbackForm from "../../components/home/feedbackFrom/FeedBackFrom";
import HomeAboutUs from "../../components/home/homeAboutUs/HomeAboutUs";
import Offer from "../../components/home/offer/Offer";
import Services from "../../components/home/service/Services";
import Advantage from "../../components/shared/Advantage/Advantage";

const Home = () => {
  return (
    <div className=" container mx-auto ">
      <div className="min-h-[650px] bg-gray-700">
        <BannerSlider />
      </div>
      <Services />
      <UpComingProducts />
      <Offer />
      <HomeAboutUs />
      <Advantage />
      {/* <Galarry /> */}

      <FeedBacks />

      <ContactUs />
      <FeedbackForm />
    </div>
  );
};

export default Home;
