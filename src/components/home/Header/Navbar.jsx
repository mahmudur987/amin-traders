import { Link, useLocation } from "react-router-dom";
import { AiOutlineCaretDown, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li className="dropdown">
        <label onClick={() => setShowMenu(!showMenu)} tabIndex={1} className="">
          Services <AiOutlineCaretDown />
        </label>
        <ul
          tabIndex={1}
          className=" menu p-2 shadow  rounded-box w-52"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu && (
            <>
              <li>
                <Link to={"/internetservice"}>Internet </Link>
              </li>

              <li>
                <Link>Service 2</Link>
              </li>
              <li>
                <Link>Service 3</Link>
              </li>
            </>
          )}
        </ul>
      </li>
      <li>
        <Link to={"/"}>Address</Link>
      </li>
      <li>
        <Link to={"/login"}>LogIn</Link>
      </li>
      <li>
        <Link to={"/"}>LogOut</Link>
      </li>
    </>
  );

  return (
    <div className={`navbar ${pathname === "/" ? "text-white" : ""}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenuUnfold />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost  text-xl md:text-2xl lg:text-3xl uppercase">
          Amin-Traders
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{menuItems}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
