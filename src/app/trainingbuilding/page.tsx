'use client';

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TrainingBuilding = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white px-6 py-10 relative">

      {/* Back Button */}
      <div className="absolute top-6 left-12">
        <Link href="/dashboard" className="group">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6 text-black" />
          </div>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">TRAINING BUILDING</h1>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-6">
        {/* LG Button */}
        <Link
          href="/trainingbuilding/LG"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/lg.png"
              alt="LG"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">LOWER GROUND</span>
          </div>
        </Link>

        {/* GF Button */}
        <Link
          href="/trainingbuilding/GF"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/gf.png"
              alt="GF"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">GROUND FLOOR</span>
          </div>
        </Link>

        {/* UG Button */}
        <Link
          href="/trainingbuilding/UG"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/ug.png"
              alt="UG"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">UPPER GROUND</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrainingBuilding;
