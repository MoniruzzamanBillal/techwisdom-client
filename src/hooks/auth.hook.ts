import {
  adminRegister,
  loginUser,
  resetPassword,
  sendEmailForReset,
  updateUser,
  userRegister,
} from "@/services/AuthService";
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

// ! for registering user
export const useUserRegistration = () => {
  return useMutation({
    mutationKey: ["user-register"],
    mutationFn: async (formData: FormData) => await userRegister({ formData }),
    onSuccess: () => {
      toast.success("User registered successfully !!!");
    },
  });
};

type TUpdateProps = {
  formData: FormData;
  userId: string;
};

// ! for updating a user
export const useUserUpdate = () => {
  return useMutation({
    mutationKey: ["update-user"],
    mutationFn: async ({ formData, userId }: TUpdateProps) =>
      await updateUser({ formData, userId }),
    onSuccess: () => {
      toast.success("User updated successfully !!!");
    },
  });
};




// ! for sending email for reset 
export const useSendResetReq = ()=>{
  return useMutation({
    mutationKey: ["send-email-req"], 

    mutationFn : async(email : string ) => await sendEmailForReset(email) 


  })
}


type TResetPassword = {
  userId : string 
  password : string
}

// ! for reseting password 
export const useResetPassword = ()=>{
  return useMutation({
    mutationKey: ["reset-password"], 

    mutationFn : async(payload : TResetPassword ) => await resetPassword(payload) 


  })
}