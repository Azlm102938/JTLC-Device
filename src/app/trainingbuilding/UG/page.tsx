'use client';

// import { useInactivityTimer } from "@/app/components/Timer";
// import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/app/components/backButton";

const UpperGround = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/trainingbuilding/UG"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          UG - CLASSROOM 4
        </h1>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-6">
        {/* LG-Classroom-1 */}
        <Link
          href="/trainingbuilding/UG/classroom1"
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
