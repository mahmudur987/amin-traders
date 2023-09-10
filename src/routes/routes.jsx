import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import InternetServicePage from "../pages/internetServicePage/InternetServicePage";
import HomepageLayout from "../Layouts/HomePageLayout";
import MainLayout from "../Layouts/MainLayout";
import GasServicePage from "../pages/gasServicePage/GasServicePage";

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
    path: "/internetservice",
    element: <MainLayout />,
    children: [
      {
        path: "/internetservice",
        element: <InternetServicePage />,
      },
      {
        path: "/internetservice/gasservice",
        element: <GasServicePage />,
      },
    ],
  },
]);
