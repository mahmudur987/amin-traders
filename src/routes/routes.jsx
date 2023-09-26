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
import AllUsers from "../pages/DashboardPage/Allusers";
import InternetUsers from "../pages/DashboardPage/InternetUsers";
import InternetUserDetails from "../components/DashboardPage/InternetUsers/InternetUserDetails";
import AxiosBaseURL from "../axios/AxiosConfig";
import PrivatRoutes from "./PrivetRoutes";
import MyBookings from "../pages/DashboardPage/MyBookings";
import MyCart from "../pages/DashboardPage/MyCart";
import Bags from "../pages/Bags/Bags";
import EditBanner from "../pages/DashboardPage/EditBanner";
import ProductDetails from "../components/GasServicePage/Products/ProductDetails";
import OilProductDetails from "../components/Oilpage/oilProducts/OilProductDetails";
import UpdateContactUsDetails from "../components/DashboardPage/UpdateContactUsDetails/UpdateContactUsDetails";
import UpdateAboutUs from "../components/DashboardPage/UpdateaboutUs/UpdateAboutUs";
import UpdateFeedback from "../components/DashboardPage/UpdateFeedbacks/UpdateFeedback";
import InternetBill from "../pages/DashboardPage/InternetBill";
import BagDetails from "../components/Bags/BagDetails";
import Bag from "../pages/DashboardPage/Bag";
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
        path: "/service/gasservice/:id",
        element: <ProductDetails />,
        loader: async ({ params }) => {
          return AxiosBaseURL.get(`/gasservice/${params.id}`);
        },
      },
      {
        path: "/service/oilpage",
        element: <OilPages />,
      },
      {
        path: "/service/oilpage/:id",
        element: <OilProductDetails />,
        loader: async ({ params }) => {
          return AxiosBaseURL.get(`/oilservice/${params.id}`);
        },
      },

      {
        path: "/service/bags",
        element: <Bags />,
      },
      {
        path: "/service/bags/:id",
        element: <BagDetails />,
        loader: async ({ params }) => {
          return AxiosBaseURL.get(`/bag/${params.id}`);
        },
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
    element: (
      <PrivatRoutes>
        <DashboardLayout />
      </PrivatRoutes>
    ),
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
        path: "/dashboard/bag",
        element: <Bag />,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/internetusers",
        element: <InternetUsers />,
      },
      {
        path: "/dashboard/mybooking",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/cart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/editbanner",
        element: <EditBanner />,
      },
      {
        path: "/dashboard/updatecontactusdetails",
        element: <UpdateContactUsDetails />,
      },
      {
        path: "/dashboard/aboutus",
        element: <UpdateAboutUs />,
      },
      {
        path: "/dashboard/feedback",
        element: <UpdateFeedback />,
      },
      {
        path: "/dashboard/internetbill",
        element: <InternetBill />,
      },
      {
        path: "/dashboard/internetuser/:id",
        loader: async ({ params }) => {
          return AxiosBaseURL.get(`/internetusers/${params.id}`);
        },
        element: <InternetUserDetails />,
      },
    ],
  },
]);
