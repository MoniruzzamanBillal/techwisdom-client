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
import { Button } from "@/components/ui/button";

import { FacebookShareButton } from "react-share";
import { FaFacebook } from "react-icons/fa";
import UpvoteDownVoteComponent from "@/components/ui/Module/postDetail/UpvoteDownVote";
import { giveUpvotes } from "./../../../../services/PostServices/index";

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

  // ! check if the user is subscribed
  useEffect(() => {
    if (
      postDetail?.data?.isPremium &&
      !user?.isVerified &&
      !(
        user?.userRole === "admin" ||
        postDetail?.data?.authorId?._id === user?._id
      )
    ) {
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
      <div className=" container postDataContainer p-6  rounded-md shadow-md text-white flex flex-col gap-y-3 ">
        <PostDetailCard postData={postDetail?.data} />

        <div className=" py-5 print:hidden ">
          <Button
            className=" text-xs sm:text-sm md:text-base bg-sky-600 hover:bg-prime100 font-semibold text-gray-100  "
            onClick={() => window.print()}
          >
            Download this post
          </Button>
        </div>

        {/* upvote downvote section starts  */}

        {user && (
          <UpvoteDownVoteComponent
            user={user}
            postDetail={postDetail}
            handleGiveDownvote={handleGiveDownvote}
            handleGiveUpvote={handleGiveUpvote}
          />
        )}

        {/* upvote downvote section  ends  */}

        {/* social media share section starts  */}

        {user && (
          <div className="socialMediaShare py-4 mt-2  border-y border-gray-600 text-xl flex items-center gap-x-3 ">
            <p>share this on :</p>

            {/* facebook share option  */}
            <FacebookShareButton
              hashtag={`#${postDetail?.data?.category?.cName}`}
              url={`https://techwisdom.vercel.app/post/${postId}`}
            >
              <FaFacebook className=" text-2xl font-medium text-blue-500 " />
            </FacebookShareButton>
          </div>
        )}

        {/* social media share section ends  */}

        <h1 className="   font-semibold text-2xl mb-3 mt-6 print:hidden ">
          Comments{" "}
        </h1>

        {user && (
          <div className="commentInputContainer print:hidden">
            {postDetail?.data?.authorId?._id === user?._id ? (
              " "
            ) : (
              <Comment
                comment={comment}
                setComment={setComment}
                handleAddComment={handleAddComment}
              />
            )}
          </div>
        )}

        <div className="userCommentCard print:hidden  ">
          {postDetail?.data?.comments &&
            postDetail?.data?.comments?.map((commentData: TComment) => (
              <UserCommentCard
                key={commentData?._id}
                commentData={commentData}
                postId={postId}
              />
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="postDetailContainer  py-4 bg-black50 min-h-screen ">
      <Wrapper className=" postDetailWrapper my-3 border border-gray-700 bg-black100 rounded-md p-5  ">
        {content}
      </Wrapper>
    </div>
  );
};

export default PostDetail;
