'use client';

import { useInactivityTimer } from "@/app/components/Timer";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UpperGround = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">UPPER GROUND</h1>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-6">
        {/* LG-Classroom-1 */}
        <Link
          href="/trainingbuilding/UG/classroom1"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/UG1.png"
              alt="Classroom"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">UG-CLASSROOM-1</span>
          </div>
        </Link>

        {/* LG-Classroom-2 */}
        <Link
          href="/trainingbuilding/UG/classroom2"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/UG2.png"
              alt="Classroom"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">UG-CLASSROOM-2</span>
          </div>
        </Link>

        {/* LG-Classroom-3 */}
        <Link
          href="/trainingbuilding/UG/classroom3"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/classroom.png"
              alt="Classroom"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">UG-CLASSROOM-3</span>
          </div>
        </Link>

         {/* LG-Classroom-4 */}
         <Link
          href="/trainingbuilding/UG/classroom4"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/classroom.png"
              alt="Classroom"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">UG-CLASSROOM-4</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UpperGround;
