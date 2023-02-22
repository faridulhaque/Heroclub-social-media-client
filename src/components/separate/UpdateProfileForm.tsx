import React, { useState } from "react";

const UpdateProfileForm = () => {
  const [proPic, setProPic] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const firstName = e.currentTarget.firstName.value;
    const lastName = e.currentTarget.lastName.value;
    const birthDate = e.currentTarget.birthDate.value;
    const currentCity = e.currentTarget.currentCity.value;
    const homeTown = e.currentTarget.homeTown.value;

    const profileInfo = {
      firstName,
      lastName,
      birthDate,
      currentCity,
      homeTown,
    };

    if (proPic?.name) {
      const file = new FormData();

      file.append("file", proPic);
      file.append("upload_preset", "heroclub");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dfmdacf6w/image/upload",
        {
          method: "POST",
          body: file,
        }
      );
      const data = await response.json();

      const profileInfoWithImg = {
        ...profileInfo,
        picturePath: data.secure_url,
        picturePublicId: data.public_id,
      };

      console.log(profileInfoWithImg);
    } else {
      console.log(profileInfo);
    }
  };

  return (
    <div className="xl:w-2/4 lg:w-2/4 md:w-full sm:w-full xs:w-full xxs:w-full mx-auto mt-10 h-[90vh]">
      <form
        onSubmit={handleSubmit}
        className="w-11/12 mx-auto bg-white pb-10 shadow-sm h-full overflow-x-scroll"
      >
        <div className="h-[200px] w-full bg-secondary relative">
          <img
            src="https://i.ibb.co/6YK1cXs/avatar.jpg"
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
            />
          </div>

          <div className="form-control mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Profile picture</span>
            </label>
            <input
              onChange={(e: any) => setProPic(e.target.files[0])}
              type="file"
              placeholder="Upload image"
              className="input input-bordered"
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
            />
          </div>

          <div className="form-control mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" className="input input-bordered" disabled />
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
            />
          </div>

          <div className="mt-5 xl:w-3/4 lg:w-3/4 md:w-11/12 sm:w-11/12 xs:w-11/12 xxs:w-11/12 mx-auto">
            <button
              className="w-full block btn btn-secondary text-white"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
