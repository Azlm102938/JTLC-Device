'use client';

import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { useInactivityTimer } from "../components/Timer";
import BackButton from "../components/backButton";

const DormA = () => {
  // useInactivityTimer();
 
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
       <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          DORMITORY A
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/dormA.png"  // Update this to the correct path to the Classroom 1 image
        alt="Dorm A Image" 
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

export default DormA;
