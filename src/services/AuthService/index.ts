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

// ! for registering user
export const userRegister = async ({ formData }: { formData: FormData }) => {
  try {
    const { data } = await axiosInstance.post(
      "/api/v1/auth/register",
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

type TUpdateProps = {
  formData: FormData;
  userId: string;
};

// ! for updating user
export const updateUser = async ({ formData, userId }: TUpdateProps) => {
  try {
    const { data } = await axiosInstance.patch(
      `/api/v1/auth/user-update/${userId}`,
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
