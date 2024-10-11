"use client";

import { TechWisdomForm, TechWisdomInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { FormSubmitLoading } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useSendResetReq } from "@/hooks/auth.hook";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const ForgotPassword = () => {
  const router = useRouter();

  const { mutateAsync: sendResetLink, isPending } = useSendResetReq();

  // ! for handling reset password
  const handleSentEmail = async (data: FieldValues) => {
    console.log("handle click = ");

    const { email } = data;
    try {
      const result = await sendResetLink(email);
      console.log(result);

      if (result?.success) {
        router.push(`/EmailResetConfirmation/${email}`);
      }
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
     
      console.log(error);
    }
  };

  return (
    <div
      className={
        "ForgotPasswordContainer w-full min-h-screen  imageCenter flex items-center justify-center bg-black50 "
      }
    >
      {isPending && <FormSubmitLoading />}
      <Wrapper className="ForgotPasswordWrapper py-14  ">
        {/*  */}
        <div className=" w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl border border-gray-700 bg-gray-300 backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-700  ">
            Reset Password
          </p>

          {/*  */}

          {/* form starts  */}
          <TechWisdomForm
            onSubmit={handleSentEmail}
            resolver={zodResolver(
              z.object({
                email: z.string().min(1, "Email is required"),
              })
            )}
          >
            <TechWisdomInput
              type="email"
              label="Email :"
              name="email"
              placeholder="Enter your email"
            />

            <Button
              disabled={isPending}
              className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base  active:scale-95 duration-500  ${
                isPending
                  ? " cursor-not-allowed bg-gray-600 "
                  : "bg-prime50 hover:bg-prime100  "
              } `}
            >
              Next
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

export default ForgotPassword;
