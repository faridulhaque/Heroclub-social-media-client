import React from 'react';
import { useGetSpecificUserQuery } from '../../../api/queries/usersApi';
import Loading from '../../shared/Loading';
import {IoMdRemoveCircleOutline} from "react-icons/io"
import { useParams } from 'react-router-dom';

const FriendInfo = ({id, friendAction}:any) => {
    const params = useParams()
    const userId = params.id;
    const {
        isLoading: userLoading,
        isError: isUserError,
        error: userError,
        data: friend,
      } = useGetSpecificUserQuery<any>(id);

      if(userLoading) {
        return <Loading></Loading>
      }

      if(isUserError) {
        console.log(userError)
      }


    return (
        <div
        className="w-11/12 mx-auto h-[60px] bg-white shadow-sm flex items-center justify-around mb-3"
      >
        <div className="w-3/4 flex items-center">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={friend?.picturePath}
            alt=""
          />
          <span className="text-md ml-2">
            {friend?.firstName} {friend?.lastName}
          </span>
        </div>

        <div>
          <IoMdRemoveCircleOutline onClick={()=>friendAction({friendId:id, id:userId})} className="text-lg cursor-pointer text-red-500"></IoMdRemoveCircleOutline>
        </div>
      </div>
    );
};

export default FriendInfo;