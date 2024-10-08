import {
  getAllPosts,
  getSinglePost,
  getUserPosts,
  giveUpvotes,
  handleDeletePost,
  makePost,
  updatePost,
  giveDownVote,
} from "@/services/PostServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

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
export const useGetPosts = (params?: Record<string, unknown> ) => {
  return useQuery({
    queryKey: ["get-all-posts" , params],
    queryFn: async () => await getAllPosts(params),
  });
};

// ! for single  post
export const useGetUserPost = ( token: string,
  params?: Record<string, unknown> ) => {
  return useQuery({
    queryKey: ["get-user-post", token , params],
    queryFn: async ({ queryKey }) => {
      const token = queryKey[1] as string 
      const params = queryKey[2] as Record<string, unknown> | undefined;
      
      return await getUserPosts(token , params );
    }, enabled : !!token
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

type TUpdatePostData = {
  formdata: FormData;
  id: string;
};

// ! for updating post
export const useUpdatePost = () => {
  return useMutation({
    mutationKey: ["update-post"],
    mutationFn: async ({ formdata, id }: TUpdatePostData) => {
      return await updatePost({ formdata, id });
    },
  });
};

// ! for deleting post
export const useDeletePost = () => {
  return useMutation({
    mutationKey: ["delete-post"],
    mutationFn: async (id: string) => {
      return await handleDeletePost(id);
    },
    onSuccess: () => {
      toast.success("Post deleted successfully !!!");
    },
  });
};

type TUpvoteDownvote = {
  postId: string;
  userId: string;
};

// ! for giving upvote
export const useGiveUpvote = () => {
  return useMutation({
    mutationKey: ["upvote-post"],
    mutationFn: async (payload: TUpvoteDownvote) => await giveUpvotes(payload),
    onSuccess: () => {
      toast.success("Upvote given successfully !!!");
    },
  });
};

// ! for giving downvote
export const useGiveDownvote = () => {
  return useMutation({
    mutationKey: ["downvote-post"],
    mutationFn: async (payload: TUpvoteDownvote) => await giveDownVote(payload),
    onSuccess: () => {
      toast.success("Downvote given successfully !!!");
    },
  });
};
