import Header from "../components/home/Header/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
const DashboardLayout = () => {
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
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link> Profile</Link>
            </li>
            <li>
              <Link> All Order</Link>
            </li>
            <li>
              <Link to={"/dashboard/internet"}> Internet Packages</Link>
            </li>
            <li>
              <Link to={"/dashboard/gas"}> Lpg Gas </Link>
            </li>
            <li>
              <Link> Oil</Link>
            </li>
            <li>
              <Link>All Users</Link>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;