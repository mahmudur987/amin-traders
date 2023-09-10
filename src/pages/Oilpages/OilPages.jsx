import OilPageBanner from "../../components/Oilpage/banner/OilPageBanner";
import OilProducts from "../../components/Oilpage/oilProducts/OilProducts";
import WelcomeOilPage from "../../components/Oilpage/welcome/WelcomeOilPage";

const OilPages = () => {
  return (
    <div>
      <OilPageBanner />
      <OilProducts />
      <WelcomeOilPage />
    </div>
  );
};

export default OilPages;
