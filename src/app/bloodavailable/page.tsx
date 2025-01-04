"use client";
import Link from "next/link";
import React from "react";

const bloodReport = "/report.pdf";

interface BloodAvailableType {
  id?: number | string;
  bloodType?: string;
  availableBottles?: number | string;
  expireDate?: string;
  donarName?: string;
  button?: { buttonn: "button" | "submit" };
  SN?: string;
  action?: string;
  bloodReport?: string;
}

const BloodAvailableData: BloodAvailableType[] = [
  {
    id: "01 .",
    bloodType: "A+",
    availableBottles: 10,
    expireDate: "2025-09-01",
    bloodReport: bloodReport,
  },
  {
    id: "02 .",
    bloodType: "O+",
    availableBottles: 5,
    expireDate: "2025-07-08",
    bloodReport: bloodReport,
  },
  {
    id: "03 .",
    bloodType: "O-",
    availableBottles: 2,
    expireDate: "2025-06-03",
    bloodReport: bloodReport,
  },
];

const BloodAvailable = () => {
  const handleViewReport = (bloodReport: string) => {
    // Open the PDF in a new tab
    window.open(bloodReport, "_blank");
  };

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-6 py-6 border-2 border-violet-800 shadow-lg rounded-md mt-4 mb-4 ">
      <div className="px-4 py-2">
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
        {BloodAvailableData.map((Blood, index) => (
          <div
            key={index}
            className={" mb-4 px-5 py-6 border-2 border-violet-800 rounded-md"}
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
                  className="px-2 py-2  text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect"
                >
                  View Report
                </button>
                <Link
                  href="/placeorder"
                  type="button"
                  className="py-2  px-16 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect"
                >
                  Place Order
                </Link>
              </div>
              <div className="flex-1 md:hidden">
                <Link
                  href="/details"
                  type="button"
                  className="px-4 py-2 text-black font-semibold rounded-md hover:bg-violet-600 border-2 border-violet-800 hover:text-white hoverEffect"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodAvailable;
