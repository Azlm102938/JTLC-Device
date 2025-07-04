'use client';

// import { useInactivityTimer } from "@/app/components/Timer";
// import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/app/components/backButton";

const GroundFloor = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          GROUND FLOOR
        </h1>
      </div>

      {/* Buttons in a row with wrap */}
      <div className="grid grid-cols-2 gap-6">
        {/* Front Office */}
        <Link
          href="/trainingbuilding/GF/frontoffice"
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
            className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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

        {/* Teacher Room */}
        <Link
          href="/trainingbuilding/GF/teacherRoom"
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/teacherRoom.png"
              alt="Teacher Room"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">Teacher Room</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GroundFloor;
