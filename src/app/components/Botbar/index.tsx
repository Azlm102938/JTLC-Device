'use client';

import React from "react";
import { Menu } from "lucide-react";

interface BotbarProps { 
  toggleSidebar: () => void;
}

const Botbar = ({ toggleSidebar }: BotbarProps) => {
  return (
    <nav className="flex items-center justify-between px-6 py-5 bg-white shadow border-t w-full h-12 border border-gray-200  ">
      {/* Logo (Left) */}
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
