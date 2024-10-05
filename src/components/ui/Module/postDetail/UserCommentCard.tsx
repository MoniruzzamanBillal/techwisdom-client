"use client";

import { TComment } from "@/types/Global.types";
import Image from "next/image";
import { format } from "date-fns";
import { useState } from "react";
import { useUpdateComment } from "@/hooks/comment.hook";
import { toast } from "sonner";
import { useGetSinglePost } from "@/hooks/post.hook";

type TProps = {
  commentData: TComment;
  postId: string;
};

const UserCommentCard = ({ commentData, postId }: TProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(commentData?.content);

  const { mutateAsync: updateComment } = useUpdateComment();
  const { refetch: postDetailRefetch } = useGetSinglePost(postId);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  // ! for updating comment
  const handleSaveClick = async () => {
    // Create a new object to represent the updated comment
    const updatedComment = {
      content: editedContent,
    };

    // console.log(updatedComment);

    try {
      const result = await updateComment({
        payload: updatedComment,
        id: commentData._id,
      });

      console.log(result);

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
        {/* user comment  */}

        {/* edit delete button section  */}
        {/* <div className=" mt-3 editDeleteBtn text-xs flex items-center gap-x-4 ">
          <p className=" underline text-green-600 font-semibold cursor-pointer ">
            Edit
          </p>
          <p className=" underline text-red-600 font-semibold cursor-pointer ">
            Delete
          </p>
        </div> */}

        {/* Edit delete button section */}
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
              <p className="underline text-red-600 font-semibold cursor-pointer">
                Delete
              </p>
            </>
          )}
        </div>
        {/* Edit delete button section */}
        {/* edit delete button section  */}

        {/*  */}
      </div>
    </div>
  );
};

export default UserCommentCard;
