import React from "react";
import {
  useAddOrRemoveFriendMutation,
  useFriendListQuery,
} from "../../../api/queries/usersApi";
import Loading from "../../shared/Loading";
import FriendInfo from "./FriendInfo";

const FriendsList = ({ id }: any) => {
  const {
    isLoading,
    isError,
    error,
    data: friendsData,
  } = useFriendListQuery<any>(id);

  const [friendAction, { isLoading: removing }] =
    useAddOrRemoveFriendMutation<any>();

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    console.log(error.message);
  }

  return (
    <div className="xl:block lg:block md:hidden sm:hidden xs:hidden xxs:hidden w-[24%] h-full overflow-x-scroll">
      <p className="w-11/12 mx-auto mb-5 text-xl">Friends</p>

      {friendsData?.length === 0 && (
        <p className="w-11/12 mx-auto mb-5 text-lg text-center">
          You have no friends to show
        </p>
      )}
      {removing ? (
        <Loading></Loading>
      ) : (
        friendsData.map((id: any) => (
          <FriendInfo key={id} id={id} friendAction={friendAction}></FriendInfo>
        ))
      )}
    </div>
  );
};

export default FriendsList;
