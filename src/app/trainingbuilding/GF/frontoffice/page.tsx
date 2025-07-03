'use client';

import Image from "next/image";
import BackButton from "@/app/components/backButton";
// import { useInactivityTimer } from "@/app/components/Timer";

const FrontOffice = () => {
  // useInactivityTimer();

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/trainingbuilding/GF"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          FRONT OFFICE
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/frontOffice.png" 
        alt="Front Office Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        This is the front office of the JTLC building. It serves as the first point of contact for visitors, offering assistance and direction.
        Staff at the front office help manage inquiries and ensure smooth operations for classrooms, dormitories, cafeteria, and other facilities.
      </p>
    </div>
  );
};

export default FrontOffice;
