import Image from "next/image";
import { Button } from "../../button";

const UserCommentCard = () => {
  return (
    <div className="UserCommentCardContainer  my-3 p-3 rounded-md bg-black50  ">
      <div className="UserCommentWrapper   ">
        {/* writer info starts  */}
        <div className="writerInfo  flex items-center gap-2 mb-2  ">
          {/* writer image  */}
          <div className="writerImg   ">
            <Image
              className=" w-8 h-8 xsm:w-9 xsm:h-9 sm:w-10 sm:h-10 rounded-full"
              src={
                "https://res.cloudinary.com/drmkqpdex/image/upload/v1728112563/testing%20image%20upload.jpg"
              }
              alt="user avatar"
              height={700}
              width={700}
            />
          </div>
          {/* writer image  */}

          {/* writer name  */}

          <div className="writerName   ">
            <p className=" text-gray-100 font-semibold text-xs sm:text-sm ">
              user name
            </p>
            <p className=" text-gray-300 font-medium text-xs  ">
              2-october-2024
            </p>
          </div>

          {/* writer name  */}
        </div>
        {/* writer info ends */}

        {/* user comment  */}
        <div className="userComment  paragraphFont text-sm sm:text-base   ">
          <p> this is user comment </p>
        </div>
        {/* user comment  */}

        {/* edit delete button section  */}
        <div className=" mt-3 editDeleteBtn text-xs flex items-center gap-x-4 ">
          <p className=" underline text-green-600 font-semibold cursor-pointer ">
            Edit
          </p>
          <p className=" underline text-red-600 font-semibold cursor-pointer ">
            Delete
          </p>
        </div>
        {/* edit delete button section  */}

        {/*  */}
      </div>
    </div>
  );
};

export default UserCommentCard;
