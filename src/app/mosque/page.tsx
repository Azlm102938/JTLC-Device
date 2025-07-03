'use client';

import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { useInactivityTimer } from "@/app/components/Timer";
import BackButton from "@/app/components/backButton";

const Mosque = () => {
  // useInactivityTimer();

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
       <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          MOSQUE
        </h1>
      </div>
      
      {/* Image */}
      <Image 
        src="/mosque.png" 
        alt="Mosque Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
         The mosque at JTLC offers a peaceful space for prayer, reflection, and spiritual gatherings. 
         It serves as a welcoming place for students, staff, and visitors to fulfill their religious practices in a calm and respectful environment.
        </p>
    </div>
  );
};

export default Mosque;
