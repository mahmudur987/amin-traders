import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import HomepageLayout from "../Layouts/HomePageLayout";
import MainLayout from "../Layouts/MainLayout";
import GasServicePage from "../pages/gasServicePage/GasServicePage";
import OilPages from "../pages/Oilpages/OilPages";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import InternetService from "../pages/internetServicePage/InternetServicePage";
import NotFound from "../components/shared/NotFound/NotFound";
import DashboardLayout from "../Layouts/DashboardLayout";
import Profile from "../pages/DashboardPage/Profile";
import Internet from "../pages/DashboardPage/Internet";
import Oil from "../pages/DashboardPage/Oil";
import Gas from "../pages/DashboardPage/Gas";
import AllOrder from "../pages/DashboardPage/AllOrder";

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
        element: <InternetService />,
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
        errorElement: <>some error happend</>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "/dashboard/order",
        element: <AllOrder />,
      },
      {
        path: "/dashboard/internet",
        element: <Internet />,
      },
      {
        path: "/dashboard/gas",
        element: <Gas />,
      },
      {
        path: "/dashboard/oil",
        element: <Oil />,
      },
      {
        path: "/dashboard/users",
        element: <Profile />,
      },
    ],
  },
]);
