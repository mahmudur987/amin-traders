/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import LoadingSpinner from "../components/shared/loading/Loading";
import toast from "react-hot-toast";
import { authContext } from "../context/UserContext";
import { UsedbUser } from "../components/Hooks/dbUser";

const PrivatRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  if (loading) {
    return (
      <div>
        {/* <Loading></Loading> */}
        <LoadingSpinner />
      </div>
    );
  }

  if (dbuser?.role !== "admin") {
    toast.error("please LogIn as admin ", {
      id: "login",
    });
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivatRoutes;
