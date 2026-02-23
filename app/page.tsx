import React from "react";
import ProfileCover from "@/components/facebook/ProfileCover";
import ProfileHeader from "@/components/facebook/ProfileHeader";
import ProfileNav from "@/components/facebook/ProfileNav";
import Sidebar from "@/components/facebook/Sidebar";
import Feed from "@/components/facebook/Feed";

export default function HomePage() {
  return (
    <main className="bg-[#f0f2f5] min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1000px]">
        {/* Profile Cover */}
        <ProfileCover />

        {/* Profile Header */}
        <ProfileHeader />

        {/* Navigation Tabs */}
        <ProfileNav />

        {/* Main Content Area */}
        <div className="mt-3 sm:mt-4 md:mt-6 px-2 sm:px-3 md:px-4">
          <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-2 sm:gap-3 lg:gap-6">
            {/* Sidebar - hidden on mobile, 1/3 width on desktop */}
            <div className="hidden lg:block lg:w-1/3 flex-1 max-w-[550px]">
              <Sidebar />
            </div>

            {/* Feed - Full width on mobile, 2/3 width on desktop */}
            <div className="flex-1 min-w-0">
              <Feed />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
