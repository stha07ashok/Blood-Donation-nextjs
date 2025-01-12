"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { placeOrderDataProps } from "@/types/placeOrder";
import { bloodType } from "@/store/bloodType";
import { useTheme } from "next-themes";

const deliveryCharge = 50;

const PlaceOrder = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<placeOrderDataProps>();

  const [isClient, setIsClient] = useState(false);
  const [selectedBloodType, setSelectedBloodType] = useState<any | null>(null);
  const { theme } = useTheme();

  const deliveryOption = watch("delivery");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit: SubmitHandler<placeOrderDataProps> = (data) => {
    const bloodPrice = selectedBloodType?.price || 0;
    const totalPrice =
      bloodPrice + (data.delivery === "yes" ? deliveryCharge : 0);
    console.log({ ...data, totalPrice });
  };

  const totalPrice =
    (selectedBloodType?.price || 0) +
    (deliveryOption === "yes" ? deliveryCharge : 0);

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-5 py-6 flex items-center justify-center">
      <div className="border border-violet-800 shadow-md w-full max-w-md rounded-md p-8">
        <p className="text-2xl font-bold mb-4">Place Order!!</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email:
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
          <div>
            <label htmlFor="address" className="block font-medium">
              Address:
            </label>
            <input
              {...register("address", { required: true })}
              type="text"
              id="address"
              className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              placeholder="Enter your address"
            />
            {errors.address && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
          <div>
            <label htmlFor="bloodtype" className="block font-medium">
              Blood Type:
            </label>
            {isClient && (
              <Controller
                name="bloodtype"
                control={control}
                rules={{ required: "Blood type is required" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={bloodType}
                    placeholder="Choose a Blood Type"
                    className="react-select-container"
                    classNamePrefix="react-select"
                    onChange={(selectedOption: any) => {
                      field.onChange(selectedOption.value); // Update form value
                      setSelectedBloodType(selectedOption); // Update state with selected option
                    }}
                    value={
                      field.value
                        ? bloodType.find(
                            (option) => option.value === field.value
                          )
                        : null
                    }
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: "rgb(128, 0, 255)",
                        backgroundColor: theme === "dark" ? "black" : "white", // Set background based on theme
                        color: theme === "dark" ? "white" : "black", // Set text color based on theme
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: theme === "dark" ? "white" : "black", // Single value text color
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: theme === "dark" ? "black" : "white", // Menu background
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
                            : "gray", // Text color based on theme and state
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
                            : "transparent", // Background color based on theme and state
                      }),
                    }}
                  />
                )}
              />
            )}
            {errors.bloodtype && (
              <span className="text-red-600">This field is required!!!</span>
            )}
            {selectedBloodType && (
              <p className="mt-2 text-lg">
                Blood Price:{" "}
                <span className="font-bold">Rs.{selectedBloodType.price}</span>
              </p>
            )}
          </div>
          <div>
            <label htmlFor="contactNumber" className="block font-medium">
              Contact Number:
            </label>
            <input
              {...register("contactNumber", { required: true })}
              type="number"
              id="contactNumber"
              className="w-full border border-violet-800 rounded-md p-2 shadow appearance-none leading-tight focus:outline-none focus:shadow"
              placeholder="Enter contact number"
            />
            {errors.contactNumber && (
              <span className="text-red-600">This field is required!!!</span>
            )}
          </div>
          <div>
            <label className="block font-medium">Do you want delivery:</label>
            <div className="flex gap-3">
              <div>
                <input
                  {...register("delivery", { required: true })}
                  type="radio"
                  id="yes"
                  value="yes"
                  className="mr-2"
                />
                <label htmlFor="yes" className="font-medium">
                  Yes
                </label>
              </div>
              <div>
                <input
                  {...register("delivery", { required: true })}
                  type="radio"
                  id="no"
                  value="no"
                  className="mr-2"
                />
                <label htmlFor="no" className="font-medium">
                  No
                </label>
              </div>
            </div>
            {errors.delivery && (
              <span className="text-red-600">This field is required!!!</span>
            )}
            {deliveryOption === "yes" && (
              <p className="mt-2 text-lg">
                Delivery Charge:{" "}
                <span className="font-bold">Rs.{deliveryCharge}</span>
              </p>
            )}
          </div>
          <div className="mt-4">
            <p className="text-lg">
              Total Price: <span className="font-bold">Rs.{totalPrice}</span>
            </p>
          </div>
          <button
            type="submit"
            className="border-2 border-violet-800 rounded-md hover:bg-violet-800 hover:text-white px-2 py-2 w-full"
          >
            Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
