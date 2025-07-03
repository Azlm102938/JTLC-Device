'use client';

import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { useInactivityTimer } from "../components/Timer";
import BackButton from "../components/backButton";

const CourtYard = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
        <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          COURTYARD
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/courtyard.png" 
        alt="Courtyard Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        The Courtyard serves as a vibrant open space at the heart of the JTLC site, offering a place for relaxation, informal gatherings, and outdoor activities. Surrounded by key buildings, it provides a peaceful environment where students and staff can unwind, socialize, and enjoy natural light and fresh air.
      </p>
    </div>
  );
};

export default CourtYard;
