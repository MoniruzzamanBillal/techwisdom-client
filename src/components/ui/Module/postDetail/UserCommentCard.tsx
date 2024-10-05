"use client";

import { TComment } from "@/types/Global.types";
import Image from "next/image";
import { format } from "date-fns";
import { useState } from "react";
import { useDeleteComment, useUpdateComment } from "@/hooks/comment.hook";
import { toast } from "sonner";
import { useGetSinglePost } from "@/hooks/post.hook";
import { useUserContext } from "@/context/user.provider";

type TProps = {
  commentData: TComment;
  postId: string;
};

const UserCommentCard = ({ commentData, postId }: TProps) => {
  const { user } = useUserContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(commentData?.content);

  const { mutateAsync: updateComment } = useUpdateComment();
  const { mutateAsync: deleteFunction } = useDeleteComment();
  const { refetch: postDetailRefetch } = useGetSinglePost(postId);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  // ! for updating comment
  const handleSaveClick = async () => {
    const updatedComment = {
      content: editedContent,
    };

    try {
      const result = await updateComment({
        payload: updatedComment,
        id: commentData._id,
      });

      if (result?.success) {
        postDetailRefetch();
        setIsEditing(false);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      toast.error("something went wrong while updating comment ");
    }
  };

  // ! for canceling updadteing edit
  const handleCancelClick = () => {
    setIsEditing(false); // Cancel editing and revert to original content
    setEditedContent(commentData.content); // Reset the edited content
  };

  // ! for deleting a comment
  const handleDeleteCommnet = async () => {
    const postData = {
      postId,
    };

    const result = await deleteFunction({
      payload: postData,
      id: commentData._id,
    });



    if (result?.success) {
      toast.success("Comment deleted successfully!!");
      postDetailRefetch();
    }
  };

  // console.log(commentData);

  return (
    <div className="UserCommentCardContainer  my-3 p-3 rounded-md bg-black50  ">
      <div className="UserCommentWrapper   ">
        {/* writer info starts  */}
        <div className="writerInfo  flex items-center gap-2 mb-2  ">
          {/* writer image  */}
          <div className="writerImg   ">
            <Image
              className=" w-8 h-8 xsm:w-9 xsm:h-9 sm:w-10 sm:h-10 rounded-full"
              src={commentData?.userId?.profilePicture}
              alt="user avatar"
              height={700}
              width={700}
            />
          </div>
          {/* writer image  */}

          {/* writer name  */}

          <div className="writerName   ">
            <p className=" text-gray-100 font-semibold text-xs sm:text-sm ">
              {commentData?.userId?.name}
            </p>
            <p className=" text-gray-300 font-medium text-xs  ">
              {format(
                new Date(commentData?.createdAt as string),
                "dd-MMMM-yyyy"
              )}
            </p>
          </div>

          {/* writer name  */}
        </div>
        {/* writer info ends */}

        {/* user comment  */}
        {/* <div className="userComment  paragraphFont text-sm sm:text-base   ">
          <p> {commentData?.content} </p>
        </div> */}

        {/* User comment */}
        <div className="userComment paragraphFont text-sm sm:text-base">
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="  border border-gray-300 rounded-md p-1 bg-black20 "
              />
            </div>
          ) : (
            <p>{commentData?.content}</p>
          )}
        </div>
        {/* User comment */}

        {/* Edit delete button section */}

        {user?._id === commentData?.userId?._id && (
          <div className="mt-3 editDeleteBtn text-xs flex items-center gap-x-4">
            {isEditing ? (
              <>
                <p
                  className="underline text-green-600 font-semibold cursor-pointer"
                  onClick={handleSaveClick}
                >
                  Save
                </p>
                <p
                  className="underline text-red-600 font-semibold cursor-pointer"
                  onClick={handleCancelClick}
                >
                  Cancel
                </p>
              </>
            ) : (
              <>
                <p
                  className="underline text-green-600 font-semibold cursor-pointer"
                  onClick={handleEditClick}
                >
                  Edit
                </p>
                <p
                  onClick={handleDeleteCommnet}
                  className="underline text-red-600 font-semibold cursor-pointer"
                >
                  Delete
                </p>
              </>
            )}
          </div>
        )}

        {/* Edit delete button section */}

        {/*  */}
      </div>
    </div>
  );
};

export default UserCommentCard;
