import React from "react";
import ProfileCover from "@/components/facebook/ProfileCover";
import ProfileHeader from "@/components/facebook/ProfileHeader";
import ProfileNav from "@/components/facebook/ProfileNav";
import Sidebar from "@/components/facebook/Sidebar";
import Feed from "@/components/facebook/Feed";

export default function HomePage() {
  return (
    <main className="bg-[#f0f2f5] min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1200px] ">
        {/* Cover Photo */}
        <ProfileCover />

        <ProfileHeader />
        <ProfileNav />

        {/* Content Area */}
        <div>
          {/* Two Column Layout */}
          <div className="max-w-[1024px] mx-auto flex flex-col lg:flex-row gap-6 px-4">
            {/* Sidebar - hidden on mobile */}
            <div className="hidden lg:block lg:w-1/3">
              <Sidebar />
            </div>

            {/* Feed */}
            <div className="flex-1 min-w-0">
              <Feed />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
