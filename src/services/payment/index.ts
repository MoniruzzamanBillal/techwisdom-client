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
