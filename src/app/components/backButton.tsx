'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href?: string;
}

const BackButton = ({ 
  href = "/dashboard", 
}: BackButtonProps) => {
  return (
    <div className="absolute left-0">
      <Link href={href} className="flex items-center text-black group">
        <div className="p-2 rounded-full transition-colors duration-200 group-hover:bg-gray-200">
          <ArrowLeft className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
