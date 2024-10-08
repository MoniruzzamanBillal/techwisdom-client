/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Wrapper from "@/components/shared/Wrapper";
import { PostDetailSkeletonLoading } from "@/components/ui";
import {
  PostDetailCard,
  Comment,
  UserCommentCard,
} from "@/components/ui/Module";
import { useUserContext } from "@/context/user.provider";
import { useAddComment } from "@/hooks/comment.hook";
import {
  useGetSinglePost,
  useGiveUpvote,
  useGiveDownvote,
} from "@/hooks/post.hook";
import { TComment } from "@/types/Global.types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { useRouter } from "next/navigation";

type IProps = {
  params: {
    postId: string;
  };
};

const PostDetail = ({ params: { postId } }: IProps) => {
  const router = useRouter();
  const { user } = useUserContext();

  const { mutateAsync: GiveUpvote } = useGiveUpvote();

  const { mutateAsync: GiveDownvote } = useGiveDownvote();

  const {
    data: postDetail,
    isLoading,
    isPending,
    refetch: postDetailRefetch,
  } = useGetSinglePost(postId);

  const { mutateAsync: addComment } = useAddComment();

  const [comment, setComment] = useState<string | null>(null);

  // console.log(user);
  // console.log(postDetail);

  // ! check if the user is subscribed
  useEffect(() => {
   
    if (postDetail?.data?.isPremium && !user?.isVerified) {
      console.log("inside condition !!");
      toast.error("Subscribe for reading the post !!");
      router.push("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postDetail, user]);

  // ! for giving upcote
  const handleGiveUpvote = async () => {
    try {
      const payload = {
        postId: postDetail?.data?._id,
        userId: user?._id as string,
      };

      const result = await GiveUpvote(payload);

      if (result?.success) {
        postDetailRefetch();
      }
    } catch (error: any) {
      toast.error("Something went wrong while upvoting !!");
      console.log(error);
    }
  };

  // ! for giving downvote
  const handleGiveDownvote = async () => {
    try {
      const payload = {
        postId: postDetail?.data?._id,
        userId: user?._id as string,
      };

      const result = await GiveDownvote(payload);

      if (result?.success) {
        postDetailRefetch();
      }
    } catch (error: any) {
      toast.error("Something went wrong while downvoting !!");
      console.log(error);
    }
  };

  // ! for adding  comment
  const handleAddComment = async () => {
    if (!comment?.trim()) {
      toast.error("Add  comment !!");
      return;
    }

    const commentData = {
      content: comment,
      postId,
      userId: user?._id as string,
    };

    try {
      const result = await addComment(commentData);

      if (result?.data) {
        setComment("");
        postDetailRefetch();
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error("Something went wrong while making comment !!");
      console.log(error);
    }
  };

  let content = null;

  // ! for loading state
  if (isLoading || isPending) {
    content = <PostDetailSkeletonLoading />;
  }

  if (!isLoading && !isPending && postDetail) {
    content = (
      <div className="postDataContainer p-6  rounded-md shadow-md text-white flex flex-col gap-y-3 ">
        <PostDetailCard postData={postDetail?.data} />

        {/* upvote downvote section  */}
        {postDetail?.data?.authorId?._id !== user?._id && (
          <div className="upvoteDownvoteContainer py-4 mt-2 flex flex-col gap-y-3 border-y border-gray-600  ">
            {/*  */}
            <div className="upvoteContainer flex items-center gap-x-2 text-2xl ">
              <p>Give Upvote : </p>

              {postDetail?.data?.upvotedBy?.includes(user?._id) ? (
                <BiSolidLike className=" text-3xl text-gray-500 cursor-pointer " />
              ) : (
                <BiSolidLike
                  onClick={handleGiveUpvote}
                  className=" text-3xl text-prime100 cursor-pointer "
                />
              )}
            </div>
            {/*  */}

            <div className="downVoteContainer  flex items-center gap-x-2 text-2xl ">
              <p>Give Downvote : </p>

              {postDetail?.data?.downvotedBy?.includes(user?._id) ? (
                <BiSolidDislike className=" text-3xl text-gray-500 cursor-pointer " />
              ) : (
                <BiSolidDislike
                  onClick={handleGiveDownvote}
                  className=" text-3xl text-prime100 cursor-pointer "
                />
              )}
            </div>
          </div>
        )}

        {/* upvote downvote section  ends  */}

        <h1 className=" font-semibold text-2xl mb-3 mt-6 ">Comments </h1>

        {postDetail?.data?.authorId?._id === user?._id ? (
          " "
        ) : (
          <Comment
            comment={comment}
            setComment={setComment}
            handleAddComment={handleAddComment}
          />
        )}

        {postDetail?.data?.comments &&
          postDetail?.data?.comments?.map((commentData: TComment) => (
            <UserCommentCard
              key={commentData?._id}
              commentData={commentData}
              postId={postId}
            />
          ))}
      </div>
    );
  }

  return (
    <div className="postDetailContainer  pt-4 bg-black50 min-h-screen ">
      <Wrapper className=" postDetailWrapper my-4  bg-black100 rounded-md p-6  ">
        {content}
      </Wrapper>
    </div>
  );
};

export default PostDetail;
