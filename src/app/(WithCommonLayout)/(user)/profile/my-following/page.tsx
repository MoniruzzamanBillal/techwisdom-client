"use client";

import Wrapper from "@/components/shared/Wrapper";
import { FollowingCard } from "@/components/ui/Module";
import { useUserContext } from "@/context/user.provider";

const MyFollowing = () => {
  const { user } = useUserContext();

  console.log(user);

  let content = null;

  // ! for no followings
  if (!user?.following?.length) {
    content = (
      <>
        <div className="bg-black20 h-[60vh] w-[90vw] xl:w-[62vw] m-auto  flex  robotoFont mt-6 flex-col items-center justify-center   p-6 rounded-md shadow-md  ">
          <h1 className=" text-3xl sm:text-4xl font-bold text-white mb-4">
            You are not following anyone !!!
          </h1>
        </div>
      </>
    );
  }

  if (user?.following?.length) {
    content = (
      <>
        <div className="mainContainer">
          {user?.followers &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            user?.following?.map((item: any) => (
              <FollowingCard
                key={item._id}
                _id={item._id}
                name={item.name}
                profilePicture={item.profilePicture}
                userId={user?._id}
              />
            ))}
        </div>
      </>
    );
  }

  return (
    <div className="myFollowingContainer pt-4   ">
      <Wrapper className=" p-6 border border-gray-600 bg-black100 rounded-md text-white shadow-md   ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          {" "}
          My followings{" "}
        </p>

        <div className="myFollowerContainer    ">{content}</div>
      </Wrapper>
    </div>
  );
};

export default MyFollowing;
