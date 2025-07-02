'use client';

// import { useInactivityTimer } from "../components/Timer";
// import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DORMB = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10">DORM-B</h1>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-6">
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

        {/* Type C Button */}
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

        {/* Pool Button */}
        <Link
          href="/dorm-B/swimmingPool"
          className="w-[250px] h-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/pool.png"
              alt="Swimming Pool"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">Swimming Pool</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DORMB;
