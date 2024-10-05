import { Skeleton } from "./skeleton";

const PostDetailSkeletonLoading = () => {
  return (
    <div className="PostDetailSkeletonLoadingContainer  ">
      {/* top section  */}
      <div className="mainSection flex flex-col gap-y-6 ">
        <div className="topSection flex justify-between items-center  ">
          <div className="leftSide flex flex-col gap-y-4 ">
            <Skeleton className=" h-[1.5rem]  w-[32rem]  " />
            <Skeleton className=" h-[1.5rem]  w-[5rem]  " />
            <Skeleton className=" h-[1.5rem]  w-[8rem]  " />
          </div>
          {/* 
            
            */}

          <div className="rightSection">
            <Skeleton className=" h-[16rem]  w-[34rem]  " />
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
