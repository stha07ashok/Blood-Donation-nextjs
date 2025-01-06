"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrNotification } from "react-icons/gr";
import { usePathname } from "next/navigation";
import bloodimg from "../../public/blood.png";
import { donationCampData, notificationData } from "@/store/notification";
import DarkMode from "./DarkMode";

export const navbarData = [
  { title: "Home", href: "/" },
  { title: "Donate Blood", href: "/donateblood" },
  { title: "Available Blood", href: "/bloodavailable" },
];

const calculateNotificationCount = () =>
  notificationData.length + donationCampData.length;

export const Data = [
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

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-2 border-b-violet-500 h-25 shadow-md ">
      <div className="container mx-auto flex justify-between gap-4">
        <Link href="/" className="hover">
          <Image
            src={bloodimg}
            alt="Donate Blood"
            priority
            width={90}
            height={90}
            className="object-cover w-auto h-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-4 sm:gap-6 font-extrabold">
          {navbarData.map((item) => (
            <div className="relative group" key={item.title}>
              <Link
                href={item.href}
                className="text-sm sm:text-base hover:text-violet-600 transition"
              >
                {item.title}
                <span
                  className={`w-0 h-[2px] bg-violet-600 absolute left-0 bottom-0 transition-all duration-200 group-hover:w-full ${
                    pathname === item?.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 sm:gap-6 font-extrabold">
          <DarkMode />
          {Data.map((item, index) => (
            <div className="relative" key={index}>
              <Link
                href={item?.href}
                className="text-sm sm:text-base hover:text-violet-600 transition"
              >
                {item.icon}
              </Link>
              {item.notificationCount > 0 && (
                <span className="absolute -top-2 left-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {item?.notificationCount}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
