'use client';
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/app/components/backButton";

const TrainingBuilding = () => {
  // useInactivityTimer();

  return (
    <div className="min-h-screen bg-white px-4 pt-6 pb-12 flex flex-col items-center relative">
      <div className="relative w-full flex items-center mb-6">
      <BackButton href="/dashboard"/>
        <h1 className="mx-auto text-3xl font-bold text-gray-900">
          TRAINING BUILDING
        </h1>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-6">
        {/* LG Button */}
        <Link
          href="/trainingbuilding/LG"
           className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/lg.png"
              alt="LG"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">LOWER GROUND</span>
          </div>
        </Link>

        {/* GF Button */}
        <Link
          href="/trainingbuilding/GF"
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/gf.png"
              alt="GF"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">GROUND FLOOR</span>
          </div>
        </Link>

        {/* UG Button */}
        <Link
          href="/trainingbuilding/UG"
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/ug.png"
              alt="UG"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">UPPER GROUND</span>
          </div>
        </Link>

        {/* Auditorium Button */}
        <Link
          href="/trainingbuilding/auditorium"
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/auditorium.png"
              alt="Auditorium"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">AUDITORIUM</span>
          </div>
        </Link>

        {/* Amphitheater Button */}
        <Link
          href="/trainingbuilding/amphitheater"
          className="w-full aspect-[5/6] bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
        >
          <div className="relative w-full h-4/5">
            <Image
              src="/amphitheater.png"
              alt="Amphitheater"
              fill
              className="object-cover transition duration-300 group-hover:opacity-90"
            />
          </div>
          <div className="w-full h-1/5 flex items-center justify-center bg-white">
            <span className="text-xl font-semibold text-gray-800">AMPHITHEATER</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrainingBuilding;
