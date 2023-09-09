import { Outlet } from "react-router-dom";
import Header from "../components/home/Header/Header";
import Footer from "../components/shared/footer/Footer";

const HomepageLayout = () => {
  return (
    <main className=" container mx-auto relative">
      <div className="absolute top-0 z-10 w-full">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomepageLayout;
