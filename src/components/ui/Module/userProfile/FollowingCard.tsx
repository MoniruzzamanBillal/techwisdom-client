"use client";

import Image from "next/image";
import { Button } from "../../button";
import { useUnfollowPerson } from "@/hooks/user.hooks";
import { useUserContext } from "@/context/user.provider";
import { getSpecificUser } from "@/services/user";
import { toast } from "sonner";

type TProps = {
  _id: string;
  name: string;
  profilePicture: string;
  userId: string;
};

const FollowingCard = ({ _id, name, profilePicture, userId }: TProps) => {
  const { handleSetUser } = useUserContext();

  const { mutateAsync: unfollowUser, isPending: userUnfollowPending } =
    useUnfollowPerson();

  // ! for unfollowing  a user
  const handleUnfollowUser = async (unfollowerId: string) => {
    const payload = {
      followerId: userId,
      followedUserId: unfollowerId,
    };

    try {
      const result = await unfollowUser(payload);

      if (result?.success) {
        const updatedUserInfo = await getSpecificUser(userId);
        // * for setting the updated user value in state
        handleSetUser(updatedUserInfo?.data);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong while unfollowing user !!");
    }
  };

  return (
    <div className="FollowingCardContainer my-4 ">
      <div className="FollowingCardWrapper w-[96%]  xsm:w-[92%] sm:w-[85%] md:w-[76%] xmd:w-[70%] xl:w-[62%] xlm:w-[55%] m-auto border border-gray-600 bg-black50 rounded-md p-2 ">
        <div className="followingContainer flex justify-between items-center  ">
          {/* left side container  */}
          <div className="leftSection  flex justify-between items-center gap-x-2 ">
            <div className="imgSection size-[3rem] xsm:size-[3.4rem] rounded-full overflow-auto ">
              <Image
                // src={"https://i.postimg.cc/TPMTptwT/ubaida.jpg"}
                src={profilePicture}
                alt="user image "
                height={700}
                width={700}
              />
            </div>
            <p className=" text-base xsm:text-lg sm:text-xl  "> {name} </p>
          </div>
          {/* left side container ends  */}

          {/* right side container  */}
          <div className="rightSection  ">
            <Button
              disabled={userUnfollowPending}
              className=" bg-prime50 hover:bg-prime100 "
              onClick={() => handleUnfollowUser(_id)}
            >
              Unfollow
            </Button>
          </div>
          {/* right side container ends  */}
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default FollowingCard;
