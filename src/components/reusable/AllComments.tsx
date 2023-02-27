import React from "react";
import { useAllCommentsQuery } from "../../api/queries/postAPI";
import Loading from "../shared/Loading";
import CommentGroup from "./CommentGroup";

const AllComments = ({ postId }: any) => {
  const {
    isLoading: commentsLoading,
    isError: isCommentsError,
    error: commentsError,
    data: comments,
  } = useAllCommentsQuery<any>(postId);

  if (commentsLoading) {
    return <Loading></Loading>;
  }

  if (isCommentsError) {
    console.log(commentsError);
  }

  console.log(comments)

  return (
    <div className="w-full h-auto">
      <hr />
      {comments.slice(0, 4).map((comment: any) => (
        <>
          <CommentGroup comment={comment}></CommentGroup>
          <hr />
        </>
      ))}
      {comments.length > 5 && <p>See all comments</p>}
    </div>
  );
};

export default AllComments;
