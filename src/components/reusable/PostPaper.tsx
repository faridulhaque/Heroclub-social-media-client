import React from "react";
import { useGetSpecificUserQuery } from "../../api/queries/usersApi";
import Loading from "../shared/Loading";

const PostPaper = ({ post }: any) => {
  const { description, userId, picturePath } = post;

  const {
    isLoading: userLoading,
    isError: isUserError,
    error: userError,
    data: user,
  } = useGetSpecificUserQuery<any>(userId);

  if (isUserError) {
    console.log(userError);
  }

  return (
    <div className="w-full h-auto py-10px bg-white mt-10 shadow-lg">
      <div className="h-[100px] flex items-center justify-between w-11/12 mx-auto">
        {userLoading ? (
          <Loading></Loading>
        ) : (
          <div className="w-3/4 h-full flex items-center">
            <img
              className="w-2/12 h-[80px] rounded-full"
              src={user?.picturePath}
              alt="profile pic"
            />

            <p className="text-2xl ml-5">
              {user?.firstName} {user.lastName}
            </p>
          </div>
        )}
        <div>Edit</div>
      </div>
      <div className="w-11/12 mx-auto mt-5 pb-10">
        <p className="w-full text-lg text-justify">
          {description.length >= 300
            ? `${description.slice(0, 300)}`
            : description}
          {description.length >= 300 && (
            <span>
              ...{" "}
              <span className="link link-hover text-blue-500">See More</span>
            </span>
          )}
        </p>
        {picturePath && (
          <div className="w-full h-[650px] mt-5">
            <img className="w-full h-full" src={picturePath} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostPaper;
