"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { selectBloodBankBranch } from "@/store/selectBloodBankBranch";
import { RegisterFormDataProps } from "@/types/donateBlood";
import { useTheme } from "next-themes";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormDataProps>();

  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true); // Ensure React Select is rendered only on the client
  }, []);

  const onSubmit: SubmitHandler<RegisterFormDataProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="pageSize flex items-center justify-center">
      <div className="w-full max-w-md border border-violet-800 shadow-lg p-8 rounded-md ">
        <p className="text-center font-extrabold text-2xl mb-4">
          Please Donate!!!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name Field */}
          <div>
            <label htmlFor="fullName" className="block font-medium">
              Full Name:
            </label>
            <input
              {...register("fullName", { required: "Full name is required" })}
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

          {/* Citizenship Number Field */}
          <div>
            <label htmlFor="citizenshipNumber" className="block font-medium">
              Citizenship Number:
            </label>
            <input
              {...register("citizenshipNumber", {
                required: "Citizenship number is required",
              })}
              type="number"
              id="citizenshipNumber"
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
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(selectedOption) =>
                      field.onChange(selectedOption)
                    }
                    value={
                      field.value
                        ? selectBloodBankBranch.find(
                            (option) => option.value === field.value?.value
                          )
                        : null
                    }
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: "#6B21A8",
                        backgroundColor: theme === "dark" ? "black" : "white",
                        color: theme === "dark" ? "white" : "black",
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: theme === "dark" ? "white" : "black",
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: theme === "dark" ? "black" : "white",
                      }),
                      option: (base, state) => ({
                        ...base,
                        color:
                          theme === "dark"
                            ? state.isSelected || state.isFocused
                              ? "white"
                              : "gray"
                            : state.isSelected || state.isFocused
                            ? "black"
                            : "gray",
                        backgroundColor:
                          theme === "dark"
                            ? state.isSelected
                              ? "rgba(128, 0, 255, 0.6)"
                              : state.isFocused
                              ? "rgba(128, 0, 255, 0.2)"
                              : "transparent"
                            : state.isSelected
                            ? "rgba(128, 0, 255, 0.2)"
                            : state.isFocused
                            ? "rgba(128, 0, 255, 0.1)"
                            : "transparent",
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

          {/* Date and Time Fields */}
          <div className="flex flex-col gap-6 w-full sm:flex-row">
            <div>
              <label htmlFor="date" className="block font-medium">
                Date:
              </label>
              <input
                type="date"
                id="date"
                {...register("date", { required: "Date is required" })}
                className="w-full sm:w-44 border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-medium">
                Time:
              </label>
              <input
                type="time"
                id="time"
                {...register("time", { required: "Time is required" })}
                className="w-full sm:w-44 border border-violet-800 rounded-md p-2 text-lg shadow appearance-none leading-tight focus:outline-none focus:shadow"
              />
            </div>
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
            className="w-full border-2 dark:text-white border-violet-800 text-black py-2 rounded-md hover:bg-violet-700 hover:text-white transition ease-in-out duration-200 hoverEffect"
          >
            Donate
          </button>
        </form>
        <p className="py-2 font-semibold text-base text-justify">
          Note: You can get the blood test report after donation for free!!!
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
