"use client";

import { TechWisdomForm, TechWisdomInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { FormSubmitLoading } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useResetPassword } from "@/hooks/auth.hook";
import { TUserToken } from "@/types/Global.types";
import { verifyToken } from "@/utils/verify.token";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

type IProps = {
  params: {
    token: string;
  };
};

const ResetPassword = ({ params: { token } }: IProps) => {
  const router = useRouter();

  const { mutateAsync: resetPassword, isPending } = useResetPassword();

  // console.log("token = " , token )

  // ! for reseting password

  const handleResetPassword = async (data: FieldValues) => {
    const { password } = data;
    const verifyTokenData = verifyToken(token as string) as TUserToken;
    const { userId } = verifyTokenData;

    try {
      const payload = {
        userId,
        password,
      };

      console.log(payload);

      const result = await resetPassword(payload);

      if (result?.success) {
        router.push(`/login`);
        toast.success("Password reset successfully !!");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="ResetPasswordContainer w-full min-h-screen  imageCenter  bg-black50 flex items-center justify-center">
      {isPending && <FormSubmitLoading />}

      <Wrapper className="ResetPasswordWrapper py-14">
        {/*  */}
        <div className=" w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl border border-gray-700 bg-black100 backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-white  ">
            Reset Password
          </p>

          {/*  */}

          {/* form starts  */}
          <TechWisdomForm
            onSubmit={handleResetPassword}
            resolver={zodResolver(
              z
                .object({
                  password: z.string().min(6, {
                    message: "Password must be at least 6 characters",
                  }),
                  confirmPassword: z.string().min(6, {
                    message: "Confirm Password must be at least 6 characters",
                  }),
                })
                .refine((data) => data.password === data.confirmPassword, {
                  message: "password don't match ",
                  path: ["confirmPassword"],
                })
            )}
          >
            <TechWisdomInput
              type="password"
              label="Password :"
              name="password"
              placeholder="Enter your password "
            />
            <TechWisdomInput
              type="password"
              label="Confirm Password :"
              name="confirmPassword"
              placeholder="Confirm your password "
            />

            <Button
              disabled={isPending}
              className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base active:scale-95 duration-500 ${
                isPending
                  ? " cursor-not-allowed bg-gray-600 "
                  : "bg-prime50 hover:bg-prime100  "
              } `}
            >
              Reset Password
            </Button>
          </TechWisdomForm>
          {/* form ends */}

          {/*  */}
        </div>
        {/*  */}
      </Wrapper>
    </div>
  );
};

export default ResetPassword;
