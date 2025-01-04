"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrNotification } from "react-icons/gr";
import { usePathname } from "next/navigation";

// Path to the image in the public folder
const bloodimg = "/blood.png";

// Navbar data for primary and secondary links
export const navbarData = [
  { title: "Home", href: "/" },
  { title: "Donate Blood", href: "/donateblood" },
  { title: "Available Blood", href: "/bloodavailable" },
];

export const Data = [
  {
    title: "Notification",
    href: "/notification",
    icon: <GrNotification className="text-2xl" />,
  },
  {
    title: "Login",
    href: "/login",
    icon: <FaRegCircleUser className="text-2xl" />,
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-2 border-b-violet-500 h-25 shadow-md ">
      <div className="container mx-auto flex justify-between gap-4 h-fit">
        {/* Logo/Photo */}
        <Link href="/" className="hover">
          <Image
            src={bloodimg}
            alt="Donate Blood"
            priority
            width={90}
            height={90}
            className="object-cover"
          />
        </Link>

        {/* Primary navigation items */}
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

        {/* Secondary navigation items */}
        <div className="hidden md:flex items-center gap-4 sm:gap-6 font-extrabold">
          {Data.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm sm:text-base hover:text-violet-600 transition"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
