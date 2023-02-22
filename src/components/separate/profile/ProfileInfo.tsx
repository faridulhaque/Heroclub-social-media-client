import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProfileInfo = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  return (
    <div className=" xl:w-[24%] lg:w-[24%] md:w-full sm:w-full xs:w-full xss:w-full xl:h-2/4 lg:h-2/4 md:h-auto sm:h-auto xs:h-auto xss:h-auto bg-white shadow-xl xl:w-mb-none pb-10">
      <div className="w-full h-20 bg-secondary relative">
        <div className="h-[100px] w-1/4 absolute left-0 right-0 m-auto top-7">
          <img
            src="https://i.ibb.co/6YK1cXs/avatar.jpg"
            alt=""
            className="w-full h-full rounded-full"
          />
        </div>
      </div>

      <div className="mt-20">
        <p className="text-center text-2xl">Full Name</p>
        <p className="text-center text-md">Describe yourself here</p>
      </div>
      <div className="w-10/12 mx-auto h-1 bg-secondary mt-5"></div>
      <div className="mt-5">
        <p className="text-center text-2xl">Friends</p>
        <p className="text-center text-xl">10</p>
      </div>
      <div className="w-8/12 mx-auto h-1 bg-secondary mt-5"></div>

      <button 
      onClick={()=>navigate(`/update_profile/${id}`)}
      className="mt-10 mx-auto w-2/4 text-secondary block link-hover">
        Update Profile
      </button>
    </div>
  );
};

export default ProfileInfo;
