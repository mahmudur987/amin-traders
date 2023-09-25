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
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
const TopNavbar = () => {
  const { pathname } = useLocation();
  const { SetTheme, theme } = useContext(authContext);
  const {
    data: AddressDetails,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["extrah"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/extrah");
      return data.data.data[0];
    },
  });

  if (isLoading) {
    console.log("loading");
  }
  if (isError) {
    console.log(error);
  }

  const { email, phoneNumber, facebook, twiter, instagram, youtube } =
    AddressDetails || {};

  return (
    <div
      className={`hidden lg:flex justify-between p-1 ${
        pathname === "/" ? "text-white" : "bg-base-100"
      }`}
    >
      <div className="flex items-center gap-2">
        <span>
          <Link target="_blank" to={facebook}>
            <FaFacebook />
          </Link>
        </span>
        <span>
          <Link target="_blank" to={twiter}>
            <FaTwitter />
          </Link>
        </span>
        <span>
          <Link target="_blank" to={instagram}>
            <FaInstagram />
          </Link>
        </span>

        <span>
          <Link target="_blank" to={youtube}>
            <FaYoutube />
          </Link>
        </span>
        <span>
          <Link className="flex gap-2 items-center">
            <FaPhone />
            <span href=""> {phoneNumber} </span>
          </Link>
        </span>
        <span>
          <Link className="flex gap-2 items-center">
            <FaSms />
            <span href=""> {email} </span>
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
