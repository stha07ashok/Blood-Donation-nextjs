"use client";
import React from "react";
import { BloodAvailableTypeProps } from "@/types/bloodAvailable";
import AvailableBlood from "@/components/AvailableBlood";
const BloodAvailable = ({
  id,
  bloodType,
  availableBottles,
  expireDate,
  donarName,
  button,
  SN,
  action,
  bloodReport,
}: BloodAvailableTypeProps) => {
  return (
    <div className="min-h-screen mx-auto px-6 py-6 border border-violet-800 shadow-lg rounded-md mt-4 mb-4 md:max-w-screen-lg ">
      <div className="px-4 py-2 md:px-2">
        {/* Header */}
        <div className="flex justify-between font-bold text-xl mb-4 md:flex md:justify-between md:flex-wrap">
          <div className="flex-1 ">S.N</div>
          <div className="flex-1 "> Blood Type</div>
          <div className="flex-1 hidden md:flex text-center ">No. Bottles</div>
          <div className="flex-1 hidden md:flex text-center ">Expire Date</div>

          <div className="flex-1 text-center md:text-center md:pr-8">
            Action
          </div>
        </div>

        {/* Data Rows */}
        <AvailableBlood />
      </div>
    </div>
  );
};

export default BloodAvailable;
