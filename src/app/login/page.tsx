import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 flex items-center justify-center ">
      <div className="w-full max-w-md border border-violet-800 shadow-lg p-8 rounded-md ">
        <p className="text-center font-extrabold text-2xl mb-4">
          Please Login!!!
        </p>
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
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
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full border-2 border-violet-800 text-black py-2 rounded-md hover:bg-violet-700 hover:text-white transition ease-in-out duration-200"
            >
              Login
            </button>
          </form>
          <p className="align-baseline font-medium mt-4 text-sm">
            Haven't an account? Please{" "}
            <Link
              href="/register"
              className="text-violet-800 hover:text-violet-600"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
