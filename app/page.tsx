import React from "react";
import ProfileCover from "@/components/facebook/ProfileCover";
import ProfileHeader from "@/components/facebook/ProfileHeader";
import ProfileNav from "@/components/facebook/ProfileNav";
import Sidebar from "@/components/facebook/Sidebar";
import Feed from "@/components/facebook/Feed";

export default function HomePage() {
  return (
    <main className="bg-[#f0f2f5] min-h-screen">

      {/* Profile White Section */}
      <div className="bg-white w-full">
        <div className="max-w-[1100px] mx-auto">
          <ProfileCover />
          <ProfileHeader />
          <ProfileNav />
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[1100px] mx-auto px-4 mt-4">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Column */}
          <aside className="hidden lg:block w-[360px] flex-shrink-0">
            <Sidebar />
          </aside>

          {/* Feed Column */}
          <section className="flex-1 max-w-[680px] min-w-0">
            <Feed />
          </section>

        </div>
      </div>

    </main>
  );
}