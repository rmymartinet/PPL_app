"use client";

import Link from "next/link";
import { FaArrowLeft, FaRegClock, FaChartBar } from "react-icons/fa";
import Image from "next/image";

type LessonHeaderProps = {
  title: string | string[];
  subtitle: string;
  category: string;
  duration?: string;
  level?: string;
  imageUrl?: string;
  progressStatus?: "not-started" | "in-progress" | "done";
};

// Couleurs de bouton par thème
const buttonColors: Record<string, string> = {
  "phase-1": "bg-[#A0D2E9] hover:bg-[#89C9E5]",
  "phase-2": "bg-[#A6DDCB] hover:bg-[#92D4C0]",
  "phase-3": "bg-[#FFD0A0] hover:bg-[#FFBE80]",
  "phase-4": "bg-[#C4CAE8] hover:bg-[#B2B9E2]",
  "phase-5": "bg-[#FFE066] hover:bg-[#FFD633]",
  "phase-6": "bg-[#FF9E9E] hover:bg-[#FF8C8C]",
  "phase-7": "bg-[#C8EEE1] hover:bg-[#B4E7D8]",
  "phase-8": "bg-[#D9CFFA] hover:bg-[#CABEF5]",
  "phase-9": "bg-[#B3D8F9] hover:bg-[#A3D1F7]",
  "phase-10": "bg-[#F6CFCF] hover:bg-[#F2BFBF]",
  default: "bg-green-700 hover:bg-green-800",
};

const highlightColors = {
  "phase-1": "#CDEBF7", // bleu avion plus doux
  "phase-2": "#C3EBDD", // vert stabilité + feutré
  "phase-3": "#FFE2CC", // orange doux (radio, aérodrome)
  "phase-4": "#DEE2EF", // indigo carte désaturé
  "phase-5": "#FFF2B3", // jaune météo pastel
  "phase-6": "#FFC9C9", // rouge + rosé
  "phase-7": "#E0F5EC", // menthe planning très pâle
  "phase-8": "#E9E1FA", // lavande institution light
  "phase-9": "#D3E9FC", // bleu licence UE + subtil
  "phase-10": "#FAE3E3", // rose humain un peu moins bébé
};

const LessonHeader = ({
  title,
  subtitle,
  category,
  duration = "6 min",
  level = "Débutant",
  imageUrl = "/images/prof.jpg",
  progressStatus = "not-started",
}: LessonHeaderProps) => {
  return (
    <section
      className="w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: highlightColors[category] || "#f5f5f5" }}
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

          <div className="uppercase text-sm font-semibold mb-2 tracking-wide">
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
              className={
                "inline-block text-sm px-5 py-2 rounded-md font-semibold transition bg-white text-black"
              }
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
