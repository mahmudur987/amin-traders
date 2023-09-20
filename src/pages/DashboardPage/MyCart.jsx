import { useContext } from "react";
import LoadingSpinner from "../../components/shared/loading/Loading";
import toast from "react-hot-toast";
import { authContext } from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../axios/AxiosConfig";

import { AiFillCaretDown } from "react-icons/ai";
import Cart from "../../components/DashboardPage/Mycart/Cart";
const MyBookings = () => {
  const { user } = useContext(authContext);
  const {
    data: carts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["/cart"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/cart");
      return data.data.data;
    },
  });

  const mycart = carts?.filter((x) => x.userEmail === user?.email);

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
        My Shopping Cart
      </h1>

      <div className="w-full flex justify-end">
        <button className="btn btn-outline ">
          sort
          <span className="text-xl">
            <AiFillCaretDown />
          </span>
        </button>
      </div>

      <div className="w-full flex flex-col  gap-10">
        <div className="grid ">
          {mycart.length > 0 && (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Si</th>
                    <th>Catagory</th>
                    <th>Package</th>
                    <th>Price</th>
                    <th>Order Now</th>
                    <th>Remove </th>
                  </tr>
                </thead>
                <tbody>
                  {mycart.map((cart, i) => (
                    <Cart key={i} index={i} cart={cart} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* agsdhaGBDHSG */}
          {mycart.length <= 0 && (
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
