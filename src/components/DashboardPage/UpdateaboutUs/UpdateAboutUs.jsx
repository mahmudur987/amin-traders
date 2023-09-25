import { useQuery } from "@tanstack/react-query";
import React from "react";
import AxiosBaseURL from "../../../axios/AxiosConfig";
import toast from "react-hot-toast";
import LoadingSpinner from "../../shared/loading/Loading";
import SingleaboutUs from "./SingleaboutUs";

const UpdateAboutUs = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
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

  return (
    <div>
      <h1 className="text-3xl font-bold text-center uppercase">
        update about us
      </h1>

      <div className=" flex flex-wrap justify-around gap-2">
        {data.map((x, i) => (
          <SingleaboutUs key={i} data={x} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default UpdateAboutUs;
