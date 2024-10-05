type TProps = {
  comment: string | null;
  setComment: (value: string) => void;
  handleAddComment: () => void;
};

const Comment = ({ comment, setComment, handleAddComment }: TProps) => {
  return (
    <div className="CommentContainer  ">
      <div className="w-full mb-4 border border-gray-700  bg-black50 rounded-md ">
        <div className="px-4 py-2 bg-black50   ">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={5}
            value={comment as string}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-0 text-sm text-gray-50 bg-black50  border-none outline-none  "
            required
            placeholder="Write a comment..."
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t  ">
          <button
            type="submit"
            onClick={() => handleAddComment()}
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-md  hover:scale-105 active:scale-100  hover:bg-blue-800"
          >
            Post comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
