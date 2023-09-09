import { Outlet } from "react-router-dom";
import Header from "../components/home/Header/Header";
import Footer from "../components/shared/footer/Footer";
import { authContext } from "../context/UserContext";
import { useContext } from "react";

const MainLayout = () => {
  const { theme } = useContext(authContext);
  return (
    <main
      data-theme={`${theme ? "bumblebee" : "forest"}`}
      className="flex flex-col gap-5"
    >
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
