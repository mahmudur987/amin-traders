import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";
import User from "./User";
import { useQuery } from "@tanstack/react-query";
import { AiFillCaretDown } from "react-icons/ai";
const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["/users"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/users");
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
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">All USERS</h1>

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
          {users.map((user, i) => (
            <User refetch={refetch} key={i} index={i} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
