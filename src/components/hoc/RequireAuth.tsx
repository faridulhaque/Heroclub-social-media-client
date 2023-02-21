import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const RequireAuth = ({ children }: any): any => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      return navigate("/entry");
    }
  }, [user]);

  return children;
};

export default RequireAuth;