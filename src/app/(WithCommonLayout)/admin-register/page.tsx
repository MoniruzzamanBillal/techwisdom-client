"use client";

import { TechWisdomForm, TechWisdomInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { FormSubmitLoading } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useAdminRegistration } from "@/hooks/auth.hook";
import { registerAdminSchema } from "@/schemas/auth/Auth.schema";
import { UserRole } from "@/utils/Constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const AdminRegistration = () => {
  const router = useRouter();

  const { mutateAsync: registerAdmin, isPending: adminRegisterLoading } =
    useAdminRegistration();

  // ! for admin registration
  const handleAdminRegister = async (data: FieldValues) => {
    try {
      const payload = {
        name: data?.name,
        email: data?.email,
        password: data?.password,
        userRole: UserRole.admin,
      };

      const formdata = new FormData();

      formdata.append("data", JSON.stringify(payload));
      formdata.append("file", data?.image);

      const result = await registerAdmin(formdata);

      if (result?.success) {
        router.push("/admin/manage-admin");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error("Something went wrong while registering admin ");
    }
  };

  return (
    <div className="adminRegisterContainer min-h-screen flex items-center justify-center bg-black50">
      {adminRegisterLoading && <FormSubmitLoading />}
      <Wrapper className="  py-14 ">
        <div className="registerFormContainer  w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-white/80 backdrop-blur bg-opacity-60 dark:backdrop-blur ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-800  ">
            Admin Registration
          </p>

          {/* form starts  */}
          <TechWisdomForm
            onSubmit={handleAdminRegister}
            resolver={zodResolver(registerAdminSchema)}
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

            {/* <Button
              disabled={isLoading || isPending}
              className={`px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base  active:scale-95 duration-500    ${
                isLoading || isPending
                  ? " cursor-not-allowed bg-gray-700  "
                  : " bg-prime50 hover:bg-prime100"
              }   `}
            >
              Log in
            </Button> */}

            <Button>Register admin </Button>
          </TechWisdomForm>
          {/* form ends */}
        </div>
      </Wrapper>
    </div>
  );
};

export default AdminRegistration;
