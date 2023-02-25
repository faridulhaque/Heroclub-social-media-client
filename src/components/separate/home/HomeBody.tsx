import React from "react";
import { useGetSpecificUserQuery } from "../../../api/queries/usersApi";
import Loading from "../../shared/Loading";
import FeedContainer from "./FeedContainer";
import HomeRight from "./HomeRight";
import ProfileCard from "./ProfileCard";

const HomeBody = () => {
  const userInfo = JSON.parse(localStorage.getItem("user") || "null");

  const {
    isLoading: userLoading,
    isError: isUserError,
    error: userError,
    data: user,
  } = useGetSpecificUserQuery<any>(userInfo?._id);

  if (userLoading) {
    return <Loading></Loading>;
  }

  if (isUserError) {
    console.log(userError);
  }

  return (
    <div className="w-11/12 mx-auto mt-10 h-[90vh] xl:flex lg:flex md:block sm:block xs:block xxs:block justify-between">
      <ProfileCard
        firstName={user?.firstName}
        lastName={user?.lastName}
        picturePath={user?.picturePath}
        _id={user?._id}
      ></ProfileCard>
      <FeedContainer user={user}></FeedContainer>
      <HomeRight userId={user._id}></HomeRight>
    </div>
  );
};

export default HomeBody;
