import React from "react";
import SingleFeedBack from "./SingleFeedBack";
import { useQuery } from "@tanstack/react-query";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import LoadingSpinner from "../../shared/loading/Loading";
import toast from "react-hot-toast";

const UpdateFeedback = () => {
  const {
    data: feedbacks,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["feedback"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/extrah/feedback");
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
      <h1 className=" text-2xl font-bold text-center my-8">Update feedbacks</h1>

      <div className="flex justify-around flex-wrap gap-5">
        {feedbacks?.map((x, i) => (
          <SingleFeedBack key={i} data={x} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default UpdateFeedback;
