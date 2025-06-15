import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

const UpvoteDownVoteComponent = ({
  user,
  postDetail,
  handleGiveUpvote,
  handleGiveDownvote,
}) => {
  return (
    <div className="voteContainer print:hidden ">
      {/* * for showing upvote , downvote section  */}
      {postDetail?.data?.authorId?._id !== user?._id && (
        <div className="upvoteDownvoteContainer py-4 mt-2 flex flex-col gap-y-3 border-y border-gray-600  ">
          {/*  */}
          <div className="upvoteContainer flex items-center gap-x-2 text-lg xsm:text-xl xmd:text-2xl ">
            <p>Give Upvote : </p>

            {postDetail?.data?.upvotedBy?.includes(user?._id) ? (
              <BiSolidLike className=" text-2xl sm:text-3xl text-gray-500 cursor-pointer " />
            ) : (
              <BiSolidLike
                onClick={handleGiveUpvote}
                className=" text-2xl sm:text-3xl text-prime100 cursor-pointer "
              />
            )}
          </div>
          {/*  */}

          <div className="downVoteContainer  flex items-center gap-x-2 text-lg xsm:text-xl xmd:text-2xl ">
            <p>Give Downvote : </p>

            {postDetail?.data?.downvotedBy?.includes(user?._id) ? (
              <BiSolidDislike className=" text-2xl sm:text-3xl text-gray-500 cursor-pointer " />
            ) : (
              <BiSolidDislike
                onClick={handleGiveDownvote}
                className=" text-2xl sm:text-3xl text-prime100 cursor-pointer "
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpvoteDownVoteComponent;
