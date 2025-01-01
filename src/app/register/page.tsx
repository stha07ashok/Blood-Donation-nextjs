import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="pageSize flex items-center justify-center">
      <div className="w-full max-w-md border border-violet-800 shadow-lg p-8 rounded-md ">
        <p className="text-center font-extrabold text-2xl mb-4">
          Please Register!!!
        </p>
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Contact Number:
              </label>
              <input
                type="number"
                id="contact number"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your contact number"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Address:
              </label>
              <input
                type="address"
                id="address"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Your nearest blood bank branch:
              </label>
              <input
                type="text"
                id="branch"
                className="w-full border border-gray-300 rounded-md p-2"
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
