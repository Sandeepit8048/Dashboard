import React from "react";

const tasks = [
  {
    id: 1,
    tag: "Corporate",
    color: "bg-blue-100 text-blue-600",
    avatar: "bg-blue-200 text-blue-700",
  },
  {
    id: 2,
    tag: "Personal Injury",
    color: "bg-orange-100 text-orange-600",
    avatar: "bg-orange-200 text-orange-700",
  },
  {
    id: 3,
    tag: "Estate Planning",
    color: "bg-green-100 text-green-600",
    avatar: "bg-green-200 text-green-700",
  },
  {
    id: 4,
    tag: "Estate Planning",
    color: "bg-purple-100 text-purple-600",
    avatar: "bg-purple-200 text-purple-700",
  },
  {
    id: 5,
    tag: "Corporate",
    color: "bg-blue-100 text-blue-600",
    avatar: "bg-blue-200 text-blue-700",
  },
];

export default function Landingcart() {
  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-5">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Your Tasks</h2>

      {/* Task List */}
      <div className="space-y-5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b pb-4"
          >
            {/* Left Section */}
            <div className="flex gap-3">

              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center font-semibold ${task.avatar}`}
              >
                JP
              </div>

              {/* Info */}
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Jefferson Partners LLC v. Astro Corp
                </h3>

                <p className="text-xs sm:text-sm text-gray-500">
                  Contract dispute regarding software licensing agreement
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Assigned to: <span className="font-medium">Sarah Johnson</span> •
                  Due: Nov 15, 2025
                </p>
              </div>
            </div>

            {/* Tag */}
            <span
              className={`self-start sm:self-center px-3 py-1 rounded-full text-xs font-medium ${task.color}`}
            >
              {task.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-right mt-4">
        <button className="text-sm text-blue-600 hover:underline">
          View All Cases
        </button>
      </div>
    </div>
  );
}
