"use client";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="relative flex h-screen">
      {/* Main Content (Fixed, doesn't move) */}
      <main className="flex flex-col w-full h-full bg-gray-50 transition-all duration-300">
        <Navbar toggleSidebar={toggleSidebar} />
        {children}
      </main>

      {/* Sidebar (Overlays the content, without shifting it) */}
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardWrapper;
