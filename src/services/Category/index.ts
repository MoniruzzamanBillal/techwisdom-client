/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getAllCategory = async () => {
  try {
    const { data } = await axiosInstance.get("/api/v1/category/all-category");

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
