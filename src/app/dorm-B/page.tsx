'use client';

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DORMB = () => {

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
      <div className="absolute bottom-125 left-6  flex flex-col items-center text-black group">
        <Link href="/dashboard" className="flex flex-col items-center">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
        <span className="text-sm font-semibold">Back</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">DORM-B</h1>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Type A Button */}
        <Link
          href="/dorm-B/Type-A"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/dormB-A.png"
              alt="Dorm B"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">Type A</span>
          </div>
        </Link>

        {/* Type B Button */}
        <Link
          href="/dorm-B/Type-B"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/dormB-B.png"
              alt="Dorm B"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">Type B</span>
          </div>
        </Link>

        {/* UG Button */}
        <Link
          href="/dorm-B/Type-C"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/dormB-C.png"
              alt="Dorm B"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">Type C</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DORMB;
