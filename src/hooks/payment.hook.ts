/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  confirmPayment,
  getAllPayment,
  getPaymentChartData,
  getSubscriber,
  getTotalRevenue,
} from "@/services/payment";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

type TPaymentProps = {
  userId: string;
  amount: string;
};
// ! for making payment
export const usePayment = () => {
  return useMutation({
    mutationKey: ["make-payment"],
    mutationFn: async (payload: TPaymentProps) => await confirmPayment(payload),
    onSuccess: () => {
      toast.success("Proceding payment!!!");
    },
  });
};

// ! for getting subscriber data
export const useGetSubscriber = (id: string) => {
  return useQuery({
    queryKey: ["get-subscriber", id],
    queryFn: async ({ queryKey }) => {
      const userId = queryKey[1];

      return await getSubscriber(userId);
    },
  });
};

// ! for getting all payment data

export const useGetPayment = () => {
  return useQuery({
    queryKey: ["get-paymentdata"],
    queryFn: async () => {
      return await getAllPayment();
    },
  });
};

// ! for getting total revenue
export const useGetRevenue = () => {
  return useQuery({
    queryKey: ["get-revenue"],
    queryFn: async () => {
      return await getTotalRevenue();
    },
  });
};

// ! for getting payment chart data
export const useGetChartRevenue = () => {
  return useQuery({
    queryKey: ["get-chart-revenue"],
    queryFn: async () => {
      return await getPaymentChartData();
    },
  });
};
