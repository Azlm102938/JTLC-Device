'use client';

import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { useInactivityTimer } from "@/app/components/Timer";
import BackButton from "@/app/components/backButton";

const WestParking = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          WEST PARKING
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/westParking.png" 
        alt="WestParking Image" 
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

export default WestParking;
