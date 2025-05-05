'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const RnD = () => {
  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      {/* Back Button */}
      <div className="absolute top-6 left-12">
        <Link href="/dashboard" className="flex items-center text-black group">
          <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
            <ArrowLeft className="w-6 h-6" />
          </div>
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        RESEARCH AND DEVELOPMENT
      </h1>

      {/* Image */}
      <Image 
        src="/research.png" 
        alt="RnD Image" 
        width={600} 
        height={400} 
        className="rounded-lg shadow-lg mb-6 transition-transform duration-200 hover:scale-105"
      />

      {/* Description */}
        <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
         The Research and Development (RnD) area at JTLC is dedicated to innovation, experimentation, and the advancement of new ideas. 
         It provides the resources and environment for students and staff to collaborate on scientific projects, product development, and technological improvements.
        </p>
    </div>
  );
};

export default RnD;
