import { Link } from "react-router-dom";
import { AiOutlineCaretDown } from "react-icons/ai";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li className="dropdown">
        <label tabIndex={0} className="">
          Services <AiOutlineCaretDown />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link>Service 1</Link>
          </li>

          <li>
            <Link>Service 2</Link>
          </li>
          <li>
            <Link>Service 3</Link>
          </li>
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
    <div className="navbar text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            menuIcons
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost  text-xl md:text-2xl lg:text-3xl uppercase">
          Amin-Traders
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
};

export default Navbar;
