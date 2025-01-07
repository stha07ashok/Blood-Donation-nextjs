import { donationCampData } from "@/store/notification";
import React from "react";

const BloodCampNotificaton = () => {
  return (
    <section className="space-y-6 mt-8">
      {donationCampData.map((item, index) => (
        <div
          key={index}
          className=" border border-violet-500 shadow-lg rounded-lg p-4 md:p-6 flex flex-col group"
        >
          <h2 className="text-xl md:text-2xl font-bold text-center text-violet-800 dark:text-white">
            {item.title}
          </h2>
          <p className="text-center text-gray-700 text-sm md:text-base dark:text-white">
            {item.description}
          </p>
          <div className="flex flex-wrap justify-between gap-4 mt-4">
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Address:</span> <br />
              {item.address}
            </p>
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Date:</span> <br />
              {item.date}
            </p>
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Day:</span>
              <br /> {item.day}
            </p>
            <p className="text-sm md:text-base flex-1">
              <span className="font-semibold">Time:</span> <br />
              {item.time}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BloodCampNotificaton;
