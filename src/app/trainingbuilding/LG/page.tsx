'use client';

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LowerGround = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white px-6 py-10 relative">

      {/* Back Button */}
      <div className="absolute top-6 left-12">
        <Link href="/trainingbuilding" className="group">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6 text-black" />
          </div>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">LOWER GROUND</h1>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-6">
        {/* LG-Classroom-1 */}
        <Link
          href="/trainingbuilding/LG/classroom1"
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
            <span className="text-xl font-semibold text-gray-800">LG-CLASSROOM-1</span>
          </div>
        </Link>

        {/* LG-Classroom-2 */}
        <Link
          href="/trainingbuilding/LG/classroom2"
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
            <span className="text-xl font-semibold text-gray-800">LG-CLASSROOM-2</span>
          </div>
        </Link>

        {/* LG-Classroom-3 */}
        <Link
          href="/trainingbuilding/LG/classroom3"
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
            <span className="text-xl font-semibold text-gray-800">LG-CLASSROOM-3</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LowerGround;
