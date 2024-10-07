"use client";

import { TechWisdomForm, TechWisdomInput } from "@/components/form";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type IProps = {
  params: {
    adminId: string;
  };
};

const UpdateAdmin = ({ params: { adminId } }: IProps) => {
  console.log(adminId);
  let defaultValues;

  // ! for updating admin user
  const handleUpdateAdmin = (data: FieldValues) => {
    try {
      console.log(data);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error("Something went wrong while registering admin ");
    }
  };

  return (
    <div className="updateAdminContainer min-h-screen flex items-center justify-center bg-black50 ">
      {/* {adminRegisterLoading && <FormSubmitLoading />} */}

      <Wrapper className="  py-14 ">
        <div className="registerFormContainer  w-[95%] xsm:w-[85%] sm:w-[78%] md:w-[70%] xmd:w-[65%] lg:w-[55%] m-auto p-3 xsm:p-5 sm:p-7 md:p-10  rounded-md shadow-xl bg-white/80 backdrop-blur bg-opacity-60 dark:backdrop-blur ">
          <p className=" mb-3 xsm:mb-5 sm:mb-8 text-xl xsm:text-2xl sm:text-3xl text-center font-semibold CormorantFont text-gray-800  ">
            Update admin
          </p>

          {/* form starts  */}
          <TechWisdomForm
            onSubmit={handleUpdateAdmin}
            // resolver={zodResolver(registerAdminSchema)}
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

            <Button>Update admin </Button>
          </TechWisdomForm>
          {/* form ends */}
        </div>
      </Wrapper>
    </div>
  );
};

export default UpdateAdmin;
