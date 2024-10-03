import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="BlogCardContainer my-4 ">
      <div className="blogCardWrapper  ">
        <div className="relative rounded-md bg-black100  p-5 pt-8 flex flex-col  md:flex-row   justify-between items-center gap-x-3 gap-y-8 shadow  ">
          {/* card left section starts  */}
          <div className="cardLeft  w-full md:w-[70%] text-white ">
            {/* date container */}
            <div className="dateContainer  ">
              {/* date  */}
              <div className="date  flex  gap-4 mb-3  ">
                <p>2023-08-22</p>

                <p className=" font-semibold ">category</p>
              </div>
              {/* date  */}
            </div>
            {/* date container ends  */}

            <h2 className="mb-4 text-base font-bold text-gray-50 md:text-lg lg:text-xl">
              title
            </h2>

            <p className="mb-4  text-gray-100 w-[98%] ">
              small description Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Cum reprehenderit ratione assumenda laboriosam
              nemo aut dolore iure fugiat vitae earum.
            </p>

            <div className="mt-auto">
              <Link
                href={`/`}
                className="inline-block rounded-lg bg-gray-400 px-4 sm:px-6 py-2 text-center  font-medium text-sm sm:text-base text-gray-700 hover:text-gray-50 hover:bg-gray-700  hover:scale-105 active:scale-100 transition-all duration-200  active:bg-gray-500  "
              >
                Detail
              </Link>
            </div>
          </div>

          {/* card left section ends  */}

          {/* card right section starts  */}
          <div className="cardRight  w-full md:w-[30%] rounded-md overflow-auto ">
            <Image
              src={"https://i.postimg.cc/j57ypdpP/abu-ubaida.jpg"}
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
