"use client";

import Wrapper from "@/components/shared/Wrapper";
import {
  PostDetailCard,
  Comment,
  UserCommentCard,
} from "@/components/ui/Module";

type IProps = {
  params: {
    postId: string;
  };
};

const PostDetail = ({ params: { postId } }: IProps) => {
  console.log(postId);

  return (
    <div className="postDetailContainer  pt-4 bg-black50 min-h-screen ">
      <Wrapper className=" postDetailWrapper my-4  bg-black100 p-6  rounded-md shadow-md text-white flex flex-col gap-y-3 ">
        <PostDetailCard />
        <h1 className=" font-semibold text-2xl mb-3 mt-6 ">Comments</h1>

        <Comment />
        <UserCommentCard />
      </Wrapper>
    </div>
  );
};

export default PostDetail;
