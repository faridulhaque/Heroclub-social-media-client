import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  useDeletePrevImageMutation,
  useGetLoggedInUserQuery,
  useUpdateProfileMutation,
} from "../../api/queries/usersApi";
// import useCloudinary from "../../hooks/useCloudinary";
import Loading from "../shared/Loading";

const UpdateProfileForm = (): any => {
  // const {generateDeleteSignature} = useCloudinary()

  const [proPic, setProPic] = useState<any>(null);
  const { id } = useParams();

  const {
    isLoading: userLoading,
    isError: isUserError,
    error: userError,
    data: user,
  } = useGetLoggedInUserQuery<any>(id);

  const [
    updateProfile,
    {
      isLoading: updating,
      isError: isUpdateError,
      error: updateError,
      data: updatedUser,
    },
  ] = useUpdateProfileMutation<any>();

  const [deletePrevImg, others] = useDeletePrevImageMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = e.currentTarget.firstName.value;
    const lastName = e.currentTarget.lastName.value;
    const birthDate = e.currentTarget.birthDate.value;
    const currentCity = e.currentTarget.currentCity.value;
    const homeTown = e.currentTarget.homeTown.value;
    const _id = id;

    const profileInfo = {
      firstName,
      lastName,
      birthDate,
      currentCity,
      homeTown,
      _id,
    };

    if (proPic?.name) {
      // generate a  new picture path from cloudinry.
      const file = new FormData();

      file.append("file", proPic);
      file.append("upload_preset", "heroclub");

      const pictureInfo = await uploadImage(file);

      const profileInfoWithImg = {
        ...profileInfo,
        ...pictureInfo,
      };

      await updateProfile(profileInfoWithImg);

      deletePrevImg({ public_id: user.picturePublicId });
    } else {
      updateProfile(profileInfo);
    }
  };

  // upload image to cloudinary
  const uploadImage = async (file: any) => {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dfmdacf6w/image/upload",
      {
        method: "POST",
        body: file,
      }
    );
    const data = await response.json();
    // console.log(data)
    return {
      picturePath: data.secure_url,
      picturePublicId: data.public_id,
    };
  };

  // upload image to cloudinary ended

  if (userLoading) {
    return <Loading></Loading>;
  }

  if (isUserError || isUpdateError) {
    console.log(userError || updateError);
  }

  if (updatedUser?._id) {
    toast.success("Your profile has been updated", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      toastId: "success",
    });
  }

  return (
    <div className="xl:w-2/4 lg:w-2/4 md:w-full sm:w-full xs:w-full xxs:w-full mx-auto mt-10 h-[90vh]">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 mx-auto bg-white pb-10 shadow-sm h-[85vh] overflow-x-scroll"
      >
        <div className="h-[200px] w-full bg-secondary relative">
          <img
            src={
              updatedUser?.picturePath
                ? updatedUser?.picturePath
                : user?.picturePath
            }
            alt=""
            className="w-[200px] h-[200px] border-secondary-1 absolute mx-auto left-0 right-0 top-[50px]"
          />
        </div>
        <div className="mt-[100px]">
          <div className="form-control mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="input input-bordered"
              defaultValue={
                updatedUser?.firstName
                  ? updatedUser?.firstName
                  : user?.firstName
              }
            />
          </div>

          <div className="form-control mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="input input-bordered"
              defaultValue={
                updatedUser?.lastName ? updatedUser?.lastName : user?.lastName
              }
            />
          </div>

          <div className="form-control mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Profile picture</span>
            </label>
            <input
              onChange={(e: any) => setProPic(e.target.files[0])}
              type="file"
              className="file-input"
            />
          </div>

          <div className="form-control mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Birth Date</span>
            </label>
            <input
              name="birthDate"
              type="date"
              className="input input-bordered"
              defaultValue={
                updatedUser?.birthDate
                  ? updatedUser?.birthDate
                  : user?.birthDate
              }
            />
          </div>

          <div className="form-control mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              disabled
              defaultValue={user?.email}
            />
          </div>

          <div className="form-control mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Current City</span>
            </label>
            <input
              className="input input-bordered"
              name="currentCity"
              type="text"
              placeholder="Current City"
              defaultValue={
                updatedUser?.currentCity
                  ? updatedUser?.currentCity
                  : user?.currentCity
              }
            />
          </div>

          <div className="form-control mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Home Town</span>
            </label>
            <input
              className="input input-bordered"
              name="homeTown"
              type="text"
              placeholder="Home Town"
              defaultValue={
                updatedUser?.homeTown ? updatedUser?.homeTown : user?.homeTown
              }
            />
          </div>

          {updating ? (
            <Loading></Loading>
          ) : (
            <>
              <div className="mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
                <button
                  className="w-full block btn btn-secondary text-white"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </>
          )}
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateProfileForm;
