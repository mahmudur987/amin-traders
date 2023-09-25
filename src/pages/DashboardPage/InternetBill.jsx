import React, { useContext } from "react";
import InternetUser from "../../components/DashboardPage/InternetUsers/InternetUser";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/shared/loading/Loading";
import { authContext } from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../axios/AxiosConfig";
import UserInfo from "../../components/DashboardPage/InternetUsers/UserInfo";
import PaymentInfo from "../../components/DashboardPage/InternetUsers/PaymentInfo";
import { useRevalidator } from "react-router-dom";

const InternetBill = () => {
  const { user } = useContext(authContext);
  const revalidator = useRevalidator();
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["internetusers"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/internetusers");
      return data.data.data;
    },
  });
  const internetuser = data?.find((x) => x.email === user.email);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return toast.error(error.message, {
      id: "clipboard",
    });
  }
  return (
    <>
      {internetuser && (
        <div className="my-10 flex flex-col gap-10 items-center p-2 lg:p-10">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">
            Internet Bill
          </h1>

          {/* internet order */}
          <div className="w-full flex flex-col  gap-10">
            <div>
              {" "}
              <UserInfo revalidator={revalidator} user={internetuser} />
              <PaymentInfo paymentData={internetuser} />
            </div>
          </div>
        </div>
      )}

      {!internetuser && (
        <p className="text-3xl text-center my-20 text-emerald-600">
          You are not register as a Internet User
        </p>
      )}
    </>
  );
};

export default InternetBill;
