'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href?: string;
  label?: string;
}

const BackButton = ({ 
  href = "/dashboard", 
  label = "Back", 
}: BackButtonProps) => {
  return (
    <div className={`absolute bottom-150 left-10 flex flex-col items-center text-black group`}>
      <Link href={href} className="flex flex-col items-center">
        <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
          <ArrowLeft className="w-6 h-6" />
        </div>
      </Link>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  );
};

export default BackButton;
