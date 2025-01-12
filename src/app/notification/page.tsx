import BloodCampNotificaton from "@/components/BloodCampNoti";
import BloodRequestNotification from "@/components/BloodReqNoti";
import React from "react";

const NotificationPage = () => {
  return (
    <div className="min-h-screen ">
      <div className="md:max-w-screen-lg mx-auto px-4 py-6">
        <BloodRequestNotification />
        <BloodCampNotificaton />
      </div>
    </div>
  );
};

export default NotificationPage;
