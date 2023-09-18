import { React, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Context/UserContext";
import LoadingSpinner from "../components/shared/loading/Loading";
import toast from "react-hot-toast";

const PrivatRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);

  if (loading) {
    return (
      <div>
        {/* <Loading></Loading> */}
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    toast.error("please LogIn first ", {
      id: "login",
    });
    return <Navigate to="/service/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivatRoutes;
