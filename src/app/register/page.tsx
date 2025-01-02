"use client";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface registerFormData {
  email: string;
  password: string;
  contactNumber: number;
  address: string;
  bloodBankBranch: string;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<registerFormData>();
  const onSubmit: SubmitHandler<registerFormData> = (data) => console.log(data);
  return (
    <div className="pageSize flex items-center justify-center">
      <div className="w-full max-w-md border border-violet-800 shadow-lg p-8 rounded-md ">
        <p className="text-center font-extrabold text-2xl mb-4">
          Please Register!!!
        </p>
        <div>
          <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email:
              </label>
              <input
                {...register("email", { required: "Email is reauired" })}
                type="email"
                id="email"
                className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Password:
              </label>
              <input
                {...register("password", { required: "Password is reauired" })}
                type="password"
                id="password"
                className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Contact Number:
              </label>
              <input
                {...register("contactNumber", {
                  required: "Contact number is reauired",
                })}
                type="number"
                id="contact number"
                className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
                placeholder="Enter your contact number"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Address:
              </label>
              <input
                {...register("address", { required: "Address is reauired" })}
                type="address"
                id="address"
                className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Your nearest blood bank branch:
              </label>
              <input
                {...register("bloodBankBranch", {
                  required: "Blood bank is reauired",
                })}
                type="text"
                id="branch"
                className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
                placeholder="Enter your nearest blood bank branch"
              />
            </div>
            <button
              type="submit"
              className="w-full border-2 border-violet-800 text-black py-2 rounded-md hover:bg-violet-700 hover:text-white transition ease-in-out duration-200"
            >
              Register
            </button>
          </form>
          <p className="align-baseline font-medium mt-4 text-sm">
            Have an account? Please{" "}
            <Link
              href="/login"
              className="text-violet-800 hover:text-violet-600"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
