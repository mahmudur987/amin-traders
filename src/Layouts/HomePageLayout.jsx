import { Outlet } from "react-router-dom";
import Header from "../components/home/Header/Header";
import Footer from "../components/shared/footer/Footer";
import { useContext } from "react";
import { authContext } from "../context/UserContext";
import WhatsAppWidgetPoupup from "../components/WhatsApp/WhatsAppWidget";
import { Helmet } from "react-helmet";

const HomepageLayout = () => {
  const { theme } = useContext(authContext);

  return (
    <main
      data-theme={`${theme ? "bumblebee" : "dark"}`}
      className=" container mx-auto  relative "
    >
      <Helmet>
        <title> Home Amin-traders </title>
      </Helmet>
      <div className="absolute top-0 z-10 w-full">
        <Header />
      </div>
      <Outlet />

      <WhatsAppWidgetPoupup />
      <Footer />
    </main>
  );
};

export default HomepageLayout;
