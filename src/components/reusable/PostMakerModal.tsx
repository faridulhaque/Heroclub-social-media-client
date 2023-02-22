import React from "react";

const PostMakerModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
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
              placeholder="What's on your mind?"
              className="textarea textarea-bordered textarea-lg w-full resize-none h-[400px]"
            ></textarea>
          </div>

          <div className="w-full mt-10">
            <button className="btn btn-secondary block text-white">
              Create Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostMakerModal;
