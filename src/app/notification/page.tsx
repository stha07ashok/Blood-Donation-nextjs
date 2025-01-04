import React from "react";

interface notificationType {
  title?: string;
  description?: string;
  requiredBloodType?: string;
  patientName?: string;
  contactNumber?: number;
  hospitalName?: string;
  address?: string;
  date?: number | string;
  requestStatus?: string;
  day?: string;
  Note?: string;
  time?: number | string;
}

export const notificationData: notificationType[] = [
  {
    title: "Blood Request!!",
    description:
      "A patient is in need of blood at Gandaki Hospital, Pokhara. Unfortunately, our blood bank does not have this blood type. Please help us to save a life.",
    requiredBloodType: "O+",
    patientName: "ABC XYZ",
    contactNumber: 9834568739,
    hospitalName: "Gandaki Hospital",
    address: "Prithivi Chowk",
    date: "2025-06-01",
    requestStatus: "Urgent!!!",
    Note: "Please help us to save a life if you are available near this place!!!",
  },
  {
    title: "Blood Request!!",
    description:
      "A patient is in need of blood at Manipal Hospital, Pokhara. Unfortunately, our blood bank does not have this blood type. Please help us to save a life.",
    requiredBloodType: "AB-",
    patientName: "CDE RTY",
    contactNumber: 9834568739,
    hospitalName: "Manipal Hospital",
    address: "Manipal Pokhara",
    date: "2025-09-04",
    requestStatus: "Urgent!!!",
    Note: "Please help us to save a life if you are available near this place!!!",
  },
];

const donationCampData: notificationType[] = [
  {
    title: "Blood Donation Camp!!!",
    description:
      "We are organizing a blood donation camp at following details. Please donate blood if you are available.",
    address: "WRC College Lamachaur, Pokhara",
    date: "2025-08-17",
    day: "Sunday",
    time: "10:00 AM - 4:00 PM",
  },
  {
    title: "Blood Donation Camp!!!",
    description:
      "We are organizing a blood donation camp at following details. Please donate blood if you are available.",
    address: "Lakeside, Pokhara",
    date: "2025-03-12",
    day: "Sunday",
    time: "10:00 AM - 4:00 PM",
  },
];

const NotificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-violet-700 mb-6">
          Notifications
        </h1>

        {/* Blood Requests Section */}
        <section className="space-y-6">
          {notificationData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-violet-500 shadow-lg rounded-lg p-4 md:p-6 flex flex-col"
            >
              <h2 className="text-xl md:text-2xl font-bold text-center text-violet-800">
                {item.title}
              </h2>
              <p className="text-center text-gray-700 text-sm md:text-base">
                {item.description}
              </p>
              <div className="flex flex-wrap justify-between gap-4 mt-4">
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Required Blood Type:</span>
                  <br /> {item.requiredBloodType}
                </p>
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Patient Name:</span>
                  <br /> {item.patientName}
                </p>
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Contact Number:</span>
                  <br /> {item.contactNumber}
                </p>
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Hospital Name:</span>
                  <br /> {item.hospitalName}
                </p>
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Address:</span> <br />
                  {item.address}
                </p>
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Date:</span> <br />
                  {item.date}
                </p>
              </div>
              <p className="text-center mt-4 text-red-600 text-sm md:text-base">
                <span className="font-bold">Note:</span>
                {item.Note}
              </p>
            </div>
          ))}
        </section>

        {/* Donation Camps Section */}
        <section className="space-y-6 mt-8">
          {donationCampData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-violet-500 shadow-lg rounded-lg p-4 md:p-6 flex flex-col"
            >
              <h2 className="text-xl md:text-2xl font-bold text-center text-violet-800">
                {item.title}
              </h2>
              <p className="text-center text-gray-700 text-sm md:text-base">
                {item.description}
              </p>
              <div className="flex flex-wrap justify-between gap-4 mt-4">
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Address:</span> <br />
                  {item.address}
                </p>
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Date:</span> <br />
                  {item.date}
                </p>
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Day:</span>
                  <br /> {item.day}
                </p>
                <p className="text-sm md:text-base flex-1">
                  <span className="font-semibold">Time:</span> <br />
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default NotificationPage;
