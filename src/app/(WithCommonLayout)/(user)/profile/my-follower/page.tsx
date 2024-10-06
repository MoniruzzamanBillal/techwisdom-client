"use client";

import Wrapper from "@/components/shared/Wrapper";
import { useUserContext } from "@/context/user.provider";
import Image from "next/image";

export default function MyFollower() {
  const { user } = useUserContext();

  console.log(user);

  let content = null;

  // ! for no followers
  if (!user?.followers?.length) {
    content = (
      <>
        <div className="bg-black20 h-[60vh] w-[90vw] xl:w-[62vw] m-auto  flex  robotoFont mt-6 flex-col items-center justify-center   p-6 rounded-md shadow-md  ">
          <h1 className=" text-3xl sm:text-4xl font-bold text-prime100 mb-4">
            You have no followers !!
          </h1>
        </div>
      </>
    );
  }

  if (user?.followers?.length) {
    content = (
      <>
        <div className="mainContainer">
          {user?.followers &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            user?.followers?.map((item: any) => (
              <div key={item?._id} className="FollowingCardContainer my-4 ">
                <div className="FollowingCardWrapper w-[96%]  xsm:w-[92%] sm:w-[85%] md:w-[76%] xmd:w-[70%] xl:w-[62%] xlm:w-[55%] m-auto bg-black50 rounded-md p-2 ">
                  <div className="followingContainer flex justify-between items-center  ">
                    {/* left side container  */}
                    <div className="leftSection  flex justify-between items-center gap-x-2 ">
                      <div className="imgSection size-[3.2rem] xsm:size-[3.8rem] rounded-full overflow-auto ">
                        <Image
                          src={item?.profilePicture}
                          alt="user image "
                          height={700}
                          width={700}
                        />
                      </div>
                      <p className=" text-base xsm:text-lg sm:text-xl  ">
                        {" "}
                        {item?.name}{" "}
                      </p>
                    </div>
                    {/* left side container ends  */}

                  
                  </div>

                  {/*  */}
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }

  return (
    <div className="MyFollowerContainer pt-4 ">
      <Wrapper className=" p-6 bg-black100 rounded-md text-white shadow-md ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          {" "}
          My followers{" "}
        </p>

        <div className="myFollowerContainer    ">{content}</div>
      </Wrapper>
    </div>
  );
}
