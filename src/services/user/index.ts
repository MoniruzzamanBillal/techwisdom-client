/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/AxiosInstance";

type TFollowRequest = {
  followerId: string;
  followedUserId: string;
};

// ! for following a user
export const followUser = async (payload: TFollowRequest) => {
  try {
    const { data } = await axiosInstance.patch(
      "/api/v1/user/follow-user",
      payload
    );

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for unfollow user
export const unfollowUser = async (payload: TFollowRequest) => {
  try {
    const { data } = await axiosInstance.patch(
      "/api/v1/user/unfollow-user",
      payload
    );

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for getting single user data
export const getSpecificUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/api/v1/user/get-user/${id}`);

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for getting all user data
export const getAllUsers = async () => {
  try {
    const { data } = await axiosInstance.get(`/api/v1/user/all-user`);

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
