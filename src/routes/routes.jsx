import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/Home";
import InternetServicePage from "../pages/broadBandInternet/InternetServicePage";
import HomepageLayout from "../Layouts/HomePageLayout";
import MainLayout from "../Layouts/MainLayout";

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
    ],
  },
]);
