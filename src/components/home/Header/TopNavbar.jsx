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
const TopNavbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
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
            <a href="">01671706882</a>
          </Link>
        </span>
        <span>
          <Link className="flex gap-2 items-center">
            <FaSms />
            <a href="">safemahmud987@gmail.com</a>
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
            <input type="checkbox" className="toggle" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
