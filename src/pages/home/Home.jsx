import ContactUs from "../../components/home/ConntacUs/ContactUs";
import Galarry from "../../components/home/Gallary/Galarry";
import BannerSlider from "../../components/home/banner/BannerSlider";
import FeedbackForm from "../../components/home/feedbackFrom/FeedBackFrom";
import HomeAboutUs from "../../components/home/homeAboutUs/HomeAboutUs";
import Offer from "../../components/home/offer/Offer";
import Services from "../../components/home/service/Services";
import Footer from "../../components/shared/footer/Footer";

const Home = () => {
  return (
    <div className="">
      <BannerSlider />
      <Services />
      <Offer />

      <HomeAboutUs />
      <Galarry />
      <ContactUs />
      <FeedbackForm />
      <Footer />
    </div>
  );
};

export default Home;
