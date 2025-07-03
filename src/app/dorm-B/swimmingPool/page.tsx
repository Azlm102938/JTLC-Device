'use client';

import Image from "next/image";
import BackButton from "@/app/components/backButton";
// import { useInactivityTimer } from "@/app/components/Timer";

const Pool = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dorm-B"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          SWIMMING POOL
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/pool.png" 
        alt="Pool Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        The swimming pool at JTLC is a recreational and training facility designed for both relaxation and physical fitness. 
        It offers a clean, safe, and well-maintained environment where students and staff can enjoy swimming, practice water sports, or simply unwind.
        </p>
    </div>
  );
};

export default Pool;
