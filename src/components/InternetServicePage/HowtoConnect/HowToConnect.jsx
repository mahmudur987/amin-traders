import { BsFillClipboardCheckFill } from "react-icons/bs";
import { LuPackagePlus } from "react-icons/lu";
import { GrDeliver } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";

const HowToConnect = () => {
  return (
    <div className="my-10 flex flex-col md:flex-row items-center justify-center gap-5 p-5">
      <div className="flex flex-col items-center md:gap-3">
        <p className="text-5xl">
          {" "}
          <BsFillClipboardCheckFill />{" "}
        </p>
        <p className="text-xl font-bold">Cheak Network Coverage</p>
      </div>

      <p className="text-3xl">
        <AiOutlineArrowRight />
      </p>

      <div className="flex flex-col items-center gap-3">
        <p className="text-5xl">
          {" "}
          <LuPackagePlus />{" "}
        </p>
        <p className="text-xl font-bold">Choose package</p>
      </div>

      <p className="text-3xl">
        <AiOutlineArrowRight />
      </p>

      <div className="flex flex-col items-center gap-3">
        <p className="text-5xl">
          {" "}
          <GrDeliver />{" "}
        </p>
        <p className="text-xl font-bold">Get Connected</p>
      </div>
    </div>
  );
};

export default HowToConnect;
