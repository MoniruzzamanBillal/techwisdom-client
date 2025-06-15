/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../button";
import { TPostsResponse } from "@/types/Global.types";
import { format } from "date-fns";
import { useUserContext } from "@/context/user.provider";
import {
  useFollowPerson,
  useGetSingleUser,
  useUnfollowPerson,
} from "@/hooks/user.hooks";
import { toast } from "sonner";
import { getSpecificUser } from "@/services/user";

type IProps = {
  postData: TPostsResponse;
};

const PostDetailCard = ({ postData }: IProps) => {
  const { user, handleSetUser } = useUserContext();

  const { data: userData, refetch: userDataRefetch } = useGetSingleUser(
    user?._id as string
  );

  const { mutateAsync: followUser, isPending: userFollowPending } =
    useFollowPerson();
  const { mutateAsync: unfollowUser, isPending: userUnfollowPending } =
    useUnfollowPerson();

  // ! for following a user
  const handleFollowUser = async (followerId: string) => {
    const payload = {
      followerId: user?._id as string,
      followedUserId: followerId,
    };

    try {
      const result = await followUser(payload);

      if (result?.success) {
        const updatedUserInfo = await getSpecificUser(user?._id as string);
        // * for setting the updated user value in state
        handleSetUser(updatedUserInfo?.data);
        userDataRefetch();
      }
    } catch (error: any) {
      console.log(error?.response?.data);
      console.log(error?.message);
      toast.error("Something went wrong while following user !!");
    }
  };

  // ! for unfollowing  a user
  const handleUnfollowUser = async (unfollowerId: string) => {
    const payload = {
      followerId: user?._id as string,
      followedUserId: unfollowerId,
    };

    try {
      const result = await unfollowUser(payload);

      if (result?.success) {
        const updatedUserInfo = await getSpecificUser(user?._id as string);
        // * for setting the updated user value in state
        handleSetUser(updatedUserInfo?.data);
        userDataRefetch();
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong while unfollowing user !!");
    }
  };

  return (
    <div className="PostDetailCardContainer text-white ">
      {/* detail top section starts  */}
      <div className="detailTopSection  flex flex-col xmd:flex-row justify-between items-center gap-x-4 gap-y-8 mb-14 ">
        {/* left side section starts  */}
        <div className="topLeftSection  w-full xsm:w-[94%]  xmd:w-[60%] ">
          <h1 className="  font-bold text-xl  sm:text-2xl xl:text-3xl mb-3 leading-relaxed  ">
            {postData?.title}
          </h1>

          {/* writer info starts  */}
          <div className="writerContainer   ">
            <div className="writerInfo  flex items-center gap-2   ">
              {/* writer image  */}
              <div className="writerImg    ">
                <Image
                  className=" w-10 h-10 xsm:w-11 xsm:h-11 sm:w-12 sm:h-12 rounded-full"
                  src={postData?.authorId?.profilePicture}
                  alt="Rounded avatar "
                  height={700}
                  width={700}
                />
              </div>
              {/* writer image  */}

              {/* writer name  */}

              <div className="writerName   ">
                <p className=" text-gray-50 font-medium text-sm sm:text-base ">
                  {postData?.authorId?.name}
                </p>
                <p className=" text-gray-300 font-medium text-xs   ">
                  {postData &&
                    format(
                      new Date(postData?.createdAt as string),
                      "dd-MMMM-yyyy"
                    )}
                </p>
              </div>

              {/* writer name  */}
            </div>
          </div>

          {/* writer info ends */}

          {/* top button starts  */}

          {user && (
            <div className="editContainer mt-7  ">
              {postData?.authorId?._id === user?._id ? (
                <Link
                  href={`/update-post/${postData?._id}`}
                  className=" bg-red-500 text-gray-50 hover:bg-red-600 hover:text-gray-100 hover:scale-105 active:scale-100 hover:shadow-lg py-2 px-5 rounded transition-all duration-200 font-medium  navLinkFont "
                >
                  Edit post
                </Link>
              ) : userData?.data?.following?.includes(
                  postData?.authorId?._id
                ) ? (
                <div className="unfollowBtn">
                  <Button
                    disabled={userUnfollowPending}
                    className={` bg-gray-600 hover:bg-gray-700  ${
                      userUnfollowPending ? " cursor-not-allowed " : ""
                    } `}
                    onClick={() => handleUnfollowUser(postData?.authorId?._id)}
                  >
                    Following
                  </Button>
                </div>
              ) : (
                <div className="followBtn">
                  <Button
                    disabled={userFollowPending}
                    className={` bg-prime50 hover:bg-prime100  ${
                      userFollowPending ? "cursor-not-allowed" : ""
                    } `}
                    onClick={() => handleFollowUser(postData?.authorId?._id)}
                  >
                    Follow
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* top button ends  */}
        </div>
        {/* left side section ends  */}

        {/* right section starts  */}
        <div className="topRightSection w-full xsm:w-[96%] xmd:w-[40%] rounded-md overflow-auto ">
          <Image
            src={postData?.postImg}
            alt="blog Image rounded-md overflow-hidden "
            height={700}
            width={700}
          />
        </div>
        {/* right section ends  */}

        {/*  */}
      </div>
      {/* detail top section ends  */}

      {/* blog detail bottom section starts  */}
      <div
        className="blogDetailBottom postDetail_raw_css pt-8  "
        dangerouslySetInnerHTML={{ __html: postData?.content }}
      >
        {" "}
      </div>

      {/* blog detail bottom section ends  */}
    </div>
  );
};

export default PostDetailCard;
