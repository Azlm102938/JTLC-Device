'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const LGClassroom3 = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
    {/* Back Button */}
    <div className="absolute bottom-6 left-6  flex flex-col items-center text-black group">
      <Link href="/trainingbuilding/LG" className="flex flex-col items-center">
        <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
          <ArrowLeft className="w-6 h-6" />
        </div>
      </Link>
      <span className="ml-2 text-sm font-semibold">Back</span>
    </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        LG CLASSROOM 3
      </h1>

      {/* Image */}
      <Image 
        src="/classroom.png"  // Update this to the correct path to the Classroom 1 image
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

export default LGClassroom3;
