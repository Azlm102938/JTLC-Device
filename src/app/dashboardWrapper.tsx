'use client';

import React, { useState } from "react";
import Botbar from "./components/Botbar";
import Sidebar from "./components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="relative flex h-screen">
      {/* Sidebar */}
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main content + Botbar */}
      <div className="flex flex-col w-full h-full">
        <Botbar toggleSidebar={toggleSidebar} />
        <main className="bg-gray-50 transition-all duration-300 overflow-y-auto">
                    {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
