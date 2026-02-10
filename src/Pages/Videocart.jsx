import React from "react";
import Pichat from '../media/ply.png'
import pi1 from '../media/ply1.png'
const notifications = [
  {
    id: 1,
    title: "New Task Assigned",
    color: "text-blue-600",
    date: "Sat, 25 June",
  },
  {
    id: 2,
    title: "New Task Assigned",
    color: "text-orange-500",
    date: "Sat, 25 June",
  },
];

const meetings = [
  {
    id: 1,
    time: "2:00 PM - 3:30 PM",
    title: "Team Meeting",
    color: "bg-blue-500",
    img: Pichat,
  },
  {
    id: 2,
    time: "5:00 PM - 6:30 PM",
    title: "Submission of Assignment",
    color: "bg-green-500",
    img: pi1,
  },
];

const messages = [
  {
    id: 1,
    name: "Anurag",
    color: "bg-blue-50 border-blue-200",
  },
  {
    id: 2,
    name: "Rahul",
    color: "bg-orange-50 border-orange-200",
  },
];

export default function DashboardWidgets() {
  return (
    <div className="w-full p-4 bg-gray-100 min-h-screen">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* Case Notifications */}
        <div className="bg-white rounded-xl shadow p-5">
          <h2 className="font-semibold text-lg mb-4">Case Notifications</h2>

          <div className="space-y-4">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b pb-3"
              >
                <div>
                  <h3 className={`font-medium ${item.color}`}>
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Client Name | Assigned at: 12 June 2024
                  </p>

                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    📅 {item.date}
                  </p>
                </div>

                <button className="text-gray-400 text-xl">•••</button>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">15 Dec, Monday</h2>

            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-gray-100">◀</button>
              <button className="w-8 h-8 rounded-full bg-gray-100">▶</button>
            </div>
          </div>

          <div className="space-y-5">
            {meetings.map((meet) => (
              <div key={meet.id}>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {meet.time}
                </p>

                <div className="flex gap-3">
                  <div
                    className={`w-4 h-4 rounded-full mt-1`}

                  >
                    <img src={meet.img} alt="" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-sm">{meet.title}</h3>
                    {/* <img src={meet.img} alt="" className="text-xs text-gray-500" /> */}
                    {/* <p className="text-xs text-gray-500">{meet.img}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-4 text-blue-600 text-sm hover:underline">
            See More
          </button>
        </div>
      </div>

      {/* Messages Section */}
      <div className="bg-white rounded-xl shadow p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Message | Payment Update</h2>

          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full bg-gray-100">◀</button>
            <button className="w-8 h-8 rounded-full bg-gray-100">▶</button>
            <button className="text-xl text-gray-400">•••</button>
          </div>
        </div>

        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id}>
              <h4 className="text-sm font-medium text-blue-600 mb-1">
                Message from {msg.name}
              </h4>

              <div
                className={`p-3 rounded-md border text-sm text-gray-700 ${msg.color}`}
              >
                Hi,<br />
                Hope you are doing well, this is to update you that I have
                finished first installment of payment. Please proceed with
                the task as discussed.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
