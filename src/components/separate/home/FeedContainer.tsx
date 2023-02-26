import React from "react";
import { useParams } from "react-router-dom";
import {
  useAllPostsQuery,
  useUserPostsQuery,
} from "../../../api/queries/postsApi";
import PostMaker from "../../reusable/PostMaker";
import PostPaper from "../../reusable/PostPaper";
import Loading from "../../shared/Loading";

const FeedContainer = ({ user, home = true }: any) => {
  const {
    isLoading: ppLoading,
    isError: isPpError,
    error: ppError,
    data: personalPosts,
  } = useUserPostsQuery<any>(user?._id);
  const {
    isLoading: fpLoading,
    isError: isFpError,
    error: fpError,
    data: feedPosts,
  } = useAllPostsQuery<any>(null);

  if (home) {
    if (fpLoading) {
      return <Loading></Loading>;
    }

    if (isFpError) {
      console.log(fpError);
    }
  } else {
    if (ppLoading) {
      return <Loading></Loading>;
    }

    if (isPpError) {
      console.log(ppError);
    }
  }

  let posts = home ? feedPosts : personalPosts;

  return (
    <div className="xl:w-[50%] lg::w-[50%] md::w-full sm::w-full xs::w-full xss:w-full h-full overflow-y-scroll xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10 xs:mt-10 xxs:mt-10">
      <PostMaker user={user}></PostMaker>
      {/* ----------------- */}
      {posts?.map((post: any) => (
        <PostPaper key={post._id} post={post} home={home}></PostPaper>
      ))}
    </div>
  );
};

export default FeedContainer;
