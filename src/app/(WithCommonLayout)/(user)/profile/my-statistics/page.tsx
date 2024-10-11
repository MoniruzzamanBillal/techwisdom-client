"use client";

import Wrapper from "@/components/shared/Wrapper";
import { StatisticsCard } from "@/components/ui";
import { useUserContext } from "@/context/user.provider";
import { useGetUserPostCommentCount, useGetUserPostCount, useGetUserPostDislikeCount, useGetUserPostLikeCount } from "@/hooks/post.hook";

const UserStatistics = () => {
  const { token } = useUserContext();

  const { data: userPostDataCount, isPending: userPostDataCountLoading } =
    useGetUserPostCount(token as string);

  const { data: userPostLikeCount, isPending: userPostLikeCountLoading } =
  useGetUserPostLikeCount(token as string);


  const { data: userPostDislikeCount, isPending: userPostDislikeCountLoading } =
  useGetUserPostDislikeCount(token as string);



  const { data: userPostCommentCount, isPending: userPostCommentCountLoading } =
  useGetUserPostCommentCount(token as string);





  let content = null 


    //   * if data is loading
    if (
        userPostDataCountLoading ||
        userPostLikeCountLoading ||
        userPostDislikeCountLoading || userPostCommentCountLoading
      ) {
        content = (
          <div className="flex justify-center items-center h-[24vh]">
            <div className="rounded-full size-16 bg-prime100 animate-ping"></div>
          </div>
        );
 }


      else {
        content = (
          <div className="statisticsCardContent grid xsm:grid-cols-2 lg:grid-cols-3 md:gap-x-3 gap-x-2  gap-y-4">
            <StatisticsCard number={userPostDataCount?.data} text={"Total Post"} />
            <StatisticsCard number={userPostLikeCount?.data} text={"Total Like "} />
            <StatisticsCard number={userPostDislikeCount?.data} text={"Total Dislike "} />
            <StatisticsCard
              number={userPostCommentCount?.data}
              text="Total Comment"
            />
    </div>
  );
     }








    //   
  return (
    <div className="userStatistics pt-4  ">
      <Wrapper className=" p-6 border border-gray-600 bg-black100 rounded-md text-white shadow-md   ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          Statistics
        </p>

        <div className=" statisticsContainer    ">{content}</div>
      </Wrapper>
    </div>
  );
};

export default UserStatistics;
