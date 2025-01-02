"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

const selectBloodBankBranch = [
  {
    value: "Nepal Blood Bank | Kathmandu",
    label: "Nepal Blood Bank | Kathmandu",
  },
  { value: "Nepal Blood Bank | Pokhara", label: "Nepal Blood Bank | Pokhara" },
  { value: "Nepal Blood Bank | Butwal", label: "Nepal Blood Bank | Butwal" },
  { value: "Nepal Blood Bank | Chitwan", label: "Nepal Blood Bank | Chitwan" },
  { value: "Nepal Blood Bank | Dharan", label: "Nepal Blood Bank | Dharan" },
  {
    value: "Nepal Blood Bank | Biratnagar",
    label: "Nepal Blood Bank | Biratnagar",
  },
  {
    value: "Nepal Blood Bank | Nepalgunj",
    label: "Nepal Blood Bank | Nepalgunj",
  },
  {
    value: "Nepal Blood Bank | Dhangadi",
    label: "Nepal Blood Bank | Dhangadi",
  },
  { value: "Nepal Blood Bank | Surkhet", label: "Nepal Blood Bank | Surkhet" },
  {
    value: "Nepal Blood Bank | Janakpur",
    label: "Nepal Blood Bank | Janakpur",
  },
  { value: "Nepal Blood Bank | Dang", label: "Nepal Blood Bank | Dang" },
  { value: "Nepal Blood Bank | Hetauda", label: "Nepal Blood Bank | Hetauda" },
];

interface RegisterFormData {
  email: string;
  password: string;
  contactNumber: number;
  address: string;
  bloodBankBranch: { value: string; label: string };
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure React Select is rendered only on the client
  }, []);

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="pageSize flex items-center justify-center">
      <div className="w-full max-w-md border border-violet-800 shadow-lg p-8 rounded-md ">
        <p className="text-center font-extrabold text-2xl mb-4">
          Please Register!!!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block font-medium">
              Email:
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block font-medium">
              Password:
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              id="password"
              className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
          {/* Contact Number Field */}
          <div>
            <label htmlFor="contactNumber" className="block font-medium">
              Contact Number:
            </label>
            <input
              {...register("contactNumber", {
                required: "Contact number is required",
              })}
              type="number"
              id="contactNumber"
              className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              placeholder="Enter your contact number"
            />
            {errors.contactNumber && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
          {/* Address Field */}
          <div>
            <label htmlFor="address" className="block font-medium">
              Address:
            </label>
            <input
              {...register("address", { required: "Address is required" })}
              type="text"
              id="address"
              className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              placeholder="Enter your address"
            />
            {errors.address && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
          {/* Blood Bank Branch Field */}
          <div>
            <label htmlFor="bloodBankBranch" className="block font-medium">
              Your nearest blood bank branch:
            </label>
            {isClient && (
              <Controller
                name="bloodBankBranch"
                control={control}
                rules={{ required: "Blood bank branch is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectBloodBankBranch}
                    placeholder="Choose a Blood Bank Branch"
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(selectedOption) => {
                      field.onChange(selectedOption); // Pass the entire selected option object
                    }}
                    value={
                      field.value
                        ? selectBloodBankBranch.find(
                            (option) => option.value === field.value?.value
                          )
                        : null
                    } // Ensure the selected value is passed back to the Select component
                  />
                )}
              />
            )}
            {errors.bloodBankBranch && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border-2 border-violet-800 text-black py-2 rounded-md hover:bg-violet-700 hover:text-white transition ease-in-out duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
