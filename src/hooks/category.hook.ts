import { getAllCategory } from "@/services/Category";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["get-categories"],
    queryFn: async () => await getAllCategory(),
  });
};
