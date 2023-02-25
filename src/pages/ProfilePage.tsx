import React from "react";
import ProfileBody from "../components/separate/profile/ProfileBody";
import BelowSpace from "../components/shared/BelowSpace";
import Navbar from "../components/shared/Navbar";

const ProfilePage = () => {
  
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <ProfileBody></ProfileBody>
      {/* <BelowSpace></BelowSpace> */}

    </div>
  );
};

export default ProfilePage;
