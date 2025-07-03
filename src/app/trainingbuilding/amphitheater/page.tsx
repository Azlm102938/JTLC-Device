'use client';

import Image from "next/image";
import BackButton from "@/app/components/backButton";
// import { useInactivityTimer } from "@/app/components/Timer";

const Amphitheater = () => {
  // useInactivityTimer();
    
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/trainingbuilding"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          AMPHITHEATER
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/amphitheater.png" 
        alt="Amphitheater Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
          The Amphitheater is a dynamic outdoor venue designed for performances, assemblies, and community gatherings at the JTLC site. With tiered seating and an open stage, it provides a space for creative expression, collaborative events, and cultural showcases under the open sky.
        </p>
    </div>
  );
};

export default Amphitheater;
