import React from "react";
import { AiOutlineBell, AiOutlineHome, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { RiShutDownLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Navbar = ():any => {
  const navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/entry");
  };

 

  return (
    <>
      <div className="navbar bg-secondary">
        <div className="navbar-start">
          {user?._id && (
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to={`/profile/${user?._id}`}>Profile</Link>
                </li>
                <li>
                  <span>Notifications</span>
                </li>
                <li>
                  <span>Message</span>
                </li>
              </ul>
            </div>
          )}
          <Link to="/" className="normal-case text-3xl text-white">
            HeroClub
          </Link>
        </div>
        {user?._id && (
          <>
            <div className="navbar-center hidden lg:flex text-white">
              <ul className="menu menu-horizontal px-1">
              <li>
                  <Link to="/"><AiOutlineHome className="text-2xl"></AiOutlineHome></Link>
                </li>

                <li>
                  <Link to={`/profile/${user?._id}`}><AiOutlineUser className="text-2xl"></AiOutlineUser></Link>
                </li>
                <li>
                  <span><AiOutlineBell className="text-2xl"></AiOutlineBell></span>
                </li>
                <li>
                  <span><AiOutlineMessage className="text-2xl"></AiOutlineMessage></span>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <span
                onClick={handleLogout}
                className="cursor-pointer text-white"
              >
              <RiShutDownLine className="text-2xl mr-5"/>
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
