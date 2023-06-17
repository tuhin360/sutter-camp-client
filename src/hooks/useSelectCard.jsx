import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectCard = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {refetch, data:  courseCart = [] } = useQuery({
    queryKey: ["selectClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectClasses?email=${user?.email}`);
      console.log('res axios', res);
      return res.data;
    },
  })

  return [courseCart, refetch]
};

export default useSelectCard;
