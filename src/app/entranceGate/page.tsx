'use client';

import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { useInactivityTimer } from "../components/Timer";
import BackButton from "../components/backButton";

const Entrance = () => {
    // useInactivityTimer();
     
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          ENTRANCE GATE
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/entrance.png" 
        alt="Entrance Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        The entrance gate at JTLC serves as the main access point for employee, staff, and visitors. 
        It provides a secure and welcoming entryway, marking the beginning of every journey within the learning center.
      </p>
    </div>
  );
};

export default Entrance;
