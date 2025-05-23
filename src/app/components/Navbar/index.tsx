"use client";

import React from "react";


const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between px-4 py-3 bg-white shadow w-full h-16">
      {/* Centered Title */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-base sm:text-lg md:text-xs font-semibold text-black whitespace-nowrap">
          welcome to Japfa The Learning Centre!
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
