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
import { useGetSinglePost } from "@/hooks/post.hook";
import { TComment } from "@/types/Global.types";
import { useState } from "react";
import { toast } from "sonner";

type IProps = {
  params: {
    postId: string;
  };
};

const PostDetail = ({ params: { postId } }: IProps) => {
  const { user } = useUserContext();

  const {
    data: postDetail,
    isLoading,
    isPending,
    refetch: postDetailRefetch,
  } = useGetSinglePost(postId);

  const { mutateAsync: addComment } = useAddComment();

  const [comment, setComment] = useState<string | null>(null);

  // console.log(postDetail?.data);

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
