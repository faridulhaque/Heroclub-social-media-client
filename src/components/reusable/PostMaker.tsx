import React from "react";
import PostMakerModal from "./PostMakerModal";

const PostMaker = ({user}:any) => {


  
  return (
    <div className="w-full h-[100px] bg-white shadow-sm flex justify-around items-center">
      <div className="h-[80px] w-1.5/12">
        <img
          src={user?.picturePath}
          alt=""
          className="w-full h-full rounded-full"
        />
      </div>
      <label
        htmlFor="my-modal"
        className="w-9/12 h-[60px] rounded-lg bg-[#F0F2F5] cursor-pointer flex items-center"
      >
        <p className="text-lg ml-5 text-accent">What's on your mind, <span className="capitalize">{user?.firstName}</span>?</p>
      </label>
      <PostMakerModal></PostMakerModal>
    </div>
  );
};

export default PostMaker;
