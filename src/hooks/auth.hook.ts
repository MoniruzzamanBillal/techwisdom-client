import { adminRegister, loginUser } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

// ! for login
export const useUserLogin = () => {
  return useMutation({
    mutationKey: ["user-login"],
    mutationFn: async (userData: FieldValues) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User login successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

// ! for registering admin
export const useAdminRegistration = () => {
  return useMutation({
    mutationKey: ["admin-register"],
    mutationFn: async (formData: FormData) => await adminRegister({ formData }),
    onSuccess: () => {
      toast.success("Admin registered successfully !!!");
    },
  });
};
