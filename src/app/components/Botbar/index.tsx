"use client";

import React from "react";
import { Menu } from "lucide-react";

interface BotbarProps { 
  toggleSidebar: () => void;
}

const Botbar = ({ toggleSidebar }: BotbarProps) => {
  return (
    <nav className="fixed bottom-0 left-0 flex items-center justify-between px-4 py-3 bg-white shadow border-t w-full h-16 z-50">
      {/* Logo (Left)   */}
      <div className="flex items-center">
        <img src="/logojapfa.png" alt="Japfa Logo" className="h-8 w-auto" />
      </div>

      {/* Sidebar Toggle Button (Right) */}
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        <Menu className="w-6 h-6 text-black" />
      </button>
    </nav>
  );
};

export default Botbar;
