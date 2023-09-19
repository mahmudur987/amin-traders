import { Outlet } from "react-router-dom";
import Header from "../components/home/Header/Header";
import Footer from "../components/shared/footer/Footer";
import { useContext } from "react";
import { authContext } from "../context/UserContext";

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
