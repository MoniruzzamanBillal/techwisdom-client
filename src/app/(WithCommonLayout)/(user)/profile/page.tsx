"use client";

import Wrapper from "@/components/shared/Wrapper";
import { BlogCard, BlogCardLoading, NoUserPost } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { CategoryFilter, SortFilter } from "@/components/ui/Module";
import { useUserContext } from "@/context/user.provider";
import { useGetUserPost } from "@/hooks/post.hook";
import useDebounce from "@/hooks/UseDebounceHook";
import { TPostsResponse } from "@/types/Global.types";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const { token } = useUserContext();

  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSortBy] = useState("");

  const debounceTerm = useDebounce(searchTerm , 500 ) 
  const [params, setParams] = useState<Record<string, unknown> | undefined>(
    undefined
  );


  const { data: userPostData, isPending: userPostPending } = useGetUserPost(
    token as string ,params
  );

  // console.log(userPostData?.data);
  console.log(params);


     //! Use effect to track param value
     useEffect(() => {
      const updateParam = () => {
        const newParam: Record<string, unknown> = {};
  
        
       
        if (debounceTerm) {
          newParam.searchTerm = debounceTerm;
        }
       
      
  
        if (type) {
          newParam.type = type;
        }
  
        if (sort) {
          newParam.sort = sort;
        }
  
        setParams(newParam);
      };
  
      updateParam();
    }, [ debounceTerm ,  type, sort]);



  let content = null;

  // ! if user post data is loading
  if (userPostPending) {
    content = (
      <>
        {userPostPending &&
          [1, 2, 3].map((item, ind) => <BlogCardLoading key={ind} />)}
      </>
    );
  }

  //! if there is no post
  if (!userPostPending && userPostData?.data?.length < 1) {
    content = <NoUserPost />;
  }

  // ! for user post
  if (!userPostPending && userPostData?.data?.length) {
    content = (
      <>
        {/*  */}
        {userPostData?.data &&
          userPostData?.data?.map((item: TPostsResponse) => (
            <BlogCard key={item?._id} blogData={item} />
          ))}

        {/*  */}
      </>
    );
  }

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
        <SortFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} sort={sort} setSortBy={setSortBy} />
        </div>

        {/* main body part starts  */}
        <div className="mainBody   flex flex-col xl:flex-row justify-between  gap-x-6 gap-y-8 ">
          {/* left side filter section starts  */}
          <div className="filterSection w-[100%] xl:w-[16%]  ">
            <CategoryFilter type={type} setType={setType} />
          </div>
          {/* left side filter section ends  */}

          {/* right section starts  */}
          <div className="contentSection   w-[84%] ">{content}</div>
          {/* right section ends  */}
        </div>
        {/* main body part ends  */}
      </Wrapper>
    </div>
  );
};

export default UserProfile;
