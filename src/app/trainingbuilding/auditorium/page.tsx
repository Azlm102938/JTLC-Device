'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useInactivityTimer } from "@/app/components/Timer";

const Auditorium = () => {
  useInactivityTimer(); 

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="absolute bottom-150 left-10  flex flex-col items-center text-black group">
        <Link href="/trainingbuilding" className="flex flex-col items-center">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
        <span className="text-sm font-semibold">Back</span>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        AUDITORIUM
      </h1>

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
