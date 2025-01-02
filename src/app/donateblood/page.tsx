"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Link from "next/link";

const selectBloodBankBranch = [
  { value: " Kathmandu", label: "Nepal Blood Bank | Kathmandu" },
  { value: "Pokhara", label: "Nepal Blood Bank | Pokhara" },
  { value: "Butwal", label: "Nepal Blood Bank | Butwal" },
  { value: "Chitwan", label: "Nepal Blood Bank | Chitwan" },
  { value: "Dharan", label: "Nepal Blood Bank | Dharan" },
  { value: "Biratnagar", label: "Nepal Blood Bank | Biratnagar" },
  { value: "Nepalgunj", label: "Nepal Blood Bank | Nepalgunj" },
  { value: " Dhangadi", label: "Nepal Blood Bank | Dhangadi" },
  { value: "Surkhet", label: "Nepal Blood Bank | Surkhet" },
  { value: "Janakpur", label: "Nepal Blood Bank | Janakpur" },
  { value: " Dang", label: "Nepal Blood Bank | Dang" },
  { value: "Hetauda", label: "Nepal Blood Bank | Hetauda" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

interface RegisterFormData {
  email: string;
  citizenshipNumber: number;
  contactNumber: number;
  address: string;
  bloodBankBranch: { value: string; label: string };
  fullName: string;
  gender: boolean;
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
          Please Donate!!!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block font-medium">
              Full Name:
            </label>
            <input
              {...register("email", { required: "Full name is required" })}
              type="text"
              id="fullName"
              className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
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
          {/* identity  Field */}
          <div>
            <label htmlFor="password" className="block font-medium">
              Citizenship Number:
            </label>
            <input
              {...register("citizenshipNumber", {
                required: "citizenship number is required",
              })}
              type="number"
              id="password"
              className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              placeholder="Enter your citizenship number"
            />
            {errors.citizenshipNumber && (
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
              Donate to nearest blood bank branch:
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
                    className="react-select-container "
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
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: "rgb(128, 0, 255)", // Custom border color
                      }),
                    }}
                  />
                )}
              />
            )}
            {errors.bloodBankBranch && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
          {/* Gender Radio Buttons */}
          <div>
            <label className="block font-medium">Gender:</label>
            <div className="flex items-center space-x-4">
              <div>
                <input
                  type="radio"
                  id="male"
                  value="male"
                  {...register("gender", { required: "Gender is required" })}
                  className="mr-2"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  value="female"
                  {...register("gender", { required: "Gender is required" })}
                  className="mr-2"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            {errors.gender && (
              <span className="text-red-600">{errors.gender.message}</span>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border-2 border-violet-800 text-black py-2 rounded-md hover:bg-violet-700 hover:text-white transition ease-in-out duration-200"
          >
            Donate
          </button>
        </form>
        <p className="py-2 font-semibold text-base text-justify ">
          Note: You can get the blood test report after donation for free!!!{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
