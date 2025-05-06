'use client';

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GroundFloor = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="absolute bottom-6 left-6  flex flex-col items-center text-black group">
        <Link href="/trainingbuilding" className="flex flex-col items-center">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
        <span className="ml-2 text-sm font-semibold">Back</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">GROUND FLOOR</h1>

      {/* Buttons in a row with wrap */}
      <div className="flex flex-wrap justify-center items-center gap-6">

        {/* Front Office */}
        <Link
          href="/trainingbuilding/GF/frontoffice"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/frontOffice.png"
              alt="Front Office"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-base font-semibold text-gray-800">Front Office</span>
          </div>
        </Link>

        {/* GF-Classroom-1 */}
        <Link
          href="/trainingbuilding/GF/classroom1"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/classroom.png"
              alt="GF-Classroom-1"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-base font-semibold text-gray-800">GF-Classroom-1</span>
          </div>
        </Link>

        {/* GF-Classroom-2 */}
        <Link
          href="/trainingbuilding/GF/classroom2"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/classroom.png"
              alt="GF-Classroom-2"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-base font-semibold text-gray-800">GF-Classroom-2</span>
          </div>
        </Link>

        {/* GF-Classroom-3 */}
        <Link
          href="/trainingbuilding/GF/classroom3"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/classroom.png"
              alt="GF-Classroom-3"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-base font-semibold text-gray-800">GF-Classroom-3</span>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default GroundFloor;
