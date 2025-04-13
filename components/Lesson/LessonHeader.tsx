"use client";

import Link from "next/link";
import { FaArrowLeft, FaRegClock, FaChartBar } from "react-icons/fa";
import Image from "next/image";
import clsx from "clsx";

type LessonHeaderProps = {
  title: string | string[];
  subtitle: string;
  category: string;
  themeBg?: string; // ex: "meteo", "navigation", etc.
  duration?: string;
  level?: string;
  imageUrl?: string;
  progressStatus?: "not-started" | "in-progress" | "done";
};

// Couleurs de fond par thème
const themeColors: Record<string, string> = {
  meteo: "bg-blue-100",
  navigation: "bg-yellow-100",
  moteur: "bg-orange-100",
  reglementation: "bg-red-100",
  radio: "bg-purple-100",
  default: "bg-gray-100",
};

// Couleurs de bouton par thème
const buttonColors: Record<string, string> = {
  meteo: "bg-blue-700 hover:bg-blue-800",
  navigation: "bg-yellow-600 hover:bg-yellow-700",
  moteur: "bg-orange-600 hover:bg-orange-700",
  reglementation: "bg-red-600 hover:bg-red-700",
  radio: "bg-purple-600 hover:bg-purple-700",
  default: "bg-green-700 hover:bg-green-800",
};

const LessonHeader = ({
  title,
  subtitle,
  category,
  themeBg = "default",
  duration = "6 min",
  level = "Débutant",
  imageUrl = "/images/prof.jpg",
  progressStatus = "not-started",
}: LessonHeaderProps) => {
  return (
    <section
      className={clsx(
        "w-full py-16 px-6 md:px-12 lg:px-20",
        themeColors[themeBg] || themeColors.default
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Texte */}
        <div className="w-full lg:w-1/2">
          <Link
            href="/lecons"
            className="flex items-center text-sm text-gray-600 hover:text-black mb-4"
          >
            <FaArrowLeft className="mr-2" /> Tous les cours
          </Link>

          <div className="uppercase text-sm text-green-700 font-semibold mb-2 tracking-wide">
            {category}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            {title}
          </h1>

          <p className="text-gray-700 mb-6">{subtitle}</p>

          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
            <span className="flex items-center gap-1">
              <FaChartBar /> {level}
            </span>
            <span className="flex items-center gap-1">
              <FaRegClock /> {duration}
            </span>
          </div>

          {/* Bouton ou texte en fonction du status */}
          {progressStatus !== "done" && (
            <Link
              href="#start"
              className={clsx(
                "inline-block text-white text-sm px-5 py-2 rounded-md font-semibold transition",
                buttonColors[themeBg] || buttonColors.default
              )}
            >
              {progressStatus === "in-progress" ? "Continuer" : "Commencer"}
            </Link>
          )}

          {progressStatus === "done" && (
            <span className="inline-block text-green-700 font-semibold text-sm">
              ✅ Cours terminé
            </span>
          )}
        </div>

        {/* Image */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md">
            <Image
              src={imageUrl}
              alt="Formateur"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonHeader;
