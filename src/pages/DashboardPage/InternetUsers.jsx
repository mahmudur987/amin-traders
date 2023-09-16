import { AiFillCaretDown } from "react-icons/ai";
import InternetUser from "../../components/DashboardPage/InternetUsers/InternetUser";
import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import AxiosBaseURL from "../../axios/AxiosConfig";
import LoadingSpinner from "../../components/shared/loading/Loading";

const InternetUsers = () => {
  const {
    data: internetUsers,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/internetusers");
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
  return (
    <div className="my-10 flex flex-col gap-10 items-center p-2 lg:p-10">
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
        All Internet Users
      </h1>

      <div className="w-full flex justify-end">
        <button className="btn btn-outline ">
          sort
          <span className="text-xl">
            <AiFillCaretDown />
          </span>{" "}
        </button>
      </div>
      {/* internet order */}
      <div className="w-full flex flex-col  gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {internetUsers?.map((user, i) => (
            <InternetUser refetch={refetch} key={i} index={i} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternetUsers;
