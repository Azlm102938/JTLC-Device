'use client';

// import { useInactivityTimer } from "../components/Timer";
// import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BackButton from "../components/backButton";

const DORMB = () => {
  // useInactivityTimer();
  
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          DORMITORY B
        </h1>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-6">
        {/* Type A Button */}
        <Link
          href="/dorm-B/Type-A"
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
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
