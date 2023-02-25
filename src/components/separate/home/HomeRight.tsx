import React from "react";
import {
  useAddOrRemoveFriendMutation,
  useGetAllUserQuery,
} from "../../../api/queries/usersApi";
import Loading from "../../shared/Loading";
import { AiOutlineUserAdd } from "react-icons/ai";

const HomeRight = ({ userId }: any) => {
  const {
    isLoading: sLoading,
    isError: isSError,
    error: sError,
    data:allUsers,
  } = useGetAllUserQuery<any>(null);

  const [
    actionFriend,
    {
      isLoading: afLoading,
      isError: isFaError,
      error: faError,
      data: faResult,
    },
  ] = useAddOrRemoveFriendMutation<any>();
  if (sLoading || afLoading ) {
    return <Loading></Loading>;
  }

  if (isSError || isFaError) {
    console.log("suggestionError", sError || "friendError", faError);
  }

  let suggestion = allUsers?.filter((d: any) => d._id !== userId);


  

  // console.log(otherUsers)
  // console.log(suggestion)

  return (
    <div className="xl:block lg:block md:hidden sm:hidden xs:hidden xxs:hidden w-[24%] h-full overflow-x-scroll">
      <p className="w-11/12 mx-auto mb-5">Suggestion for you</p>
      {suggestion.map((s: any) => (
        <div
          key={s._id}
          className="w-11/12 mx-auto h-[60px] bg-white shadow-sm flex items-center justify-around mb-3"
        >
          <div className="w-3/4 flex items-center">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={s?.picturePath}
              alt=""
            />
            <span className="text-md ml-2">
              {s?.firstName} {s?.lastName}
            </span>
          </div>

          <div>
            <AiOutlineUserAdd 
            onClick={()=>actionFriend({friendId:s?._id, id:userId})}
            className="text-lg text-secondary cursor-pointer"></AiOutlineUserAdd>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeRight;
