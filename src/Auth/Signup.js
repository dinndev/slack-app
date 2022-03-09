import React from "react";
import { useForm } from "react-hook-form";
import { svg } from "../Svg";

export default function Signup({
  setToggleSignup,
  isSignupOpen,
  setToggleLogin,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleToggleSignup = (_) => {};
  const getUserInfo = (_) => {
    // setToggleSignUp(!isSignupOpen);
    setToggleSignup(!isSignupOpen);
    setToggleLogin(true);
  };
  return (
    <>
      <div className="w-3/4 h-1/6 flex items-center">
        <h1 className="text-4xl ">Signup</h1>
      </div>
      <form
        className=" flex flex-col justify-start w-3/4 h-5/6"
        onSubmit={handleSubmit(getUserInfo)}
      >
        <div className="flex justify-between mt-10">
          <div className="w-3/6 flex flex-col justify-between items-start ">
            <label htmlFor="email" className="text-xs text-gray-400">
              Email
            </label>
            <input
              className="mt-4 bg-gray-100 border outline-none rounded-md p-3 w-full"
              type="email"
              name="email"
              {...register("email", { required: "true" })}
            />
          </div>
          <div className=" w-3/6 ml-8 flex flex-col justify-between items-start">
            <label htmlFor="userName" className="text-xs text-gray-400">
              User name
            </label>
            <input
              className="mt-4 bg-gray-100 border rounded-md outline-none p-3 w-full"
              type="text"
              name="userName"
              {...register("userName", { required: "true" })}
            />
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="w-3/6 flex flex-col justify-between items-start ">
            <label htmlFor="email" className="text-xs text-gray-400">
              Password
            </label>
            <input
              className="mt-4 bg-gray-100 border outline-none rounded-md p-3 w-full"
              type="password"
              name="password"
              autoComplete="true"
              {...register("password", { required: "true" })}
            />
          </div>
          <div className=" w-3/6 ml-8 flex justify-center items-center">
            <button type="submit">{svg.leftArrow}</button>
          </div>
        </div>
        <p className="mt-14 text-xs text-gray-300">
          {" "}
          Don't have an account?{" "}
          <span className="font-bold  text-xs text-gray-500">Login</span>
        </p>
      </form>
    </>
  );
}