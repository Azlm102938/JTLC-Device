'use client';

import BackButton from "@/app/components/backButton";
import Image from "next/image";

const Auditorium = () => {
  // useInactivityTimer(); 

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/trainingbuilding"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          AUDITORIUM
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/auditorium.png" 
        alt="Auditorium Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />    

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        The auditorium at JTLC is a versatile venue designed for large gatherings, including seminars, performances, presentations, and special events. It features modern audio-visual equipment and comfortable seating to support an engaging experience for all attendees.
        </p>
    </div>
  );
};

export default Auditorium;
