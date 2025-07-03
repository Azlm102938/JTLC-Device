'use client';

import Image from "next/image";
import BackButton from "@/app/components/backButton";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { useInactivityTimer } from "@/app/components/Timer";

const UGClassroom1 = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/trainingbuilding/UG"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          UG - CLASSROOM 1
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/UG1.png"  // Update this to the correct path to the Classroom 1 image
        alt="Classroom Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        Classroom is a modern learning space equipped with digital whiteboards, projectors, and comfortable seating. It is used for various training sessions and academic programs conducted at JTLC.
      </p>
    </div>
  );
};

export default UGClassroom1;
