import AddressDetailsFrom from "./AddressDetailsFrom";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
const ConnectionSupport = () => {
  return (
    <div className="my-10 flex flex-col lg:flex-row gap-10 p-2 lg:p-10 ">
      {/* left */}
      <div className="lg:w-1/2 flex flex-col gap-8 p-3">
        <h1 className="text-xl md:text-3xl text-center font-bold">
          Need A New Connection
        </h1>

        <div>
          <AddressDetailsFrom />
        </div>
      </div>
      {/* right */}
      <div className="lg:w-1/2 flex flex-col gap-5">
        <h1 className="text-xl md:text-3xl text-center font-bold">
          24/7 Support Service
        </h1>
        <div
          className="hero h-full bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="p-1">
              <p className=" text-3xl my-3 flex justify-center ">
                <span>
                  <AiFillPhone />
                </span>
              </p>
              <h1 className="mb-5 text-3xl font-bold"> 16335</h1>
              <h1 className="mb-5 text-3xl font-bold"> +880-1671-706882</h1>

              <p className=" text-3xl my-3 flex justify-center ">
                <span>
                  <AiOutlineMail />
                </span>
              </p>
              <p className="mb-5 text-3xl font-bold">
                {" "}
                Amintraders985@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectionSupport;
