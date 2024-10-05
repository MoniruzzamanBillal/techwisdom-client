import Image from "next/image";
import Link from "next/link";
import { Button } from "../../button";
import { TPostsResponse } from "@/types/Global.types";
import { format } from "date-fns";
import { useUserContext } from "@/context/user.provider";

type IProps = {
  postData: TPostsResponse;
};

const PostDetailCard = ({ postData }: IProps) => {
  const { user } = useUserContext();

  //   console.log(user);

  //   console.log(postData);

  return (
    <div className="PostDetailCardContainer text-white ">
      {/* detail top section starts  */}
      <div className="detailTopSection  flex flex-col xmd:flex-row justify-between items-center gap-x-4 gap-y-8 mb-14 ">
        {/* left side section starts  */}
        <div className="topLeftSection  w-full xsm:w-[94%]  xmd:w-[60%] ">
          <h1 className="  font-bold text-xl  sm:text-2xl xmd:text-3xl mb-3 leading-relaxed  ">
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

          {/* edit button starts  */}
          <div className="editContainer mt-7  ">
            {postData?.authorId?._id === user?._id ? (
              <Link
                href={`/post/${1212}`}
                className=" bg-red-500 text-gray-50 hover:bg-red-600 hover:text-gray-100 hover:scale-105 active:scale-100 hover:shadow-lg py-2 px-5 rounded transition-all duration-200 font-medium  navLinkFont "
              >
                Edit post
              </Link>
            ) : (
              <div className="followBtn">
                <Button className=" bg-prime50 hover:bg-prime100  ">
                  Follow
                </Button>
              </div>
            )}
          </div>
          {/* edit button ends  */}
        </div>
        {/* left side section ends  */}

        {/* right section starts  */}
        <div className="topRightSection w-full xsm:w-[96%] xmd:w-[40%]  ">
          <Image
            src={
              "https://res.cloudinary.com/drmkqpdex/image/upload/v1728112563/testing%20image%20upload.jpg"
            }
            alt="blog Image "
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
        className="blogDetailBottom  "
        dangerouslySetInnerHTML={{ __html: postData?.content }}
      ></div>

      {/* blog detail bottom section ends  */}
    </div>
  );
};

export default PostDetailCard;
