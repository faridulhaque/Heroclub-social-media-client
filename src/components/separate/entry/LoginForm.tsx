import React from "react";
import { Link } from "react-router-dom";
import RegisterFormModal from "./RegisterFormModal";

const LoginForm = () => {
  return (
    <div className="xl:w-2/4 lg:w-2/4 md:w-full sm:w-full xs:w-full xxs:w-full">
      <div className="card flex shadow-2xl xl:w-3/4 lg:w-3/4 md:w-full sm:w-full xs:w-full xss:w-full h-[500px] mx-auto">
        <div className="card-body w-full mt-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link to="/" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secondary text-white">Login</button>
          </div>
          <label className="label">
              <span className="label-text-alt ">
                Don't have an account? <label htmlFor="my-modal-5" className="link link-hover">Create one.</label>
              </span>
            </label>
        </div>
      </div>
      <RegisterFormModal></RegisterFormModal>
    </div>
  );
};

export default LoginForm;
