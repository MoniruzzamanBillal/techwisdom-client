/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import envConfig from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import axios from "axios";

interface PostPayload {
  formdata: FormData;
  token: string;
}

// ! for making post
export const makePost = async ({
  formdata,
  token,
}: PostPayload): Promise<any> => {
  try {
    const { data } = await axios.post(
      `${envConfig.baseApi}/api/v1/post/create-post`,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      }
    );

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for getting all post
export const getAllPosts = async () => {
  try {
    const { data } = await axiosInstance.get("/api/v1/post/all-post");

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for getting  user  post
export const getUserPosts = async (token: string) => {
  try {
    const { data } = await axiosInstance.get("/api/v1/post/user-post", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for getting single post
export const getSinglePost = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/api/v1/post/single-post/${id}`);

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

interface TUpdateProps {
  formdata: FormData;
  id: string;
}

// ! update post data
export const updatePost = async ({ formdata, id }: TUpdateProps) => {
  try {
    const { data } = await axiosInstance.patch(
      `/api/v1/post/update-post/${id}`,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for deleting post
export const handleDeletePost = async (postId: string) => {
  try {
    const { data } = await axiosInstance.patch(
      `/api/v1/post/delete-post/${postId}`
    );

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

type TUpvoteDownvote = {
  postId: string;
  userId: string;
};

// ! for giving upvote
export const giveUpvotes = async (payload: TUpvoteDownvote) => {
  try {
    const { data } = await axiosInstance.patch(
      "/api/v1/post/upvote-post",
      payload
    );

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for giving downvotes
export const giveDownVote = async (payload: TUpvoteDownvote) => {
  try {
    const { data } = await axiosInstance.patch(
      "/api/v1/post/downvote-post",
      payload
    );

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
