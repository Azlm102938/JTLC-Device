'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const EastParking = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="absolute bottom-150 left-10  flex flex-col items-center text-black group">
        <Link href="/dashboard" className="flex flex-col items-center">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
        <span className="text-sm font-semibold">Back</span>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        PARKING
      </h1>

      {/* Image */}
      <Image 
        src="/eastParking.png" 
        alt="EastParking Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
            The parking area at JTLC provides a secure and spacious location for vehicles of staff, students, and visitors. 
            Designed for easy access and organized layout, it ensures smooth traffic flow and convenient entry to the main building.
        </p>
    </div>
  );
};

export default EastParking;
