"use client";
import Wrapper from "@/components/shared/Wrapper";
import { BlogCard, BlogCardLoading } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { CategoryFilter, SortFilter } from "@/components/ui/Module";
import { useGetPosts } from "@/hooks/post.hook";
import useDebounce from "@/hooks/UseDebounceHook";
import { TPostsResponse } from "@/types/Global.types";

import { useState, useEffect } from "react";

const Home = () => {
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSortBy] = useState("");

  const debounceTerm = useDebounce(searchTerm, 500);
  const dataPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const [params, setParams] = useState<Record<string, unknown> | undefined>(
    undefined
  );

  const { data: allPostData, isPending: blogsDataLoading } =
    useGetPosts(params);

  const [postsData, setPostData] = useState<TPostsResponse[] | []>([]);

  // console.log("from server = ", allPostData?.data);
  // console.log(type);
  // console.log(searchTerm);
  // console.log("sort value = ", sort);
  // console.log( 'debounce = ' ,  debounceTerm);
  // console.log(params);
  // console.log("current page = ", currentPage);
  // console.log(postsData?.length);

  // ! for handling see more button , increase pagination state value by 1
  const handlePaginateItem = () => {
    setCurrentPage(currentPage + 1);
  };

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
        if (sort !== "a") {
      
          newParam.sort = sort;
         
        } 

        // newParam.sort = sort
      }

      if (currentPage) {
        newParam.page = currentPage;
        newParam.limit = dataPerPage;
      }

      setParams(newParam);
    };

    updateParam();
  }, [debounceTerm, type, sort, currentPage]);

  // ! effect to store data in state
  useEffect(() => {
    const updatePostData = () => {
      if (allPostData?.data) {
        if (sort !== 'a' || searchTerm || type) {
          setPostData([]);
          setPostData(allPostData?.data);
          setCurrentPage(1);
        } else {
          if (currentPage === 1) {
            setPostData(allPostData?.data);
          } else {
            const data = [...postsData, ...allPostData?.data];
            setPostData(data);
          }
        }
      }
    };

    updatePostData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allPostData]);

  let content = null;

  // * if no data
  if (!blogsDataLoading && postsData?.length < 1) {
    content = (
      <div className="border border-gray-600 bg-black100 h-[62vh] w-[90vw] xl:w-[66vw]  flex  robotoFont mt-6 flex-col items-center justify-center   p-6 rounded-md shadow-md  ">
        <h1 className=" text-3xl sm:text-4xl font-bold text-prime100 mb-4">
          No post available !!!
        </h1>
      </div>
    );
  }

  if (postsData?.length) {
    content = (
      <>
        {postsData &&
          postsData?.map((item: TPostsResponse) => (
            <BlogCard key={item?._id} blogData={item} />
          ))}
      </>
    );
  }

  return (
    <div className="HomePageContainer py-6 bg-black50 min-h-screen ">
      <Wrapper className="homePageWrapper  ">
        {/* search sort section starts  */}

        <div className="searchFilterSection mb-4  ">
          <SortFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sort={sort}
            setSortBy={setSortBy}
          />
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
          <div className="contentSection  w-full xl:w-[84%] ">
            {/*  */}

            {content}

            {/* ! for showing loading sceleton  */}
            {blogsDataLoading &&
              [1, 2, 3].map((item, ind) => <BlogCardLoading key={ind} />)}

            {/* for showing see more button  */}
           
            {  (sort === "a" || !sort) &&  allPostData?.data?.length && (
              <div className="seeMoreBtn py-3 flex justify-center items-center ">
                <Button
                  onClick={() => handlePaginateItem()}
                  className=" border border-sky-700 bg-prime50 hover:bg-prime100 shadow-md  "
                >
                  See More
                </Button>
              </div>
            )}

            {/* no post message  */}
            {!allPostData?.data?.length && !blogsDataLoading ? (
              <div className="noPostAvailable pt-2 text-center text-red-500 text-2xl font-semibold  ">
                <p>No More post available</p>
              </div>
            ) : (
              ""
            )}

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
