'use client';

import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { useInactivityTimer } from "@/app/components/Timer";
import BackButton from "@/app/components/backButton";

const SportCenter = () => {
  // useInactivityTimer();

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          SPORT CENTER
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/sportCenter.png" 
        alt="Sport Center Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />    

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
         The sport center at JTLC provides a dynamic space for physical activities and wellness. Equipped with facilities for various sports, it promotes a healthy and active lifestyle among students, staff, and visitors through exercise, training, and recreational games.
        </p>
    </div>
  );
};

export default SportCenter;
