import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSpecificUserQuery } from "../../../api/queries/usersApi";
import Loading from "../../shared/Loading";

const ProfileInfo = ({user}:any) => {
  const { id } = useParams();
  const navigate = useNavigate();


  const {firstName, lastName, email, currentCity, homeTown, picturePath} = user;

  return (
    <div className=" xl:w-[24%] lg:w-[24%] md:w-full sm:w-full xs:w-full xss:w-full xl:h-auto lg:h-auto md:h-auto sm:h-auto xs:h-auto xss:h-auto bg-white shadow-xl xl:w-mb-none pb-10">
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
        {/* <p className="text-center text-md">Describe yourself here</p> */}
      </div>
      <div className="w-10/12 mx-auto h-1 bg-secondary mt-5"></div>
      <div className="mt-5">
        <p className="text-center text-2xl">Friends</p>
        <p className="text-center text-xl">10</p>
      </div>
      <div className="w-8/12 mx-auto h-1 bg-secondary mt-5"></div>

      <div className="mt-5">
        <p className="text-center text-2xl">Email</p>
        <p className="text-center text-xl">{email}</p>
      </div>
      <div className="w-8/12 mx-auto h-1 bg-secondary mt-3"></div>

      <div className="mt-5">
        <p className="text-center text-2xl">Current city</p>
        <p className="text-center text-xl capitalize">{currentCity}</p>
      </div>
      <div className="w-8/12 mx-auto h-1 bg-secondary mt-3"></div>


      <div className="mt-5">
        <p className="text-center text-2xl">Hometown</p>
        <p className="text-center text-xl capitalize">{homeTown}</p>
      </div>
      <div className="w-8/12 mx-auto h-1 bg-secondary mt-3"></div>



      <div>


      </div>

      <button
        onClick={() => navigate(`/update_profile/${id}`)}
        className="mt-10 mx-auto w-2/4 text-secondary block link-hover"
      >
        Update Profile
      </button>
    </div>
  );
};

export default ProfileInfo;
