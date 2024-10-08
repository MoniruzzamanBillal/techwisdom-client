/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/lib/AxiosInstance";

type TPaymentProps = {
  userId: string;
  amount: string;
};
export const confirmPayment = async (payment: TPaymentProps) => {
  try {
    const { data } = await axiosInstance.post(
      "/api/v1/payment/procede-payment",
      payment
    );

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for getting subscriber data
export const getSubscriber = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(
      `/api/v1/payment/get-subscriber/${id}`
    );

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

// ! for getting all payment data
export const getAllPayment = async () => {
  try {
    const { data } = await axiosInstance.get(`/api/v1/payment/payment-data`);
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Failed to fetch payment data");
  }
};
