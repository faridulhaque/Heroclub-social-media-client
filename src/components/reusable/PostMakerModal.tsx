import React, { useState } from "react";

import { BsFillImageFill } from "react-icons/bs";
import { GiConfirmed } from "react-icons/gi";
import { useCreatePostMutation } from "../../api/queries/postAPI";
import Loading from "../shared/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostMakerModal = ():any => {
  const [postPic, setPostPic] = useState<any>(null);

  const [createPost , {isLoading:creating, isError: isCreateError, error: createError, data: created}] = useCreatePostMutation<any>();

  let userInfo = JSON.parse(localStorage.getItem("user") || "null");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userId = userInfo._id;
    const description = e.currentTarget.description.value;

    const postInfo = {
      userId,
      description,
    };

    if (postPic?.name) {
      const file = new FormData();
      file.append("file", postPic);
      file.append("upload_preset", "heroclub");

      const pictureInfo = await uploadImage(file);
      const data = {
        ...pictureInfo,
        ...postInfo,
      };

      createPost(data)
    } else {
      createPost(postInfo)
    }
  };

  const uploadImage = async (file: any) => {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dfmdacf6w/image/upload",
      {
        method: "POST",
        body: file,
      }
    );
    const data = await response.json();
    // console.log(data)
    return {
      picturePath: data.secure_url,
      picturePublicId: data.public_id,
    };
  };

  if(creating){
    return <Loading></Loading>
  }

  if(isCreateError){
    return console.log(createError)
  }

  if(created?._id){
    toast.success("Your feed has been updated!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      toastId: "success",
    });
  }

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <form onSubmit={handleSubmit} className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal"
            className="text-3xl bg-white rounded-full p-5 absolute right-0 top-0 text-black cursor-pointer"
          >
            X
          </label>
          <h3 className="font-bold text-lg text-center">Create Post</h3>
          <div className="w-2/4 h-1 bg-secondary mt-5 mx-auto"></div>

          <div className="w-full mt-10">
            <textarea
              name="description"
              placeholder="What's on your mind?"
              className="textarea textarea-bordered textarea-lg w-full resize-none h-[400px]"
            ></textarea>
          </div>

          <label htmlFor="post-image" className="flex items-center">
            <BsFillImageFill className="w-[50px] h-[45px] text-secondary"></BsFillImageFill>
            {postPic?.name && (
              <GiConfirmed className="text-green-400 text-3xl ml-5"></GiConfirmed>
            )}
          </label>

          <div className="w-full mt-10">
            <button type="submit" className="btn btn-secondary block text-white">
              Create Post
            </button>
          </div>
        </div>
      </form>
      <input
        onChange={(e: any) => setPostPic(e.target.files[0])}
        id="post-image"
        type="file"
        className="hidden"
      ></input>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default PostMakerModal;
