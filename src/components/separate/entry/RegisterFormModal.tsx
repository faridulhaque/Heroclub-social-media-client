import React, { useState } from "react";
import { useRegisterMutation } from "../../../api/queries/authAPI";
import Loading from "../../shared/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RegisterModalTypes } from "../../../types/registerFormTypes";

const RegisterFormModal = ({
  openModal,
  setOpenModal,
}: RegisterModalTypes): any => {
  // const data = useRegisterMutation()
  const [register, { isLoading, isError, error, data }] =
    useRegisterMutation<any>();

  const [inputError, setInputError] = useState<String>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const firstName = e.currentTarget.firstName.value;
    const lastName = e.currentTarget.lastName.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return setInputError("Input fields should not be empty");
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    setInputError("");

    await register(user);
    if (data._id) {
      e.currentTarget.clear();
    }
  };

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

  if (data?._id) {
    toast.success(
      "User has been successfully created!",
      {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        toastId: "success",
      }
    );

    setTimeout(()=>{
      setOpenModal(false)
    },4000)
  }

  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <form onSubmit={handleSubmit} className="modal-box w-10/12 max-w-5xl">
          <h3 className="font-bold text-2xl text-center">
            Create an account at{" "}
            <span className="text-3xl text-secondary">HeroClub</span>
          </h3>

          <div className="w-full grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-y-4 gap-x-5">
            <div className="form-control">
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
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="text"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
          </div>
          <div>
            {inputError && (
              <p className="text-lg text-red-400 text-right mt-5">
                {inputError}
              </p>
            )}
          </div>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <div className="modal-action">
              <label
                htmlFor="my-modal-5"
                className="btn bg-red-400 hover:bg-red-400 border-none text-white"
              >
                Close
              </label>
              <button
                type="submit"
                // htmlFor="my-modal-5"
                className="btn btn-secondary text-white"
              >
                Create account
              </button>
            </div>
          )}
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default RegisterFormModal;
