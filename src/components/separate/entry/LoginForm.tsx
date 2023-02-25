import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useLoginMutation } from "../../../api/queries/authAPI";
import Loading from "../../shared/Loading";
import RegisterFormModal from "./RegisterFormModal";

const LoginForm = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [loginError, setLoginError] = React.useState("");

  const navigate = useNavigate()

  const [login, { isLoading, isError, error, data: userInfo }] =
    useLoginMutation<any>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    if (!email || !password) {
      return setLoginError("Email and password are required");
    }

    setLoginError("");
    const loginInfo = {
      email,
      password,
    };
    login(loginInfo);
  };

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user") || "null");
    let token = JSON.parse(localStorage.getItem("token") || "null")
    if(user?._id && token){
      navigate("/")
    }
  }, [userInfo, navigate]);

  if (isError) {
    toast.error(error?.data?.message, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      toastId: "error",
    });
  }

  if (userInfo?.token) {
    localStorage.setItem("token", JSON.stringify(userInfo.token));
    localStorage.setItem("user", JSON.stringify(userInfo.loggedInUser));
  }

  return (
    <div className="xl:w-2/4 lg:w-2/4 md:w-full sm:w-full xs:w-full xxs:w-full">
      <div className="card flex shadow-2xl xl:w-3/4 lg:w-3/4 md:w-full sm:w-full xs:w-full xss:w-full h-[500px] mx-auto">
        <form onSubmit={handleSubmit} className="card-body w-full mt-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link to="/" className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <div className="form-control mt-6">
              <button className="btn btn-secondary text-white">Login</button>
            </div>
          )}
          {loginError && <small className="text-red-400">{loginError}</small>}
          <label className="label">
            <span className="label-text-alt ">
              Don't have an account?{" "}
              <label
                onClick={() => setOpenModal(true)}
                htmlFor="my-modal-5"
                className="link link-hover"
              >
                Create one.
              </label>
            </span>
          </label>
        </form>
      </div>
      {openModal && (
        <RegisterFormModal
          openModal={openModal}
          setOpenModal={setOpenModal}
        ></RegisterFormModal>
      )}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LoginForm;
