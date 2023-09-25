import Header from "../components/home/Header/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";

import { UsedbUser } from "../components/Hooks/dbUser";
import { authContext } from "../context/UserContext";
const DashboardLayout = () => {
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);

  return (
    <div>
      <Header />

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <p>
            <label
              htmlFor="my-drawer-2"
              className="btn drawer-button lg:hidden"
            >
              <GiHamburgerMenu />
            </label>
          </p>
          <div className="w-full container mx-auto px-1 lg:px-5">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content font-bold">
            {/* Sidebar content here */}
            <li>
              <Link to={"/dashboard"}> Profile</Link>
            </li>
            <li>
              <Link to={"/dashboard/mybooking"}> My Bookings</Link>
            </li>
            <li>
              <Link to={"/dashboard/cart"}> My Shopping Cart</Link>
            </li>
            <li>
              <Link to={"/dashboard/internetbill"}> Internet Bill Summary</Link>
            </li>
            {dbuser?.role === "admin" && (
              <>
                <li>
                  <Link to={"/dashboard/order"}> All Order</Link>
                </li>
                <li>
                  <Link to={"/dashboard/internet"}> Internet Packages</Link>
                </li>
                <li>
                  <Link to={"/dashboard/gas"}> Lpg Gas </Link>
                </li>
                <li>
                  <Link to={"/dashboard/oil"}> Oil</Link>
                </li>
                <li>
                  <Link to={"/dashboard/users"}>All Users</Link>
                </li>
                <li>
                  <Link to={"/dashboard/internetusers"}>Internet Users</Link>
                </li>
                <li>
                  <Link to={"/dashboard/editbanner"}>Edit Banner</Link>
                </li>
                <li>
                  <Link to={"/dashboard/updatecontactusdetails"}>
                    Edit Home Contac Us
                  </Link>
                </li>
                <li>
                  <Link to={"/dashboard/aboutus"}>Update About Us</Link>
                </li>
                <li>
                  <Link to={"/dashboard/feedback"}>Update Feedbacks</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
