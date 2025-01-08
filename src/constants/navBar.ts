import { donationCampData, notificationData } from "@/store/notification";
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrNotification } from "react-icons/gr";

export const navbarData = [
  { title: "Home", href: "/" },
  { title: "Donate Blood", href: "/donateblood" },
  { title: "Available Blood", href: "/bloodavailable" },
];

export const calculateNotificationCount = () =>
  notificationData.length + donationCampData.length;

export const Data = [
  {
    title: "Notification",
    href: "/notification",
    icon: React.createElement(GrNotification, {
      className: "text-2xl relative",
    }),
    notificationCount: calculateNotificationCount(),
  },
  {
    title: "Login",
    href: "/login",
    icon: React.createElement(FaRegCircleUser, { className: "text-2xl" }),
    notificationCount: 0,
  },
];
