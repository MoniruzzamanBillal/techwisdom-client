"use client";

import Wrapper from "@/components/shared/Wrapper";
import {
  PostDeleteModal,
  TableDataError,
  TableDataLoading,
} from "@/components/ui";
import { useDeletePost, useGetPosts } from "@/hooks/post.hook";
import { TPostsResponse } from "@/types/Global.types";
import { toast } from "sonner";

const ManagePost = () => {
  const {
    data: allPostData,
    isPending: blogsDataLoading,
    refetch: allPostRefetch,
  } = useGetPosts();

  const { mutateAsync: deletePost } = useDeletePost();

  // console.log(allPostData?.data);

  const handleDeletePost = async (postId: string) => {
    try {
      const result = await deletePost(postId);

      if (result?.success) {
        allPostRefetch();
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong while deleting post !! ");
    }
  };

  let content = null;

  //  *  if data is loading
  if (blogsDataLoading) {
    content = (
      <tr>
        <td colSpan={8} className="p-4">
          <TableDataLoading />
        </td>
      </tr>
    );
  }

  // ! if no data
  if (!blogsDataLoading && allPostData?.data?.length < 1) {
    content = (
      <tr>
        <td colSpan={8}>
          <TableDataError message="Nothing Found" />
        </td>
      </tr>
    );
  }

  if (!blogsDataLoading && allPostData?.data?.length) {
    content = allPostData?.data?.map((post: TPostsResponse) => (
      <tr key={post._id} className="border-b">
        <td className="p-4 text-center"> {post?.authorId?.name} </td>

        <td className="p-4 text-center">{post?.category?.cName}</td>
        <td className="p-4 text-center">
          {post?.isPremium === false ? "No" : "Yes"}
        </td>
        <td className="p-4 text-center">
          <PostDeleteModal
            id={post?._id}
            handleDeleteFunction={handleDeletePost}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div className="managePostContainer pt-4">
      <Wrapper className=" p-6 bg-black100 rounded-md text-white shadow-md ">
        <p className="brand text-xl xsm:text-2xl md:text-3xl font-medium mb-8 xsm:mb-10 md:mb-14  ">
          Manage post
        </p>

        {/* manage posts table starts  */}
        <div className="manageUserTable relative w-full overflow-auto mt-4 ">
          <table className="w-full text-sm bg-black20 ">
            <thead className="border-b">
              <tr className="w-full text-sm bg-black100 text-gray-200 ">
                <th className="px-4 font-medium">Author</th>
                <th className="px-4 font-medium">Category </th>
                <th className="px-4 font-medium"> Premium </th>
                <th className="px-4 font-medium"> Action </th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
        {/* manage posts table ends  */}
      </Wrapper>
    </div>
  );
};

export default ManagePost;
