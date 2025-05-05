'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const Utility = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="absolute top-4 left-12">
        <Link href="/dashboard" className="flex items-center text-black group">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        UTILITY
      </h1>

      {/* Image */}
      <Image 
        src="/utility.png" 
        alt="Utility Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        The Utility section supports the core infrastructure of the JTLC site. It includes essential facilities like power management, water systems, and technical support rooms that ensure smooth day-to-day operations across the campus.
      </p>
    </div>
  );
};

export default Utility;
