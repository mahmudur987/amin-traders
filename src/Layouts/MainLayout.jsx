import { Outlet } from "react-router-dom";
import Header from "../components/home/Header/Header";

const MainLayout = () => {
  return (
    <div className=" relative ">
      <div className="absolute top-0 z-10 w-full">
        <Header />
      </div>
      <Outlet />
      <p>footer</p>
    </div>
  );
};

export default MainLayout;
