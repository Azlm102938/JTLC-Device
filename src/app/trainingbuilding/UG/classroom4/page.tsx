'use client';

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const UGClassroom4 = () => {

    const router = useRouter();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
    // Fungsi untuk mereset timer
    const resetTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        router.push("/dashboard");
      }, 60000); // 60 detik
    };
  
    useEffect(() => {
      const events = ['mousemove', 'mousedown', 'keypress', 'scroll', 'touchstart'];
  
      events.forEach((event) => window.addEventListener(event, resetTimer));
      resetTimer(); // Jalankan pertama kali saat komponen dimount
  
      return () => {
        events.forEach((event) => window.removeEventListener(event, resetTimer));
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="absolute bottom-150 left-6  flex flex-col items-center text-black group">
        <Link href="/trainingbuilding/UG" className="flex flex-col items-center">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
        <span className="text-sm font-semibold">Back</span>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        UG CLASSROOM 4
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

export default UGClassroom4;
