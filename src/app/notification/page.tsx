import React from "react";

const notificationData = [
  {
    title: "Blood Request!!",
    description:
      "A patient is in need of blood at Gandaki Hospital, Pokhara. Our bank doesnot have this type of blood.",
    requiredBloodType: "O+",
    patientName: "ABC XYZ",
    contactNumber: "9834568739",
    hospitalName: "Gandaki Hospital",
    address: " Prithivi Chowk",
    date: "2022-09-01",
    day: "Monday",
    requestStatus: "Urgent!!!",
    Note: "Pleaes help us to save a life if you are available near this place!!!",
  },
  {
    title: "Blood Request!!",
    description:
      "A patient is in need of blood at Manipal Hospital, Pokhara. Our bank doesnot have this type of blood.",
    requiredBloodType: "AB-",
    patientName: "CDE RTY",
    contactNumber: "9834568739",
    hospitalName: "Manipal Hospital",
    address: "Manipal Pokhara",
    date: "2022-09-04",
    day: "Thrusdat",
    requestStatus: "Urgent!!!",
    Note: "Pleaes help us to save a life if you are available near this place!!!",
  },
  {
    title: "Blood Donation Camp!!!",
    description:
      "We are organizing a blood donation camp at following details. Please donate blood if you are available. ",
    address: "WRC College Lamachaur,Pokhara",
    date: "2023-03-12",
    day: "Sunday",
    time: "10:00 AM - 4:00 PM",
  },
];

interface notificationType {
  title?: string;
  description?: string;
  requiredBloodType?: string;
  patientName?: string;
  contactNumber?: number;
  hospitalName?: string;
  address?: string;
  date?: number;
  day?: string;
  requestStatus?: string;
  Note?: string;
  time?: number;
}
const NotificationPage = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 ">
      <div className="flex flex-col space-y-4">
        {notificationData.map((item, index) => (
          <div
            key={index}
            className="flex justify-center gap-8 border-2 border-violet-800 shadow-lg rounded-md bg-red-100"
          >
            <div>
              <p className="text-2xl font-bold py-3 ">{item?.title}</p>
              <div className="flex flex-row justify-between max-w-screen-lg bg-red-700">
                <p className="text-xl font-semibold py-2">
                  {item?.requestStatus}
                </p>
                <p className="text-xl font-semibold py-2">
                  {item?.requestStatus}
                </p>
                <p className="text-xl font-semibold py-2">
                  {item?.requestStatus}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
