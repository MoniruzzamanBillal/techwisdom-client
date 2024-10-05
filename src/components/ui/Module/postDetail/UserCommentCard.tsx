import Image from "next/image";

const UserCommentCard = () => {
  return (
    <div className="UserCommentCardContainer  my-3 p-2 rounded-md bg-black50  ">
      <div className="UserCommentWrapper   ">
        {/* writer info starts  */}
        <div className="writerInfo  flex items-center gap-2 mb-1.5  ">
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
            <p className=" text-gray-800 font-semibold text-xs sm:text-sm ">
              user name
            </p>
            <p className=" text-gray-700 font-medium text-xs  ">
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

        {/*  */}
      </div>
    </div>
  );
};

export default UserCommentCard;
