import React from "react";
import ProfileBody from "../components/separate/profile/ProfileBody";
import Navbar from "../components/shared/Navbar";

const ProfilePage = () => {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <ProfileBody></ProfileBody>
    </div>
  );
};

export default ProfilePage;
