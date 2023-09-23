import { useContext } from "react";
import LoadingSpinner from "../../components/shared/loading/Loading";
import toast from "react-hot-toast";
import { authContext } from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../axios/AxiosConfig";
import MyBooked from "../../components/DashboardPage/MyBookings/MyBooked";
import { AiFillCaretDown } from "react-icons/ai";
import { UsedbUser } from "../../components/Hooks/dbUser";
const MyBookings = () => {
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  const {
    data: myorder,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["/orders", dbuser],
    queryFn: async () => {
      const data = await AxiosBaseURL.get(`/orders/${dbuser?._id}`);
      return data.data.data.sort(
        (a, b) => new Date(a.orderDate) - new Date(b.orderDate)
      );
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
      <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">My Bookings</h1>

      <div className="w-full flex justify-end">
        <button className="btn btn-outline ">
          sort
          <span className="text-xl">
            <AiFillCaretDown />
          </span>
        </button>
      </div>

      <div className="w-full flex flex-col  gap-10">
        <div className=" flex justify-around flex-wrap  gap-5 ">
          {myorder.length > 0 &&
            myorder?.map((order, i) => (
              <MyBooked key={i} index={i} order={order} refetch={refetch} />
            ))}
          {myorder.length <= 0 && (
            <div className=" w-full flex  justify-center">
              {" "}
              <p className="text-xl font-bold text-secondary text-center">
                you dont have any booking
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
