import React from "react";

export default function Sidebar() {
  return (
    <div className="w-full min-w-0">
      {/* Personal Details */}
      <div className="bg-white rounded-lg p-4 mb-4 border border-gray-100 shadow-md shadow-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="m-0 text-sm md:text-base font-semibold">
            Personal details
          </h3>
          <button className="border-none bg-transparent cursor-pointer text-lg">
            ✎
          </button>
        </div>
        <div className="text-sm text-gray-600 leading-relaxed">
          <div className="mb-3">
            <strong>📍 Lives in</strong>
            <p className="m-0">Antananarivo, Madagascar</p>
          </div>
          <div className="mb-3">
            <strong>🏠 From</strong>
            <p className="m-0">Manatasoa</p>
          </div>
          <div>
            <strong>🎂 Birthday</strong>
            <p className="m-0">March 3, 2003</p>
          </div>
        </div>
      </div>

      {/* Work & Education */}
      <div className="bg-white rounded-lg p-4 mb-4 border border-gray-100 shadow-md shadow-gray-300">
        <h3 className="m-0 mb-3 text-sm md:text-base font-semibold">Work</h3>
        <p className="m-0 text-sm">
          <strong>Enseignant contractuel</strong>
          <br />
          <span className="text-gray-500">Jul 4, 2022 - Present</span>
        </p>
      </div>

      {/* Highlights */}
      <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-md shadow-gray-300">
        <h3 className="m-0 mb-3 text-sm md:text-base font-semibold">
          Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-200 rounded-lg h-24" />
          ))}
        </div>
      </div>
    </div>
  );
}
