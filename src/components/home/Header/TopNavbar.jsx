import { useContext } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaPhone,
  FaSms,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../../../context/UserContext";
const TopNavbar = () => {
  const { pathname } = useLocation();
  const { SetTheme, theme } = useContext(authContext);
  return (
    <div
      className={`hidden lg:flex justify-between p-1 ${
        pathname === "/" ? "text-white" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <span>
          <Link>
            <FaFacebook />
          </Link>
        </span>
        <span>
          <Link>
            <FaTwitter />
          </Link>
        </span>
        <span>
          <Link>
            <FaInstagram />
          </Link>
        </span>
        <span>
          <Link>
            <FaPinterest />
          </Link>
        </span>
        <span>
          <Link>
            <FaYoutube />
          </Link>
        </span>
        <span>
          <Link className="flex gap-2 items-center">
            <FaPhone />
            <span href="">01671706882</span>
          </Link>
        </span>
        <span>
          <Link className="flex gap-2 items-center">
            <FaSms />
            <span href="">safemahmud987@gmail.com</span>
          </Link>
        </span>
      </div>

      <div>
        <div className="form-control">
          <label className="label cursor-pointer ">
            <span
              className={`label-text mr-1 ${
                pathname === "/" ? "text-white" : ""
              }`}
            >
              {" "}
              Theme
            </span>

            <input
              onClick={() => SetTheme(!theme)}
              type="checkbox"
              className="toggle"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
