"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  const quickLinks = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Donate Blood",
      to: "/donateblood",
    },
    {
      id: 3,
      title: "Available Blood ",
      to: "/bloodavailable",
    },
  ];

  const icons = [
    {
      id: 1,
      icon: FaFacebook,
    },
    {
      id: 2,
      icon: FaInstagram,
    },
    {
      id: 3,
      icon: FaTwitter,
    },
    {
      id: 4,
      icon: FaLinkedin,
    },
  ];

  return (
    <footer className="border-t border-1 border-t-violet-800 text-black py-8 px-4 md:px-16 lg:px-24 shadow-md">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold pb-4 text-md sm:text-lg md:text-xl">
            Donate Blood
          </h2>
          <p className="text-sm sm:text-md md:text-lg">
            This Donate Blood website is platform where you can donate blood and
            find blood. This platform is handled by the Nepal Blood Bank with
            the motivation of "Save a life. Give Blood"
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h2 className="font-bold pb-4 text-md sm:text-lg md:text-xl">
            Quick Links
          </h2>
          <ul className="space-y-2">
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
          <h3 className="font-bold pb-1 text-md sm:text-lg md:text-xl">
            Follow Us
          </h3>

          <div className="flex space-x-2 md:space-x-4 pb-4">
            {icons.map((icon) => (
              <a href="/" key={icon.id} className="hover:text-violet-800">
                <icon.icon size={18} />
              </a>
            ))}
          </div>

          <div>
            <p className="font-bold pb-1 text-md sm:text-lg md:text-xl">
              Contact Us
            </p>
            <div className="flex items-center space-x-1">
              <TfiEmail />
              <span>: nepalbloodbank@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <BsFillTelephoneFill />
              <span>: 01-32234232, 9845225675</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-1 border-violet-800 pt-4 ">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; 2025. Donate Blood | Nepal Blood Bank. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="" className="hover:underline hover:underline-violate-800">
              Privacy Policy
            </a>
            <a href="" className="hover:underline">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
