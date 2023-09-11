import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import HomepageLayout from "../Layouts/HomePageLayout";
import MainLayout from "../Layouts/MainLayout";
import GasServicePage from "../pages/gasServicePage/GasServicePage";
import OilPages from "../pages/Oilpages/OilPages";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import InternetPackages from "../components/InternetServicePage/InternetPackages/InternetPackages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomepageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/service",
    element: <MainLayout />,
    children: [
      {
        path: "/service",
        element: <InternetPackages />,
      },
      {
        path: "/service/gasservice",
        element: <GasServicePage />,
      },
      {
        path: "/service/oilpage",
        element: <OilPages />,
      },
      {
        path: "/service/oilpage",
        element: <OilPages />,
      },
      {
        path: "/service/signup",
        element: <SignUpPage />,
      },
      {
        path: "/service/login",
        element: <LoginPage />,
      },
    ],
  },
]);
