"use client";

import React, { useState } from "react";

const PROFILE_TABS = ["All", "About", "Photos", "Videos", "Friends", "More"];

export default function ProfileNav() {
  const [activeTab, setActiveTab] = useState(PROFILE_TABS[0]);

  return (
    <div className="bg-white border-b border-gray-100 mb-6 overflow-x-auto overflow-y-hidden touch-auto">
      <div className="max-w-4xl mx-auto flex pl-4 gap-1 min-w-min">
        {PROFILE_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-none px-4 py-3 text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
