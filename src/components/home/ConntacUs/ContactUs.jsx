import { FaRegAddressCard, FaPhone, FaClock } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const ContactUs = () => {
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
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, aut!
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-center">
            <div>
              {" "}
              <HiOutlineMailOpen />{" "}
            </div>
            <div>
              <h2 className="font-bold text-lg">General Enquirless</h2>
              <p> lorem@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div>
              <FaPhone />{" "}
            </div>
            <div>
              <h2 className="font-bold text-lg">Call Us</h2>
              <p> +8801671706882</p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div>
              {" "}
              <FaClock />{" "}
            </div>
            <div>
              <h2 className="font-bold text-lg">Our Timing</h2>
              <p>24/7 ,9.00Am-10.00pm</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <img
            className="w-full h-full rounded-3xl"
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
