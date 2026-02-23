import React from "react";

export default function Sidebar() {
  return (
    <div className="w-full min-w-0 space-y-4">
      {/* Personal Details Section */}
      <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-md shadow-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="m-0 text-2xl font-semibold text-gray-900">
            Personal details
          </h3>
          <button className="border-none bg-transparent cursor-pointer text-lg hover:text-gray-700 transition">
            ✎
          </button>
        </div>
        <div className="text-sm text-gray-600 leading-relaxed space-y-3">
          <div>
            <strong className="text-gray-900">📍 Lives in</strong>
            <p className="m-0 text-gray-600">Antananarivo, Madagascar</p>
          </div>
          <div>
            <strong className="text-gray-900">🏠 From</strong>
            <p className="m-0 text-gray-600">Manatasoa</p>
          </div>
          <div>
            <strong className="text-gray-900">🎂 Birthday</strong>
            <p className="m-0 text-gray-600">March 3, 2003</p>
          </div>
        </div>
      </div>

      {/* Work & Education Section */}
      <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-md shadow-gray-300">
        <h3 className="m-0 mb-3 text-2xl font-semibold text-gray-900">
          Work
        </h3>
        <p className="m-0 text-sm">
          <strong className="text-gray-900">Enseignant contractuel</strong>
          <br />
          <span className="text-gray-500 text-xs">Jul 4, 2022 - Present</span>
        </p>
      </div>

      {/* Highlights Section */}
      <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-md shadow-gray-300">
        <h3 className="m-0 mb-3 text-2xl font-semibold text-gray-900">
          Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-lg h-24 hover:opacity-90 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
