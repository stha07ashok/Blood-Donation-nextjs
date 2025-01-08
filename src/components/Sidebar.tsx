import { donationCampData, notificationData } from "@/store/notification";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrNotification } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import DarkMode from "./DarkMode";

const navbarData = [
  { title: "Home", href: "/" },
  { title: "Donate Blood", href: "/donateblood" },
  { title: "Available Blood", href: "/bloodavailable" },
];

const calculateNotificationCount = () =>
  notificationData.length + donationCampData.length;

const Data = [
  {
    title: "Notification",
    href: "/notification",
    icon: <GrNotification className="text-2xl relative" />,
    notificationCount: calculateNotificationCount(),
  },
  {
    title: "Login",
    href: "/login",
    icon: <FaRegCircleUser className="text-2xl" />,
    notificationCount: 0,
  },
];

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <div
        onClick={() => setSidebar(!sidebar)}
        className="pr-4 cursor-pointer z-10 text-violet-800 md:hidden flex items-center my-5"
      >
        {sidebar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Sidebar */}
      {sidebar && (
        <div className="fixed top-0 right-0 w-64 h-screen bg-[#f0f0f0] dark:bg-black dark:text-white shadow-lg text-violet-800 z-20 flex-col py-6">
          {/* Close Icon and Top Icons */}
          <div
            onClick={() => setSidebar(false)}
            className="cursor-pointer text-violet-800 pl-48 pt-10"
          >
            <FaTimes size={30} className="flex items-end dark:text-white" />
          </div>
          <div className="flex flex-col items-center  gap-6 py-4">
            <div className="flex gap-6 pt-9">
              <DarkMode />
              {Data.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setSidebar(false)}
                  className="relative "
                >
                  {item.icon}
                  {item.notificationCount > 0 && (
                    <span className="absolute -top-2 left-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ">
                      {item.notificationCount}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 pt-10">
            {navbarData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setSidebar(false)}
                className="text-lg font-bold text-violet-800 hover:underline dark:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="h-16 flex-col gap-2 px-2  py-10">
            <div className="flex items-center space-x-1 dark:text-white">
              <TfiEmail />
              <span>: nepalbloodbank@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1 dark:text-white">
              <BsFillTelephoneFill />
              <span>: 01-32234232, 9845225675</span>
            </div>
            <p className="dark:text-white ">
              &copy; 2025. Donate Blood | Nepal Blood Bank. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
