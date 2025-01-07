"use client";
import { BloodAvailableData } from "@/store/bloodAvailable";
import Link from "next/link";
import React from "react";

const Details = () => {
  const handleViewReport = (bloodReport: string) => {
    window.open(bloodReport, "_blank");
  };

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-5 py-6 ">
      <div className="md:max-w-lg  mx-auto my-auto border border-violet-800 rounded-md shadow-lg px-3 py-3 flex flex-col items-center justify-center">
        {BloodAvailableData.map((blood, index) => (
          <div key={index}>
            <div className="flex flex-row gap-1 border border-violet-800 rounded-md shadow-lg my-3 px-2 py-2">
              <p className="font-light ">{blood.id}</p>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1">
                  <span className="font-semibold">Blood Type:</span>
                  <p className="font-semibold ">{blood.bloodType}</p>
                </div>
                <div className="flex flex-row gap-1">
                  <span className="font-semibold">Available Bottles:</span>
                  <p className="font-semibold ">{blood.availableBottles}</p>
                </div>
                <div className="flex flex-row gap-1">
                  <span className="font-semibold">Expire Date:</span>
                  <p className="font-semibold ">{blood.expireDate}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleViewReport(blood?.bloodReport || "")}
                  className="px-2 py-2  text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
                >
                  View Report
                </button>
                <Link
                  href="/placeorder"
                  type="button"
                  className="py-2  px-12 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
