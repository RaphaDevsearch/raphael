import React from "react";

export default function Sidebar() {
  return (
    <div className="w-full min-w-0 space-y-3 sm:space-y-4">
      {/* Personal Details Section */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-100 shadow-md shadow-gray-300">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="m-0 text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-blue-800">
            Personal details
          </h3>
          <button className="border-none bg-transparent cursor-pointer text-[25px] sm:text-[25px] md:text-[26px] text-blue-800 hover:text-gray-600 transition flex-shrink-0">
            ✎
          </button>
        </div>
        <div className="text-[25px] sm:text-[25px] md:text-[26px] text-gray-600 leading-relaxed space-y-2 sm:space-y-3">
          <div>
            <strong className="text-blue-800">📍 Lives in</strong>
            <p className="m-0 text-gray-600">Antananarivo, Madagascar</p>
          </div>
          <div>
            <strong className="text-blue-800">🏠 From</strong>
            <p className="m-0 text-gray-600">Manatasoa</p>
          </div>
          <div>
            <strong className="text-blue-800">🎂 Birthday</strong>
            <p className="m-0 text-gray-600">March 3, 2003</p>
          </div>
        </div>
      </div>

      {/* Work & Education Section */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-100 shadow-md shadow-gray-300">
        <h3 className="m-0 mb-2 sm:mb-3 text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-blue-800">
          Work
        </h3>
        <p className="m-0 text-[25px] sm:text-[25px] md:text-[26px]">
          <strong className="text-blue-800">Enseignant contractuel</strong>
          <br />
          <span className="text-gray-500 text-[25px] sm:text-[25px] md:text-[26px]">
            Jul 4, 2022 - Present
          </span>
        </p>
      </div>

      {/* Highlights Section */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-100 shadow-md shadow-gray-300">
        <h3 className="m-0 mb-2 sm:mb-3 text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-blue-800">
          Highlights
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-lg h-16 sm:h-24 hover:opacity-90 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
