"use client";
import Image from "next/image";
import { Button } from "../../button";
import { Edit } from "lucide-react";
import { useUserContext } from "@/context/user.provider";
import Link from "next/link";
import { MdVerifiedUser } from "react-icons/md";

const ProfileImgSection = () => {
  const { user } = useUserContext();

  // console.log("in profile image section = ", user);
  // console.log(user?.followers?.length);


  return (
    <div className="ProfileImgSectionContainer   rounded-md ">
      <div className="profileImgWrapper flex flex-col xsm:flex-row justify-between items-center gap-y-8 ">
        {/* left section starts  */}
        <div className="profileLeftSection  flex  items-center gap-x-5 ">
          {/* left image section starts  */}
          <div className="imgSection rounded-full overflow-auto w-[8rem] sm:w-[10rem] md:w-[12rem] xmd:w-[14rem] ">

          {

user?.profilePicture && <Image
src={user?.profilePicture}
alt="progileImage"
height={700}
width={700}
/>

          }
            
          </div>
          {/* left image section ends */}

          {/* left name section starts  */}
          <div className="nameSection   ">
            <div className="nameTopSection flex items-center gap-x-2 mb-2 ">
              <p className=" text-xl sm:text-2xl font-semibold text-gray-50  ">
                {user?.name}
              </p>

             


              {
user?.isVerified &&  <MdVerifiedUser className=" text-2xl text-prime50 " />
              }


            </div>


<p className=" text-sm font-medium text-gray-400 mb-2 " >  {user?.email} </p>

            <p className=" font-medium text-gray-300  " >
              {" "}
              {user?.followers?.length &&
                user?.followers?.length} Followers{" "}
            </p>
          </div>
          {/* left name section ends  */}

          {/*  */}
        </div>
        {/* left section ends  */}

        {/* right section starts  */}
        <div className="profileRightSection  ">
          <Link href={`/update-admin/${user?._id}`}>
            <Button className=" bg-prime50 hover:bg-prime100  font-semibold text-sm sm:text-base  ">
              <Edit className=" mr-2 " />
              Edit profile
            </Button>
          </Link>
        </div>
        {/* right section ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default ProfileImgSection;
