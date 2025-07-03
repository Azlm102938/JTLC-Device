'use client';

import Image from "next/image";
import BackButton from "../components/backButton";
// import { useInactivityTimer } from "../components/Timer";

const Cafetaria = () => {
    // useInactivityTimer();
     
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          CAFETARIA
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/cafetaria.png" 
        alt="Cafetaria Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
            The cafeteria at JTLC offers a comfortable space for students, staff, and visitors to enjoy meals and take breaks. 
            With a variety of food and beverage options, it&apos;s a central spot for dining and socializing between activities.
        </p>
    </div>
  );
};

export default Cafetaria;
