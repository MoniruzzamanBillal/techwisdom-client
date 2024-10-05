/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";

type TPostCommentProps = {
  content: string;
  postId: string;
  userId: string;
};

// ! for making comment
export const handleAddComment = async (payload: TPostCommentProps) => {
  try {
    const { data } = await axiosInstance.post(
      `/api/v1/comment/create-comment`,
      payload
    );
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

type TUpdateCommentProps = {
  payload: Record<string, unknown>;
  id: string;
};

// ! for updating comment
export const handleUpdateComment = async ({
  payload,
  id,
}: TUpdateCommentProps) => {
  try {
    const { data } = await axiosInstance.patch(
      `/api/v1/comment/update-comment/${id}`,
      payload
    );
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
