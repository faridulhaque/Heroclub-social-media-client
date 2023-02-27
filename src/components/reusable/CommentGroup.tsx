import React from "react";
import { useGetSpecificUserQuery } from "../../api/queries/usersApi";
import Loading from "../shared/Loading";

const CommentGroup = ({ comment }: any) => {
  const {
    isLoading: userLoading,
    isError: isUserError,
    error: userError,
    data: user,
  } = useGetSpecificUserQuery<any>(comment?.userId);

  if (isUserError) {
    console.log(userError);
  }

  

  return (
    <div className="w-full h-auto flex items-center mt-2 py-2">
      {userLoading ? (
        <Loading></Loading>
      ) : (
        <div className="h-[50px] w-2/12 flex items-center justify-center">
          <img
            src={user?.picturePath}
            alt=""
            className="w-1.5/4 h-full rounded-full"
          />
        </div>
      )}
      <div className="w-9/12">
        <h3 className="text-secondary mt-1">
          {user?.firstName} {user?.lastName}
        </h3>
        <p className="text-accent mt-1 bg-base-200">{comment?.comment}</p>
      </div>
    </div>
  );
};

export default CommentGroup;
