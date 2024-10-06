"use client";
import { format } from "date-fns";

import { TPostsResponse } from "@/types/Global.types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type TBlogCardProps = {
  blogData: TPostsResponse;
};

const BlogCard = ({ blogData }: TBlogCardProps) => {
  // console.log(blogData);

  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    if (blogData) {
      const tempDiv = document.createElement("div");

      tempDiv.innerHTML = blogData?.content;
      const paragraphs = tempDiv.querySelectorAll("p");

      let content = "";
      paragraphs?.forEach((paragraph) => {
        content += paragraph.textContent;
      });

      setDescription(content);
    }
  }, [blogData]);

  return (
    <div className="BlogCardContainer my-4 ">
      <div className="blogCardWrapper  ">
        <div className="relative rounded-md bg-black100  p-5 pt-8 flex flex-col  md:flex-row   justify-between items-center gap-x-3 gap-y-8 shadow  ">
          {/* card left section starts  */}
          <div className="cardLeft  w-full md:w-[70%] text-white ">
            {/* premium text content  */}
            {blogData?.isPremium !== false ? (
              <p className=" mb-3 text-sm font-semibold text-prime100 ">
                Premium
              </p>
            ) : (
              ""
            )}

            {/* premium text content  */}

            {/* date container */}
            <div className="dateContainer  ">
              {/* date  */}
              <div className="date  flex  gap-x-8 mb-3  ">
                {blogData?.createdAt && (
                  <p>
                    {format(
                      new Date(blogData?.createdAt as string),
                      "dd-MMMM-yyyy"
                    )}
                  </p>
                )}

                <p className=" font-semibold ">{blogData?.category?.cName}</p>
              </div>
              {/* date  */}
            </div>
            {/* date container ends  */}

            <h2 className="mb-4 text-base font-bold text-gray-50 md:text-lg lg:text-2xl">
              {blogData?.title}
            </h2>

            <p className="mb-4  text-gray-100 w-[98%] ">
              {description && description?.length >= 80
                ? ` ${description.slice(0, 80)}........ `
                : description}
            </p>

            <div className="mt-auto">
              <Link
                href={`/post/${blogData?._id}`}
                className="inline-block rounded-lg bg-gray-600 px-4 sm:px-6 py-2 text-center  font-medium text-sm sm:text-base text-gray-100 hover:text-gray-50 hover:bg-gray-700  hover:scale-105 active:scale-100 transition-all duration-200  active:bg-gray-500  "
              >
                Detail
              </Link>
            </div>
          </div>

          {/* card left section ends  */}

          {/* card right section starts  */}
          <div className="cardRight  w-full md:w-[30%] rounded-md overflow-auto ">
            <Image
              src={blogData?.postImg}
              alt="blog img"
              height={700}
              width={700}
            />
          </div>
          {/* card right section ends  */}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
