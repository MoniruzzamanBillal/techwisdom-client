import { Skeleton } from "./skeleton";

const BlogCardLoading = () => {
  return (
    <div className="BlogCardLoadingContainer my-4">
      <div className="BlogCardLoadingWrapper rounded-md bg-black100  p-5 pt-8 flex flex-col  xlg:flex-row   justify-between items-center gap-x-3 gap-y-8 shadow">
        {/* skeleton left section starts  */}
        <div className="skeletonLeft flex flex-col gap-y-5 ">
          {/* top section skeleton  */}
          <div className="topSkeleton flex items-center gap-x-3 ">
            <Skeleton className=" h-[1rem] w-[4rem] xsm:w-[5rem] md:w-[6rem] " />
            <Skeleton className=" h-[1rem] w-[4rem] xsm:w-[5rem] md:w-[6rem] " />
          </div>
          {/* top section ends  */}

          {/* title skeleton  */}
          <div className="titleSkeleton">
            <Skeleton className=" h-[1.4rem] w-[12rem] xsm:w-[16rem] md:w-[18rem] " />
          </div>
          {/* title skeleton  */}

          {/* description skeleton  */}
          <div className="descriptionSkeleton">
            <Skeleton className=" h-[4rem] w-[22rem] xsm:w-[28rem] sm:w-[30rem] md:w-[38rem] " />
          </div>
          {/* description skeleton  */}

          {/* button skeleton  */}
          <div className="buttonSkeleton">
            <Skeleton className=" h-[1.8rem] w-[5rem] " />
          </div>
          {/* button skeleton  */}
        </div>
        {/* skeleton left section ends  */}

        {/* skeleton right section starts  */}
        <div className="skeletonRight">
          <Skeleton className=" h-[10rem] w-[19rem] " />
        </div>
        {/* skeleton right section ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default BlogCardLoading;
