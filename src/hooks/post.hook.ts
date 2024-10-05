import { getAllPosts, getSinglePost, makePost } from "@/services/PostServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

// payload: FormData, token: string

interface PostPayload {
  formdata: FormData;
  token: string;
}

// ! for creating post
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

// ! for getting all post
export const useGetPosts = () => {
  return useQuery({
    queryKey: ["get-all-posts"],
    queryFn: async () => await getAllPosts(),
  });
};

// ! for single  post
export const useGetSinglePost = (id: string) => {
  return useQuery({
    queryKey: ["get-single-post", id],
    queryFn: async ({ queryKey }) => {
      const postId = queryKey[1];
      return await getSinglePost(postId);
    },
  });
};
