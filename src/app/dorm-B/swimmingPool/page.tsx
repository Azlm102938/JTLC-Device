'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useInactivityTimer } from "@/app/components/Timer";

const Pool = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      {/* <div className="absolute bottom-150 left-10  flex flex-col items-center text-black group">
        <Link href="/dorm-B" className="flex flex-col items-center">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
        <span className="text-sm font-semibold">Back</span>
      </div> */}

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        SWIMMING POOL
      </h1>

      {/* Image */}
      <Image 
        src="/pool.png" 
        alt="Pool Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
        The swimming pool at JTLC is a recreational and training facility designed for both relaxation and physical fitness. 
        It offers a clean, safe, and well-maintained environment where students and staff can enjoy swimming, practice water sports, or simply unwind.
        </p>
    </div>
  );
};

export default Pool;
