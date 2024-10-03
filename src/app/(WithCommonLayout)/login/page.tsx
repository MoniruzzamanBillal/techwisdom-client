"use client";
import { TechWisdomForm, TechWisdomInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schemas/auth/Auth.schema";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserLogin } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";

import { useUserContext } from "@/context/user.provider";
import { FormSubmitLoading } from "@/components/ui";
import { useEffect } from "react";

const Login = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const redirect = searchParams.get("redirect");
  const { handleSetToken, setIsLoading, handleSetUser, isLoading } =
    useUserContext();

  const { mutateAsync: handleUserLogin, isPending, isSuccess } = useUserLogin();

  // ! for login
  const handleLogin = async (data: FieldValues) => {
    try {
      const response = await handleUserLogin(data);

      console.log(response?.data);
      console.log(response?.token);

      handleSetUser(response?.data);
      handleSetToken(response?.token);

      setIsLoading(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Login failed:", error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  return (
    <div className="loginContainer min-h-screen flex items-center justify-center bg-black50 ">
      {isLoading || (isPending && <FormSubmitLoading />)}

      <Wrapper className="loginWrapper py-14 ">
        <div className="    w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-white/80 backdrop-blur bg-opacity-60 dark:backdrop-blur  ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-800  ">
            Log in
          </p>

          {/*  */}

          {/* form starts  */}
          <TechWisdomForm
            onSubmit={handleLogin}
            resolver={zodResolver(loginSchema)}
          >
            <TechWisdomInput
              type="email"
              label="Email :"
              name="email"
              placeholder="Enter Your Email"
            />

            <TechWisdomInput
              type="password"
              label="Password :"
              name="password"
              placeholder="Enter Your Password"
            />

            <Button
              disabled={isLoading || isPending}
              className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base  active:scale-95 duration-500    ${
                isLoading || isPending
                  ? " cursor-not-allowed bg-gray-700  "
                  : " bg-prime50 hover:bg-prime100"
              }   `}
            >
              Log in
            </Button>
          </TechWisdomForm>
          {/* form ends */}

          <div className="forgotPassword  mt-2  font-semibold underline cursor-pointer text-blue-800 dark:text-blue-500  ">
            <Link href={"/forgotPassword"}>forgot password</Link>
          </div>

          {/*  */}

          <div className="text-center  mt-6  ">
            <p className="right-0 inline-block text-sm font-semibold align-baseline text-gray-900 hover:text-gray-950 dark:text-gray-200  ">
              Dont have any account ?{" "}
              <span className=" text-blue-700 font-bold cursor-pointer ">
                <Link href={`/sign-up`}>Sign up </Link>
              </span>
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;
