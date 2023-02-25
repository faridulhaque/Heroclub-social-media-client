import React from "react";
import { useNavigate } from "react-router-dom";
type userBasic = {
  firstName: string,
  lastName: string,
  picturePath: string
  _id: string
}

const ProfileCard = ({firstName, lastName, picturePath, _id}:userBasic) => {

  const navigate = useNavigate()
  return (
    <div className="xl:block lg:block md:hidden sm:hidden xs:hidden xxs:hidden w-[24%] h-auto bg-white shadow-sm">
      <div className="w-full h-20 bg-secondary relative">
        <div className="h-[100px] w-1/4 absolute left-0 right-0 m-auto top-7">
          <img
            src={picturePath}
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
      </div>

      <div className="mt-20">
        <p className="text-center text-2xl capitalize">{firstName} {lastName}</p>
        {/* <p className="text-center text-md">hello how are you</p> */}
      </div>
      <div className="w-10/12 mx-auto h-1 bg-secondary mt-5"></div>
      <div className="mt-5">
        <p className="text-center text-2xl">Friends</p>
        <p className="text-center text-xl">10</p>
      </div>
      <div className="w-8/12 mx-auto h-1 bg-secondary mt-5">

      </div>

      <button onClick={()=>navigate(`/profile/${_id}`)} className="mt-10 mx-auto w-2/4 text-secondary block link-hover">View Profile</button>

    </div>
  );
};

export default ProfileCard;
