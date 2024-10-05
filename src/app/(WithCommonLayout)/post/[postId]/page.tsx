"use client";

import Wrapper from "@/components/shared/Wrapper";
import { PostDetailSkeletonLoading } from "@/components/ui";
import {
  PostDetailCard,
  Comment,
  UserCommentCard,
} from "@/components/ui/Module";
import { useUserContext } from "@/context/user.provider";
import { useGetSinglePost } from "@/hooks/post.hook";

type IProps = {
  params: {
    postId: string;
  };
};

const PostDetail = ({ params: { postId } }: IProps) => {
  const { user } = useUserContext();

  const { data: postDetail, isLoading, isPending } = useGetSinglePost(postId);

  // console.log(postDetail?.data);

  let content = null;

  if (isLoading || isPending) {
    content = <PostDetailSkeletonLoading />;
  }

  if (!isLoading && !isPending && postDetail) {
    content = (
      <div className="postDataContainer p-6  rounded-md shadow-md text-white flex flex-col gap-y-3 ">
        <PostDetailCard postData={postDetail?.data} />
        <h1 className=" font-semibold text-2xl mb-3 mt-6 ">Comments </h1>

        {postDetail?.data?.authorId?._id === user?._id ? " " : <Comment />}

        <UserCommentCard />
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
