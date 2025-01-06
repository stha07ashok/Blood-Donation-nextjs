import { notificationData } from "@/store/notification";
import React from "react";

const BloodRequestNotification = () => {
  return (
    <section className="space-y-6">
      {notificationData.map((item, index) => (
        <div
          key={index}
          className=" border border-violet-500 shadow-lg rounded-lg p-4 md:p-6 flex flex-col group"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center text-violet-800">
            {item.title}
          </h2>
          <div className=" flex flex-row justify-between ">
            <p className="font-bold text-xl text-red-600 urgent ">
              {item.requestStatus}
            </p>
            <p className="font-bold text-xl text-red-600 urgent">
              {item.requestStatus}
            </p>
            <p className="font-bold text-xl text-red-600 urgent">
              {item.requestStatus}
            </p>
          </div>
          <p className="text-center text-gray-700 text-sm md:text-base dark:text-white">
            {item.description}
          </p>
          <div className="flex flex-wrap justify-between gap-4 mt-4">
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Required Blood Type:</span>
              <br /> {item.requiredBloodType}
            </p>
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Patient Name:</span>
              <br /> {item.patientName}
            </p>
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Contact Number:</span>
              <br /> {item.contactNumber}
            </p>
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Hospital Name:</span>
              <br /> {item.hospitalName}
            </p>
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Address:</span> <br />
              {item.address}
            </p>
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Date:</span> <br />
              {item.date}
            </p>
          </div>
          <p className="text-center mt-4 text-red-600 text-sm md:text-base">
            <span className="font-bold">Note:</span>
            {item.Note}
          </p>
        </div>
      ))}
    </section>
  );
};

export default BloodRequestNotification;
