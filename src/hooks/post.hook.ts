import { getAllPosts, makePost } from "@/services/PostServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

// payload: FormData, token: string

interface PostPayload {
  formdata: FormData;
  token: string;
}

export const useCreatePost = () => {
  return useMutation({
    mutationKey: ["create-post"],
    mutationFn: async ({ formdata, token }: PostPayload) =>
      await makePost({ formdata, token }),
    onSuccess: () => {
      toast.success("Post created successfully");
    },
  });
};

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["get-all-posts"],
    queryFn: async () => await getAllPosts(),
  });
};
