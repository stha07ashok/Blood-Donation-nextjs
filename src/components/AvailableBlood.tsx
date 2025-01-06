import { BloodAvailableData } from "@/store/bloodAvailable";
import Link from "next/link";
import React from "react";

const AvailableBlood = () => {
  const handleViewReport = (bloodReport: string) => {
    window.open(bloodReport, "_blank");
  };
  return (
    <>
      {BloodAvailableData.map((Blood, index) => (
        <div
          key={index}
          className={" mb-4 px-5 py-6 border border-violet-800 rounded-md"}
        >
          <div className="flex justify-between font-light items-center text-xl md:flex md:justify-between">
            <div className="flex-auto text-lg">{Blood?.id}</div>
            <div className="flex-auto text-lg">{Blood?.bloodType}</div>
            <div className="flex-1 text-lg hidden md:flex ">
              {Blood?.availableBottles}
            </div>
            <div className="flex-1 text-lg hidden md:flex pr-8 ">
              {Blood?.expireDate}
            </div>

            <div className="flex-1 flex-col gap-2 hidden md:flex">
              <button
                type="button"
                onClick={() => handleViewReport(Blood?.bloodReport || "")}
                className="px-2 py-2  text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
              >
                View Report
              </button>
              <Link
                href="/placeorder"
                type="button"
                className="py-2  px-6 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
              >
                Place Order
              </Link>
            </div>
            <div className="flex-1 md:hidden">
              <Link
                href="/details"
                type="button"
                className="px-4 py-2 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect dark:text-white"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AvailableBlood;
