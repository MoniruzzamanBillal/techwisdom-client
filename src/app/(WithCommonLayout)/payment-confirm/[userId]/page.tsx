"use client";
import { useUserContext } from "@/context/user.provider";
import { getSpecificUser } from "@/services/user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type IProps = {
  params: {
    userId: string;
  };
};

const PaymentConfirm = ({ params: { userId } }: IProps) => {
  const router = useRouter();
  const { handleSetUser } = useUserContext();

  console.log(userId);

  useEffect(() => {
    const getUserInfo = async () => {
      if (userId) {
        const updatedUserInfo = await getSpecificUser(userId);
        handleSetUser(updatedUserInfo?.data);
      }
    };
    getUserInfo();
  }, [userId, handleSetUser]);

  //   ! after 5 second , redirect to the profile page
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/profile/user-subscription");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="paymentConfirmContainer bg-black20 min-h-screen  flex justify-center items-center ">
      <div className="confirmationCard bg-black100 py-8 px-16 rounded-md shadow-lg border border-gray-700 flex flex-col  justify-center items-center gap-y-5  ">
        {/* icon starts  */}
        <div className="icon  text-center flex justify-center items-center ">
          <IoIosCheckmarkCircleOutline className=" text-7xl text-prime100  dark:text-prime50 " />
        </div>
        {/* icon ends  */}

        <p className=" text-3xl font-semibold mb-3 text-white ">
          Your payment is confirmed !!
        </p>
      </div>
    </div>
  );
};

export default PaymentConfirm;
