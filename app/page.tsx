import React from "react";
import ProfileCover from "../components/facebook/ProfileCover";
import ProfileHeader from "../components/facebook/ProfileHeader";
import ProfileNav from "../components/facebook/ProfileNav";
import Sidebar from "../components/facebook/Sidebar";
import Feed from "../components/facebook/Feed";

export default function HomePage() {
  return (
    <main style={{ backgroundColor: "#f0f2f5", minHeight: "100vh" }}>
      {/* Cover Photo */}
      <ProfileCover />

      {/* Container for header, nav, and content */}
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          paddingBottom: 24,
        }}
      >
        {/* Profile Header */}
        <div style={{ padding: "0 16px" }}>
          <div
            style={{
              maxWidth: 1024,
              margin: "0 auto",
            }}
          >
            <ProfileHeader />
          </div>
        </div>

        {/* Navigation Tabs */}
        <ProfileNav />

        {/* Two Column Layout: Sidebar + Feed - Responsive */}
        <div
          style={{
            maxWidth: 1024,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
            padding: "0 16px",
          }}
          className="two-column-responsive"
        >
          {/* Sidebar - Hidden on mobile */}
          <div className="sidebar-responsive">
            <Sidebar />
          </div>

          {/* Feed */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <Feed />
          </div>
        </div>
      </div>
    </main>
  );
}
