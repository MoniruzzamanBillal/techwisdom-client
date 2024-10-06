import Link from "next/link";
import { Button } from "./button";

const NoUserPost = () => {
  return (
    <div className="bg-black100 h-[60vh] w-[90vw] xl:w-[62vw]  flex  robotoFont mt-6 flex-col items-center justify-center   p-6 rounded-md shadow-md  ">
      <h1 className=" text-3xl sm:text-4xl font-bold text-prime100 mb-4">
        No post available
      </h1>
      <p className="text-gray-200  text-base sm:text-lg mb-4">
        It looks like you have not created any posts yet. Start sharing your
        thoughts, experiences, or knowledge with the world.
      </p>

      <div className="addPostBtn my-2  ">
        <Link href={"/create-post"}>
          <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500 ">
            Add new post
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NoUserPost;
