import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/home/Home";
import InternetServicePage from "../pages/broadBandInternet/InternetServicePage";
import InternetservicePageLayout from "../Layouts/internetservicePageLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/internetservice",
    element: <InternetservicePageLayout />,
    children: [
      {
        path: "/internetservice",
        element: <InternetServicePage />,
      },
    ],
  },
]);
