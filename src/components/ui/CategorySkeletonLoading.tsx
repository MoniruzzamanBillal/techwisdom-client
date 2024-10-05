import { Skeleton } from "./skeleton";

const CategorySkeletonLoading = () => {
  return (
    <div className="CategorySkeletonLoadingContainer py-2 ">
      {/*  */}
      <div className="skeletonLoadingContent flex items-center gap-x-1 border-b border-gray-300 pb-2 my-2 ">
        <Skeleton className=" size-[1rem] rounded-full " />
        <Skeleton className=" h-2 w-[8rem]  " />
      </div>
      {/*  */}
      {/*  */}
      <div className="skeletonLoadingContent flex items-center gap-x-1 border-b border-gray-300 pb-2 my-2 ">
        <Skeleton className=" size-[1rem] rounded-full " />
        <Skeleton className=" h-2 w-[8rem]  " />
      </div>
      {/*  */}
      {/*  */}
      <div className="skeletonLoadingContent flex items-center gap-x-1  ">
        <Skeleton className=" size-[1rem] rounded-full " />
        <Skeleton className=" h-2 w-[8rem]  " />
      </div>
      {/*  */}
    </div>
  );
};

export default CategorySkeletonLoading;
