import { useEffect, useState } from "react";
import AxiosBaseURL from "../../axios/AxiosConfig";
import { useQuery } from "@tanstack/react-query";

export const UsedbUser = (email) => {
  const {
    data: dbuser,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [email],
    queryFn: async () => {
      const data = await AxiosBaseURL.get(`/users/${email}`);

      return data.data.data;
    },
  });
  return [dbuser, isLoading, isError, error, refetch];
};
