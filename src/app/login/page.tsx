"use client";
import { loginFormDataProps } from "@/types/login";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormDataProps>();

  const onSubmit: SubmitHandler<loginFormDataProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 flex items-center justify-center">
      <div className="w-full max-w-md border border-violet-800 shadow-lg p-8 rounded-md">
        <p className="text-center font-extrabold text-2xl mb-4">
          Please Login!!!
        </p>
        <div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-600 ">This field is required!!!</span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block font-medium">
                Password:
              </label>

              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-red-600 ">This field is required!!!</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full border-2 dark:text-white border-violet-800 text-black py-2 rounded-md hover:bg-violet-700 hover:text-white transition ease-in-out duration-200"
            >
              Login
            </button>
          </form>
          <p className="align-baseline font-medium mt-4 text-sm">
            Haven&apos;t an account? Please{" "}
            <Link
              href="/register"
              className="text-violet-800 hover:text-violet-600 dark:text-white"
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
