'use client';

import DirectionPage from "@/app/components/onProgress";
import BackButton from "@/app/components/backButton";

export default function Page() {
  return (
    <div className="relative min-h-screen px-4 py-6 bg-white">
     <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
      </div>

      {/* Header Text*/}
      {/* <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
        TITLE
      </h1> */}

      <DirectionPage title="Direction" />
    </div>
  );
}
