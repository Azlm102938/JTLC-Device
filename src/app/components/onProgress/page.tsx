'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useInactivityTimer } from "@/app/components/Timer";

const DirectionPage = ({ title = "Direction" }: { title?: string }) => {
  useInactivityTimer("/dashboard", 60000);

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="absolute bottom-150 left-10 flex flex-col items-center text-black group">
        <Link href="/dashboard" className="flex flex-col items-center">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
        <span className="text-sm font-semibold">Back</span>
      </div>

      {/* Moved lower with margin-top */}
      <div className="mt-32 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
          {title}
        </h1>

        <p className="text-center text-gray-700 max-w-xl text-lg leading-relaxed">
          🚧 This page is currently under construction.<br />
          Please check back later for updated direction features!
        </p>
      </div>
    </div>
  );
};

export default DirectionPage;
