import { Outlet } from "react-router-dom";
import Header from "../components/home/Header/Header";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
