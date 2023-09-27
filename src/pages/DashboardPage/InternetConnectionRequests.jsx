import React, { useContext } from "react";
import { authContext } from "../../context/UserContext";
import { UsedbUser } from "../../components/Hooks/dbUser";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../axios/AxiosConfig";
import LoadingSpinner from "../../components/shared/loading/Loading";
import toast from "react-hot-toast";
import InternetConnectionReq from "../../components/DashboardPage/InternetConnectionRequest/InternetConnectionReq";

const InternetConnectionRequests = () => {
  const { user } = useContext(authContext);
  const [dbuser] = UsedbUser(user?.email);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["/extrah/inter-connection-request"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get(`/extrah/inter-connection-request`);
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
    <div>
      <h1 className="text-3xl lg:text-4xl text-center font-bold">
        Menual Connection Request
      </h1>
      <div className="flex flex-wrap justify-around gap-5">
        {data?.map((x, y) => (
          <InternetConnectionReq key={y} data={x} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default InternetConnectionRequests;
