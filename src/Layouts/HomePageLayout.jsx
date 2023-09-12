import { Outlet } from "react-router-dom";
import Header from "../components/home/Header/Header";
import Footer from "../components/shared/footer/Footer";
import { useContext } from "react";
import { authContext } from "../Context/UserContext";

const HomepageLayout = () => {
  const { theme } = useContext(authContext);

  return (
    <main
      data-theme={`${theme ? "bumblebee" : "dark"}`}
      className=" container mx-auto  relative "
    >
      <div className="absolute top-0 z-10 w-full">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </main>
  );
};

export default HomepageLayout;
