'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useInactivityTimer } from "@/app/components/Timer";

type Props = {
  title?: string;
};

const OnProgress = ({ title = "Direction" }: Props) => {
  // useInactivityTimer("/dashboard", 60000);

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Moved lower */}
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

export default OnProgress;
