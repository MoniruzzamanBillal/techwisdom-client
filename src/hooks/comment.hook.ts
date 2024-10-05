import {
  handleAddComment,
  handleDeleteComment,
  handleUpdateComment,
} from "@/services/comment";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type TPostCommentProps = {
  content: string;
  postId: string;
  userId: string;
};

// ! for making a post
export const useAddComment = () => {
  return useMutation({
    mutationKey: ["add-comment"],
    mutationFn: async (payload: TPostCommentProps) =>
      await handleAddComment(payload),
    onSuccess: () => {
      toast.success("comment  added successfully !!!");
    },
  });
};

type TUpdateComment = {
  payload: Record<string, unknown>;
  id: string;
};
// ! for updating comment
export const useUpdateComment = () => {
  return useMutation({
    mutationKey: ["update-comment"],
    mutationFn: async ({ payload, id }: TUpdateComment) =>
      await handleUpdateComment({ payload, id }),
  });
};

type TDeleteComment = {
    payload: Record<string, unknown>;
  id: string;
};

// ! for deleting a comment
export const useDeleteComment = () => {
  return useMutation({
    mutationKey: ["delete-comment"],
    mutationFn: async ({ payload , id }: TDeleteComment) =>
      await handleDeleteComment({ payload , id }),
  });
};
