"use client";
import Image from "next/image";
import { Button } from "../../button";
import { Edit } from "lucide-react";
import { useUserContext } from "@/context/user.provider";

const ProfileImgSection = () => {
  const { user } = useUserContext();



  

  return (
    <div className="ProfileImgSectionContainer   rounded-md ">
      <div className="profileImgWrapper flex flex-col xsm:flex-row justify-between items-center gap-y-8 ">
        {/* left section starts  */}
        <div className="profileLeftSection  flex  items-center gap-x-5 ">
          {/* left image section starts  */}
          <div className="imgSection rounded-full overflow-auto w-[8rem] sm:w-[10rem] md:w-[12rem] xmd:w-[14rem] ">
            <Image
              // src={`https://i.postimg.cc/TPMTptwT/ubaida.jpg  `}
              src={` ${
                user?.profilePicture
                  ? user?.profilePicture
                  : "https://i.postimg.cc/TPMTptwT/ubaida.jpg"
              }  `}
              alt="progileImage"
              height={700}
              width={700}
            />
          </div>
          {/* left image section ends */}

          {/* left name section starts  */}
          <div className="nameSection   ">
            <p className=" text-xl sm:text-2xl font-semibold text-gray-50 mb-2 ">
           {user?.name}
            </p>
            <p className=" font-medium text-gray-300  "> 10 Followers </p>
          </div>
          {/* left name section ends  */}

          {/*  */}
        </div>
        {/* left section ends  */}

        {/* right section starts  */}
        <div className="profileRightSection  ">
          <Button className=" bg-prime50 hover:bg-prime100  font-semibold ">
            <Edit className=" mr-2 " />
            Edit profile
          </Button>
        </div>
        {/* right section ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default ProfileImgSection;
