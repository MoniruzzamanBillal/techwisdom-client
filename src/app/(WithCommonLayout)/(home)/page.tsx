"use client";
import Wrapper from "@/components/shared/Wrapper";
import { BlogCard, BlogCardLoading } from "@/components/ui";
import { CategoryFilter, SortFilter } from "@/components/ui/Module";
import { useGetPosts } from "@/hooks/post.hook";
import useDebounce from "@/hooks/UseDebounceHook";
import { TPostsResponse } from "@/types/Global.types";

import { useState ,useEffect } from "react";

const Home = () => {
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSortBy] = useState("");

  const debounceTerm = useDebounce(searchTerm , 500 ) 

  const [params, setParams] = useState<Record<string, unknown> | undefined>(
    undefined
  );

  const { data: allPostData, isPending: blogsDataLoading } = useGetPosts(params);

  console.log(allPostData);
  // console.log(type);
  // console.log(searchTerm);
  // console.log(sort);
  // console.log( 'debounce = ' ,  debounceTerm);
  // console.log(params);



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




    let content = null 



    // * if no data 
    if(allPostData?.data?.length < 1) {
      content = (
        <div className= "border border-gray-600 bg-black100 h-[62vh] w-[90vw] xl:w-[66vw]  flex  robotoFont mt-6 flex-col items-center justify-center   p-6 rounded-md shadow-md  ">
        <h1 className=" text-3xl sm:text-4xl font-bold text-prime100 mb-4">
          No post available  !!!
        </h1>
       
  
      
      </div>
      )
    }
    


    if(allPostData?.data?.length ) {
      content = (
       <>
       
       {allPostData?.data &&
          allPostData?.data?.map((item: TPostsResponse) => (
            <BlogCard key={item?._id} blogData={item} />
          ))}
       </>
      )
    }

  

  return (
    <div className="HomePageContainer pt-4 bg-black50 min-h-screen ">
      <Wrapper className="homePageWrapper  ">
        {/* search sort section starts  */}

        <div className="searchFilterSection mb-4 ">
          <SortFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} sort={sort} setSortBy={setSortBy} />
        </div>

        {/* search sort section ends  */}

        {/* main body part starts  */}
        <div className="mainBody   flex flex-col xl:flex-row justify-between  gap-x-6 gap-y-8 ">
          {/* left side filter section starts  */}
          <div className="filterSection w-[100%] xl:w-[16%]  ">
            <CategoryFilter type={type} setType={setType} />
          </div>
          {/* left side filter section ends  */}

          {/* right section starts  */}
          <div className="contentSection   w-[84%] ">
            {/*  */}

            {blogsDataLoading &&
              [1, 2, 3].map((item, ind) => <BlogCardLoading key={ind} />)}

           {content}

            {/*  */}
          </div>
          {/* right section ends  */}
        </div>
        {/* main body part ends  */}

        {/*  */}
      </Wrapper>
    </div>
  );
};

export default Home;
