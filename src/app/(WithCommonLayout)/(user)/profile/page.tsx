import Wrapper from "@/components/shared/Wrapper";
import { BlogCard } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { CategoryFilter, SortFilter } from "@/components/ui/Module";
import Link from "next/link";

const options = [
  {
    name: "All",
    value: "",
  },
  { name: "Sedan", value: "Sedan" },
  { name: "SUV", value: "SUV" },
  { name: "Coupe", value: "Coupe" },
  { name: "Compact", value: "Compact" },
  { name: "Minivan", value: "Minivan" },
];

const UserProfile = () => {
  return (
    <div className="userPostsContainer pt-4 ">
      <Wrapper className=" userPostsWrapper  ">
        {/* add post button  */}
        <div className="addPostBtn my-6  ">
          <Link href={"/create-post"}>
            <Button className=" px-3 xsm:px-4 sm:px-5 md:px-6 font-semibold text-xs sm:text-sm md:text-base bg-prime50 hover:bg-prime100 active:scale-95 duration-500 ">
              Add new post
            </Button>
          </Link>
        </div>
        {/* add post button ends  */}

        <div className="searchFilterSection mb-4 ">
          <SortFilter />
        </div>

        {/* main body part starts  */}
        <div className="mainBody   flex flex-col xl:flex-row justify-between  gap-x-6 gap-y-8 ">
          {/* left side filter section starts  */}
          <div className="filterSection w-[100%] xl:w-[16%]  ">
            <CategoryFilter options={options} />
          </div>
          {/* left side filter section ends  */}

          {/* right section starts  */}
          <div className="contentSection   w-[84%] ">
            {/*  */}
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />

            {/*  */}
          </div>
          {/* right section ends  */}
        </div>
        {/* main body part ends  */}
      </Wrapper>
    </div>
  );
};

export default UserProfile;
