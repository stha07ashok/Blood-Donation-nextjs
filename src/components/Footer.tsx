"use client";
import React from "react";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { icons, quickLinks } from "@/constants/Footer";

const Footer = () => {
  return (
    <footer className="border-t border-1 border-t-violet-800 text-black py-8 px-4 md:px-16 lg:px-24 shadow-md">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold pb-4 text-md sm:text-lg md:text-xl dark:text-white">
            Donate Blood
          </h2>
          <p className="text-sm sm:text-md md:text-lg dark:text-white">
            This Donate Blood website is platform where you can donate blood and
            find blood. This platform is handled by the Nepal Blood Bank with
            the motivation of &quot;Save a life. Give Blood&quot;
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h2 className="font-bold pb-4 text-md sm:text-lg md:text-xl dark:text-white">
            Quick Links
          </h2>
          <ul className="space-y-2 dark:text-white">
            {quickLinks.map((link) => (
              <li
                key={link.id}
                className="text-md hover:text-violet-600 transition"
              >
                <Link href={link.to}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="font-bold pb-1 text-md sm:text-lg md:text-xl dark:text-white">
            Follow Us
          </h3>

          <div className="flex space-x-2 md:space-x-4 pb-4">
            {icons.map((icon) => (
              <Link
                href="/"
                key={icon.id}
                className="hover:text-violet-800 dark:text-white"
              >
                <icon.icon size={18} />
              </Link>
            ))}
          </div>

          <div>
            <p className="font-bold pb-1 text-md sm:text-lg md:text-xl dark:text-white">
              Contact Us
            </p>
            <div className="flex items-center space-x-1 dark:text-white">
              <TfiEmail />
              <span>: nepalbloodbank@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1 dark:text-white">
              <BsFillTelephoneFill />
              <span>: 01-32234232, 9845225675</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-1 border-violet-800 pt-4 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="dark:text-white">
            &copy; 2025. Donate Blood | Nepal Blood Bank. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href=""
              className="hover:underline hover:underline-violate-800 dark:text-white"
            >
              Privacy Policy
            </Link>
            <Link href="" className="hover:underline dark:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
