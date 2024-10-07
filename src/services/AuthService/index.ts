/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

// ! for login
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/api/v1/auth/signin", userData);

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for registering admin user
export const adminRegister = async ({ formData }: { formData: FormData }) => {
  try {
    const { data } = await axiosInstance.post(
      "/api/v1/auth/admin-register",
      formData,
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
