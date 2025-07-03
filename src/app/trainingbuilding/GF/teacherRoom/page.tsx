'use client';

import Image from "next/image";
import BackButton from "@/app/components/backButton";
// import { useInactivityTimer } from "@/app/components/Timer";

const TeacherRoom = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/trainingbuilding/GF"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          TEACHER ROOM
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/teacherRoom.png" 
        alt="TeacherRoom Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        The teacher room at JTLC serves as a dedicated space for faculty to prepare lessons, collaborate with colleagues, and take breaks between classes. 
        It provides a quiet, comfortable, and professional environment that supports the daily needs of educators.
        </p>
    </div>
  );
};

export default TeacherRoom;
