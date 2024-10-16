/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import axios from "axios";

// const baseUrl = 'http://localhost:5000'
const baseUrl = "https://techwisdom-server.vercel.app";

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
      `${baseUrl}/api/v1/post/create-post`,
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
export const getAllPosts = async (params?: Record<string, unknown>) => {
  try {
    const { data } = await axiosInstance.get("/api/v1/post/all-post", {
      params,
    });

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for getting  user  post
export const getUserPosts = async (
  token: string,
  params?: Record<string, unknown> | undefined
) => {
  try {
    const { data } = await axiosInstance.get("/api/v1/post/user-post", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for getting user post count
export const getUserPostsCount = async (token: string) => {
  try {
    const { data } = await axiosInstance.get("/api/v1/post/user-post-count", {
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




// ! for getting user post like count
export const getUserPostsLikeCount = async (token: string) => {
  try {
    const { data } = await axiosInstance.get("/api/v1/post/user-post-like-count", {
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

// ! for getting user post dislike count
export const getUserPostsDislikeCount = async (token: string) => {
  try {
    const { data } = await axiosInstance.get("/api/v1/post/user-post-dislike-count", {
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



// ! for getting user post comment count
export const getUserPostsCommentCount = async (token: string) => {
  try {
    const { data } = await axiosInstance.get("/api/v1/post/user-post-comment-count", {
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
