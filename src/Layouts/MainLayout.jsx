import { Outlet } from "react-router-dom";
import Header from "../components/home/Header/Header";
import Footer from "../components/shared/footer/Footer";
import { useContext } from "react";
import { authContext } from "../context/UserContext";
import WhatsAppWidgetPoupup from "../components/WhatsApp/WhatsAppWidget";

const MainLayout = () => {
  const { theme } = useContext(authContext);
  return (
    <main
      data-theme={`${theme ? "bumblebee" : "forest"}`}
      className="flex flex-col gap-5 relative"
    >
      <div className="fixed top-0 z-20 w-full">
        <Header />
      </div>
      <div className=" mt-40  container mx-auto">
        <Outlet />
      </div>
      <div className=" w-full my-20">
        <WhatsAppWidgetPoupup />
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
