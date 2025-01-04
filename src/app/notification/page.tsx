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

const notificationData: notificationType[] = [
  {
    title: "Blood Request!!",
    description:
      "A patient is in need of blood at Gandaki Hospital, Pokhara. Unfortunately, our blood bank does not have this blood type. Please help us to save a life.",
    requiredBloodType: "O+",
    patientName: "ABC XYZ",
    contactNumber: 9834568739,
    hospitalName: "Gandaki Hospital",
    address: " Prithivi Chowk",
    date: "2025-06-01",
    requestStatus: "Urgent!!!",
    Note: "Pleaes help us to save a life if you are available near this place!!!",
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
    Note: "Pleaes help us to save a life if you are available near this place!!!",
  },
];

const donationCampData: notificationType[] = [
  {
    title: "Blood Donation Camp!!!",
    description:
      "We are organizing a blood donation camp at following details. Please donate blood if you are available. ",
    address: "WRC College Lamachaur,Pokhara",
    date: "2025-08-17",
    day: "Sunday",
    time: "10:00 AM - 4:00 PM",
  },
  {
    title: "Blood Donation Camp!!!",
    description:
      "We are organizing a blood donation camp at following details. Please donate blood if you are available. ",
    address: "Lakeside,Pokhara",
    date: "2025-03-12",
    day: "Sunday",
    time: "10:00 AM - 4:00 PM",
  },
];

const NotificationPage = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 flex flex-col space-y-4">
      <div className="flex flex-col space-y-4">
        {notificationData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-2 border-violet-800 shadow-lg rounded-md "
          >
            <div className="flex flex-col">
              <p className="text-2xl font-extrabold text-center ">
                {item?.title}
              </p>
              <div className="flex flex-row  justify-between px-6 py-4">
                <p className="font-bold text-red-600 ">{item.requestStatus}</p>
                <p className="font-bold text-red-600 ">{item.requestStatus}</p>
                <p className="font-bold text-red-600 ">{item.requestStatus}</p>
              </div>

              <p className="font-light text-xl text-center">
                {item.description}
              </p>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row gap-16 justify-center">
                  <div className="flex flex-row ">
                    <span className="font-light text-xl">
                      Required Blood Type:{" "}
                    </span>
                    <p className="font-light text-xl">
                      {" "}
                      {item.requiredBloodType}
                    </p>
                  </div>
                  <div className="flex flex-row ">
                    <span className="font-light text-xl">Patient Name: </span>
                    <p className="font-light text-xl"> {item.patientName}</p>
                  </div>
                </div>

                <div className="flex flex-row gap-16 justify-center">
                  <div className="flex flex-row pl-9">
                    <span className="font-light text-xl">Contact Number: </span>
                    <p className="font-light text-xl"> {item.contactNumber}</p>
                  </div>
                  <div className="flex flex-row ">
                    <span className="font-light text-xl">Hospital Name: </span>
                    <p className="font-light text-xl"> {item.hospitalName}</p>
                  </div>
                </div>

                <div className="flex flex-row gap-16 justify-center">
                  <div className="flex flex-row ">
                    <span className="font-light text-xl">Address: </span>
                    <p className="font-light text-xl"> {item.address}</p>
                  </div>
                  <div className="flex flex-row pr-14">
                    <span className="font-light text-xl">Date: </span>
                    <p className="font-light text-xl"> {item.date}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-center">
                <span className="font-bold text-xl  text-red-600">Note: </span>
                <p className="font-bold  text-xl text-red-600"> {item.Note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-4">
        {donationCampData.map((item, index) => (
          <div
            key={index}
            className="py-4 border-2 border-violet-800 shadow-lg rounded-md"
          >
            <div className=" flex flex-col">
              <p className="font-extrabold text-xl text-center ">
                {item.title}
              </p>

              <p className="font-light text-xl text-center">
                {item.description}
              </p>
              <p className="font-light text-xl text-center"> {item.address}</p>
              <p className="font-light text-xl text-center">{item.date}</p>
              <p className="font-light text-xl text-center">{item.day}</p>
              <p className="font-light text-xl text-center">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
