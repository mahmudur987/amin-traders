import GasPageBanner from "../../components/GasServicePage/Banner.jsx/GasPageBanner";
import Products from "../../components/GasServicePage/Products/Products";
import Welcome from "../../components/GasServicePage/welcome/Welcome";

const GasServicePage = () => {
  return (
    <div className="container mx-auto">
      <GasPageBanner />
      <Products />
      <Welcome />
    </div>
  );
};

export default GasServicePage;
