'use client';

import Image from "next/image";
// import { useInactivityTimer } from "@/app/components/Timer";
import BackButton from "../components/backButton";

const Ballroom = () => {
  // useInactivityTimer();

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Header with back button and title */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          BALLROOM
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/ballroom.png" 
        alt="Ballroom Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        The ballroom at JTLC is a spacious and elegant venue designed for events, ceremonies, and large gatherings. 
        It&apos;s equipped to host formal occasions, conferences, and celebrations, providing a versatile environment for memorable experiences.
      </p>
    </div>
  );
};

export default Ballroom;
