import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import AxiosBaseURL from "../../axios/AxiosConfig";
import LoadingSpinner from "../shared/loading/Loading";

const BagWelcome = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["extrah/aboutus"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/extrah/aboutus");
      return data.data.data;
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
  const { heading, ImageUrl, text1, text2 } = data.find(
    (x) => x.aboutFor === "bagPage"
  );
  console.log(data);
  return (
    <div className=" flex flex-col items-center justify-center min-h-[400px] border my-10">
      <h2 className="text-3xl text-center font-bold my-4">{heading} </h2>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 grid items-center  ">
          <p className="mb-4">{text1}</p>
          <p className="mb-4">{text2}</p>
        </div>
        <div className="md:w-1/2 p-8">
          <img className="w-full h-full" src={ImageUrl} />
        </div>
      </div>
    </div>
  );
};

export default BagWelcome;
