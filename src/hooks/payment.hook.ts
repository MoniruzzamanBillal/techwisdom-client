/* eslint-disable @typescript-eslint/no-explicit-any */
import { confirmPayment, getSubscriber } from "@/services/payment";
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
