/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/api/v1/auth/signin", userData);

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
