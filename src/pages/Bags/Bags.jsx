import { useQuery } from "@tanstack/react-query";
import BagDisplay from "../../components/Bags/BagDisplay";
import LoadingSpinner from "../../components/shared/loading/Loading";
import AxiosBaseURL from "../../axios/AxiosConfig";
import toast from "react-hot-toast";

const Bags = () => {
  const {
    data: Bags,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["bag"],
    queryFn: async () => {
      const data = await AxiosBaseURL.get("/bag");
      return data.data.data.filter(
        (item) => new Date(item.publishDate) < new Date()
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
    <div className="container mx-5 p-2 lg:p-8">
      <h1 className="text-3xl font-semibold mb-4">Woven Bags</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Bags?.map((x) => (
          <BagDisplay key={x._id} bag={x} />
        ))}
      </div>
    </div>
  );
};

export default Bags;
