"use client";
import { BloodAvailableData } from "@/store/bloodAvailable";
import Link from "next/link";
import React, { useState } from "react";

const AvailableBlood = () => {
  const [visibleDetails, setVisibleDetails] = useState<number | null>(null);

  const handleViewReport = (bloodReport: string) => {
    window.open(bloodReport, "_blank");
  };

  const toggleDetails = (index: number) => {
    setVisibleDetails((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {BloodAvailableData.map((Blood, index) => (
        <div
          key={index}
          className="mb-4 px-5 py-6 border border-violet-800 rounded-md"
        >
          <div className="flex justify-between font-light items-center text-xl md:flex md:justify-between">
            <div className="flex-auto text-lg">{Blood?.id}</div>
            <div className="flex-auto text-lg">{Blood?.bloodType}</div>
            <div className="flex-1 text-lg hidden md:flex">
              {Blood?.availableBottles}
            </div>
            <div className="flex-1 text-lg hidden md:flex pr-8">
              {Blood?.expireDate}
            </div>

            <div className="flex-1 flex-col gap-2 hidden md:flex">
              <button
                type="button"
                onClick={() => handleViewReport(Blood?.bloodReport || "")}
                className="px-2 py-2 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
              >
                View Report
              </button>
              <Link
                href="/placeorder"
                type="button"
                className="py-2 px-6 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
              >
                Place Order
              </Link>
            </div>

            <div className="flex-1 md:hidden">
              <button
                onClick={() => toggleDetails(index)}
                type="button"
                className="px-4 py-2 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
              >
                {visibleDetails === index ? "Hide Details" : "Details"}
              </button>
            </div>
          </div>

          {visibleDetails === index && (
            <div className="mt-4 text-sm md:hidden flex-col gap-2">
              <div className="text-lg font-semibold">
                Available Bottles: {Blood?.availableBottles}
              </div>
              <div className="text-lg font-semibold">
                Expire Date: {Blood?.expireDate}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleViewReport(Blood?.bloodReport || "")}
                  className="mt-2 px-2 py-2 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
                >
                  View Report
                </button>
                <Link
                  href="/placeorder"
                  type="button"
                  className="mt-2 py-2 px-6 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
                >
                  Place Order
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default AvailableBlood;
