import { Skeleton } from "./skeleton";

const PostDetailSkeletonLoading = () => {
  return (
    <div className="PostDetailSkeletonLoadingContainer  ">
      {/* top section  */}
      <div className="mainSection flex flex-col gap-y-6 ">
        <div className="topSection flex flex-col sm:flex-row justify-between items-center gap-y-6  ">
          <div className="leftSide flex flex-col gap-y-4 ">
            <Skeleton className=" h-[1.5rem] w-[17rem] sm:w-[15rem] md:w-[18rem] xl:w-[24rem] xlm:w-[28rem] xlg:w-[32rem]  " />
            <Skeleton className=" h-[1.5rem] w-[4.2rem] sm:w-[3.8rem] xlm:w-[4.5rem] xlg:w-[5rem]  " />
            <Skeleton className=" h-[1.5rem] w-[8rem] sm:w-[6.6rem] xl:w-[7rem] xlg:w-[8rem]  " />
          </div>
          {/* 
            
            */}

          <div className="rightSection">
            <Skeleton className=" h-[14rem] sm:h-[11rem] md:h-[14rem] xl:h-[16rem] w-[22rem] sm:w-[17rem] md:w-[21rem] xl:w-[25rem]  xlm:w-[32rem] xlg:w-[34rem]  " />
          </div>

          {/*  */}
        </div>
        {/*  */}

        {/* bottom section  */}
        <div className="bottomSection">
          <Skeleton className=" h-[35rem]  w-full  " />
        </div>

        {/* bottom section  */}
        <div className="bottomSection">
          <Skeleton className=" h-[4rem]  w-full  " />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default PostDetailSkeletonLoading;
