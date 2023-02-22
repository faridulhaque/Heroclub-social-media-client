import React from "react";
import PostMakerModal from "./PostMakerModal";

const PostMaker = () => {
  return (
    <div className="w-full h-[100px] bg-white shadow-2xl flex justify-around items-center">
      <div className="h-[80px] w-1.5/12">
        <img
          src="https://i.ibb.co/6YK1cXs/avatar.jpg"
          alt=""
          className="w-full h-full rounded-full"
        />
      </div>
      <label
        htmlFor="my-modal"
        className="w-9/12 h-[60px] rounded-lg bg-[#F0F2F5] cursor-pointer flex items-center"
      >
        <p className="text-lg ml-5">What's on your mind? user!</p>
      </label>
      <PostMakerModal></PostMakerModal>
    </div>
  );
};

export default PostMaker;
