"use client";

import { TechWisdomForm, TechWisdomInput } from "@/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Wrapper from "@/components/shared/Wrapper";
import { FormSubmitLoading } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { useSpecificUser } from "@/hooks/user.hooks";
import { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { registerAdminSchema } from "@/schemas/auth/Auth.schema";
import { useUserUpdate } from "@/hooks/auth.hook";
import { useRouter } from "next/navigation";

type IProps = {
  params: {
    adminId: string;
  };
};

const UpdateAdmin = ({ params: { adminId } }: IProps) => {
  const router = useRouter();

  const { data: adminDetail, isLoading: adminDataLoading } =
    useSpecificUser(adminId);

  const { mutateAsync: updateUser, isPending: userUpdatingPending } =
    useUserUpdate();

  let defaultValues;

  defaultValues = {
    name: adminDetail?.data?.name,
    email: adminDetail?.data?.email,
    password: adminDetail?.data?.password,
  };

  // ! for updating admin user
  const handleUpdateAdmin = async (data: FieldValues) => {
    try {
      const payload = {
        name: data?.name,
        email: data?.email,
        password: data?.password,
      };

      const formData = new FormData();

      formData.append("data", JSON.stringify(payload));
      formData.append("file", data?.image);

      const result = await updateUser({ formData, userId: adminId });

      if (result?.success) {
        router.push("/");
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error("Something went wrong while registering admin ");
    }
  };

  let content = null;
  if (adminDataLoading) {
    content = (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-prime100 animate-ping"></div>
      </div>
    );
  }

  if (!adminDataLoading && adminDetail?.data) {
    content = (
      <TechWisdomForm
        defaultValues={defaultValues}
        onSubmit={handleUpdateAdmin}
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

        <Button>Update user </Button>
      </TechWisdomForm>
    );
  }

  //   ! effect for setting default value
  useEffect(() => {
    if (adminDetail?.data) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      defaultValues = {
        name: adminDetail?.data?.name,
        email: adminDetail?.data?.email,
        password: adminDetail?.data?.password,
      };
    }
  }, [adminDetail]);

  return (
    <div className="updateAdminContainer min-h-screen flex items-center justify-center bg-black50 ">
      {userUpdatingPending && <FormSubmitLoading />}

      <Wrapper className="  py-14 ">
        <div className="registerFormContainer  w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-white/80 backdrop-blur bg-opacity-60 dark:backdrop-blur ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-800  ">
            Update user
          </p>

          {/* form starts  */}
          {content}
          {/* form ends */}
        </div>
      </Wrapper>
    </div>
  );
};

export default UpdateAdmin;
