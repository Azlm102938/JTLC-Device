'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const DormBA = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="absolute bottom-6 left-6  flex flex-col items-center text-black group">
        <Link href="/dorm-B" className="flex flex-col items-center">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
        <span className="ml-2 text-sm font-semibold">Back</span>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        DORMITORY B - TYPE A
      </h1>

      {/* Image */}
      <Image 
        src="/dormB-A.png"  // Update this to the correct path to the Classroom 1 image
        alt="Dorm B Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
            The dormitory provides comfortable accommodation for JTLC participants. It is designed to offer a safe and restful environment with shared amenities such as bathrooms, study areas, and lounges.
      </p>
    </div>
  );
};

export default DormBA;
