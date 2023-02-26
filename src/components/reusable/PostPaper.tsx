import React from "react";
import {
  useDeletePrevImageMutation,
  useGetSpecificUserQuery,
} from "../../api/queries/usersApi";
import Loading from "../shared/Loading";
import { Confirm } from "react-st-modal";
import { useDeletePostMutation } from "../../api/queries/postsApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostPaper = ({ post, home }: any) => {
  const { description, userId, picturePath, picturePublicId } = post;

  const {
    isLoading: userLoading,
    isError: isUserError,
    error: userError,
    data: user,
  } = useGetSpecificUserQuery<any>(userId);

  const [deletePrevImg, others] = useDeletePrevImageMutation();

  const [
    deletePost,
    {
      isLoading: deleting,
      isError: isDeleteError,
      error: deleteError,
      data: deleted,
    },
  ] = useDeletePostMutation<any>();

  if (isUserError) {
    console.log(userError?.message);
  }

  if (isDeleteError) {
    console.log(deleteError);
  }

  const handleDeletePost = async (id: string) => {
    const result = await Confirm(
      "Are you sure you want to delete this?",
      "Warning!"
    );
    if (result) {
      await deletePost(id);
      if (post?.picturePublicId) {
        deletePrevImg(picturePublicId);
      }
    }
  };

  if (deleting) {
    return <Loading></Loading>;
  }

  if (deleted) {
    toast.success("The post has been deleted", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      toastId: "success",
    });
    setTimeout(()=>{
      window.location.reload()
    }, 3000)
  }

  return (
    <div className="w-full h-auto py-10px bg-white mt-5 shadow-sm">
      <div className="h-[80px] flex items-center justify-between w-11/12 mx-auto">
        {userLoading ? (
          <Loading></Loading>
        ) : (
          <div className="w-3/4 h-full flex items-center">
            <img
              className="w-[50px] h-[60px] rounded-full"
              src={user?.picturePath}
              alt="profile pic"
            />

            <p className="text-2xl ml-5 capitalize">
              {user?.firstName} {user.lastName}
            </p>
          </div>
        )}
    {
      !home &&     <div>
      <span className="mr-2">Edit</span>
      <span
        className="cursor-pointer"
        onClick={() => handleDeletePost(post?._id)}
      >
        Delete
      </span>
    </div>
    }
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
