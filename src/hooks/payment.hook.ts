/* eslint-disable @typescript-eslint/no-explicit-any */
import { confirmPayment } from "@/services/payment";
import { useMutation } from "@tanstack/react-query";
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
