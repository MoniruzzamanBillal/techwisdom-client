"use client";

import { TechWisdomForm, TechWisdomInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { FormSubmitLoading } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useUserRegistration } from "@/hooks/auth.hook";
import { registerUserSchema } from "@/schemas/auth/Auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Register = () => {
  const router = useRouter();

  const { mutateAsync: registerUser, isPending: userRegisterLoading } =
    useUserRegistration();

  // ! for registering a user
  const handleUserRegister = async (data: FieldValues) => {
    try {
      const payload = {
        name: data?.name,
        email: data?.email,
        password: data?.password,
      };

      const formdata = new FormData();

      formdata.append("data", JSON.stringify(payload));
      formdata.append("file", data?.image);

      const result = await registerUser(formdata);

      if (result?.success) {
        router.push("/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error("Something went wrong while registering user ");
    }
  };

  return (
    <div className="registerContainer min-h-screen flex items-center justify-center bg-black50">
      {userRegisterLoading && <FormSubmitLoading />}

      <Wrapper>
        <div className="registerFormContainer  w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-white/80 backdrop-blur bg-opacity-60 dark:backdrop-blur ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-800  ">
            User Registration
          </p>

          {/* form starts  */}
          <TechWisdomForm
            onSubmit={handleUserRegister}
            resolver={zodResolver(registerUserSchema)}
          >
            <TechWisdomInput
              type="name"
              label="Name :"
              name="name"
              placeholder="Enter Your Name"
            />
            <TechWisdomInput
              type="email"
              label="Email :"
              name="email"
              placeholder="Enter Your Email"
            />

            <TechWisdomInput type="file" label="User Image :" name="image" />

            <TechWisdomInput
              type="password"
              label="Password :"
              name="password"
              placeholder="Enter Your Password"
            />

            <TechWisdomInput
              type="password"
              label="Confirm Password :"
              name="confirmPassword"
              placeholder="Confirm your password "
            />

            <Button>Register </Button>
          </TechWisdomForm>
          {/* form ends */}

          <div className="text-center mt-6   ">
            <a className="right-0 inline-block text-sm font-semibold align-baseline text-gray-900 hover:text-gray-950 dark:text-gray-200  ">
              Already have account ?{" "}
              <span className=" text-blue-700 font-bold cursor-pointer ">
                <Link href={`/login`}>Log in </Link>
              </span>
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Register;
