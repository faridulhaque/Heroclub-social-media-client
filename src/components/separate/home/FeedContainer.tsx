import React from "react";
import { useParams } from "react-router-dom";
import { useUserPostsQuery } from "../../../api/queries/postsApi";
import PostMaker from "../../reusable/PostMaker";
import PostPaper from "../../reusable/PostPaper";
import Loading from "../../shared/Loading";

const FeedContainer = ({ user }: any) => {


  const { isLoading, isError, error, data: personalPosts } = useUserPostsQuery<any>(user?._id);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    console.log(error);
  }

  let posts = personalPosts;

  return (
    <div className="xl:w-[50%] lg::w-[50%] md::w-full sm::w-full xs::w-full xss:w-full h-full overflow-y-scroll xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10 xs:mt-10 xxs:mt-10">
      <PostMaker user={user}></PostMaker>
      {/* ----------------- */}
      {posts?.map((post:any) => (
        <PostPaper post={post}></PostPaper>
      ))}
    </div>
  );
};

export default FeedContainer;
