import { useQuery } from "@tanstack/react-query";
import { FaRegAddressCard, FaPhone, FaClock } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";

const ContactUs = () => {
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
    return <LoadingSpinner />;
  }
  if (isError) {
    return toast.error(error.message, {
      id: "clipboard",
    });
  }
  return (
    <div className=" flex flex-col items-center justify-center min-h-[400px] border my-10">
      <h2 className="text-3xl text-center font-bold my-4">Contact Us</h2>

      <div className="flex flex-col md:flex-row-reverse">
        <div className="md:w-1/2 p-8 grid items-center  ">
          <div className="flex gap-8 items-center">
            <div>
              {" "}
              <FaRegAddressCard />{" "}
            </div>
            <div>
              <h2 className="font-bold text-lg">Our OfficeAddress</h2>
              <p>{AddressDetails?.address}</p>
            </div>
          </div>

          <div className="flex gap-8 items-center">
            <div>
              {" "}
              <HiOutlineMailOpen />{" "}
            </div>
            <div>
              <h2 className="font-bold text-lg">General Enquirless</h2>
              <p> {AddressDetails?.email}</p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div>
              <FaPhone />{" "}
            </div>
            <div>
              <h2 className="font-bold text-lg">Call Us</h2>
              <p>{AddressDetails?.phoneNumber} </p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div>
              {" "}
              <FaClock />{" "}
            </div>
            <div>
              <h2 className="font-bold text-lg">Our Timing</h2>
              <p> {AddressDetails?.officeTime} </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <img
            className="w-full h-full rounded-3xl"
            src={AddressDetails?.ImageUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
