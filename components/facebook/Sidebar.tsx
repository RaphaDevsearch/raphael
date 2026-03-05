import React from "react";

export default function Sidebar() {
  return (
    <div className="w-full min-w-0 space-y-4">
      {/* Personal Details Section */}
      <div className="bg-white border border-[#E4E6EB] rounded-xl p-4 shadow-md shadow-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="m-0 text-[20px] font-semibold text-[#050505]">
            Personal details
          </h3>
          <button className="border-none bg-transparent cursor-pointer text-[16px] text-[#050505] hover:text-[#65676B] transition flex-shrink-0">
            ✎
          </button>
        </div>
        <div className="text-[16px] text-[#65676B] leading-relaxed space-y-3">
          <div>
            <strong className="text-[#050505]">📍 Lives in</strong>
            <p className="m-0 text-[#65676B]">Antananarivo, Madagascar</p>
          </div>
          <div>
            <strong className="text-[#050505]">🏠 From</strong>
            <p className="m-0 text-[#65676B]">Manatasoa</p>
          </div>
          <div>
            <strong className="text-[#050505]">🎂 Birthday</strong>
            <p className="m-0 text-[#65676B]">March 3, 2003</p>
          </div>
        </div>
      </div>

      {/* Work & Education Section */}
      <div className="bg-white border border-[#E4E6EB] rounded-xl p-4 shadow-md shadow-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="m-0 text-[20px] font-semibold text-[#050505]">Work</h3>
          <button className="border-none bg-transparent cursor-pointer text-[16px] text-[#050505] hover:text-[#65676B] transition flex-shrink-0">
            ✎
          </button>
        </div>
        <div className="text-[16px] text-[#65676B] leading-relaxed space-y-3">
          <div>
            <strong className="text-[#050505]">💼 Works at</strong>
            <p className="m-0 text-[#65676B]">Freelance</p>
          </div>
          <div>
            <strong className="text-[#050505]">🎓 Studied at</strong>
            <p className="m-0 text-[#65676B]">University of Antananarivo</p>
          </div>
          <div>
            <strong className="text-[#050505]">📚 Field of study</strong>
            <p className="m-0 text-[#65676B]">Computer Science</p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-white border border-[#E4E6EB] rounded-xl p-4 shadow-md shadow-gray-300">
        <div className="flex justify-between items-center mb-4">
          <h3 className="m-0 text-[20px] font-semibold text-[#050505]">
            Highlights
          </h3>
          <button className="border-none bg-transparent cursor-pointer text-[16px] text-[#050505] hover:text-[#65676B] transition flex-shrink-0">
            ✎
          </button>
        </div>
        <div className="text-[16px] text-[#65676B] leading-relaxed space-y-3">
          <div>
            <strong className="text-[#050505]">🏆 Achievement</strong>
            <p className="m-0 text-[#65676B]">Completed 50+ projects</p>
          </div>
          <div>
            <strong className="text-[#050505]">🌟 Skill</strong>
            <p className="m-0 text-[#65676B]">Full-stack development</p>
          </div>
          <div>
            <strong className="text-[#050505]">📈 Milestone</strong>
            <p className="m-0 text-[#65676B]">5 years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
