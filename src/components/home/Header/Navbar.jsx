import { Link, useLocation } from "react-router-dom";
import { AiOutlineCaretDown, AiOutlineMenuUnfold } from "react-icons/ai";
import { useContext, useState } from "react";

import toast from "react-hot-toast";
import { authContext } from "../../../context/UserContext";
const Navbar = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const { user, logout } = useContext(authContext);

  const handleLogOut = () => {
    logout()
      .then(() => {
        // user Logout
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const menuItems = (
    <>
      <li className=" btn btn-ghost">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="dropdown ">
        <label
          onClick={() => setShowMenu(!showMenu)}
          tabIndex={1}
          className="btn btn-ghost"
        >
          <span> Services</span>{" "}
          <span>
            <AiOutlineCaretDown />
          </span>
        </label>
        <ul
          tabIndex={1}
          className="dropdown-content p-2  z-10 w-full   rounded-box "
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu && (
            <ul className="flex flex-col bg-base-200 text-black items-start w-40 rounded-md pl-2 ">
              <li className=" btn btn-ghost">
                <Link to={"/service"}>Internet </Link>
              </li>

              <li className=" btn btn-ghost">
                <Link to={"/service/gasservice"}>LPG gas</Link>
              </li>
              <li className=" btn btn-ghost">
                <Link to={"/service/oilpage"}>Food Oil</Link>
              </li>
              <li className=" btn btn-ghost">
                <Link to={"/service/bags"}>Bags</Link>
              </li>
            </ul>
          )}
        </ul>
      </li>
      <li className=" btn btn-ghost">
        <Link to={"/dashboard"}>Dashboard</Link>
      </li>

      {user ? (
        <>
          <li className=" btn btn-ghost" onClick={handleLogOut}>
            <Link>LogOut</Link>
          </li>

          <li className=" btn btn-ghost">
            <Link to={"/dashboard"}>{user.displayName}</Link>
          </li>
        </>
      ) : (
        <>
          <li className=" btn btn-ghost">
            <Link to={"/service/signup"}>SignUp</Link>
          </li>
          <li className=" btn btn-ghost">
            <Link to={"/service/login"}>Log In</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className={`navbar ${pathname === "/" ? " text-white" : ""}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenuUnfold />
          </label>
          <ul
            tabIndex={0}
            className="menu bg-base-100 menu-sm dropdown-content mt-3 z-[5] p-2 shadow rounded-box w-52 text-black"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost  text-xl md:text-2xl lg:text-3xl uppercase">
          Amin-Traders
        </a>
      </div>
      <div className=" max-w-xl w-full navbar-center hidden lg:flex">
        <ul className="w-full  flex justify-around px-1  ">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
