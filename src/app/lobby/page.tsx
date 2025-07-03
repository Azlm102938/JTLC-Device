'use client';

import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import { useInactivityTimer } from "@/app/components/Timer";
import BackButton from "@/app/components/backButton";

const Lobby = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
     <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          LOBBY
        </h1>
      </div>

      {/* Image */}
      <Image 
        src="/lobby.jpeg" 
        alt="Lobby Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
      <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        This is the main lobby of the JTLC building. Here, visitors are welcomed and directed to their destinations.
        The lobby serves as the central point of access to different areas such as classrooms, dormitories, front office, and cafeteria.
      </p>
    </div>
  );
};

export default Lobby;
