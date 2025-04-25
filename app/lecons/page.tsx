"use client";

import { useState } from "react";
import { phasesData } from "@/data/phaseData";
import useLessonRead from "@/utils/useLessonRead";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import useQcmStats from "@/utils/useQcmStats";

import {
  FaPlane,
  FaSlidersH,
  FaBroadcastTower,
  FaMapMarkedAlt,
  FaCloudSun,
  FaTachometerAlt,
  FaClipboardList,
  FaUniversity,
  FaPassport,
  FaBrain,
} from "react-icons/fa";

function Page() {
  const { getReadLessonsInChapter, isLessonRead } = useLessonRead();
  const { groupBy, getSuccessRate } = useQcmStats();

  const statsByChapter = groupBy("chapterSlug");

  const highlightColors = {
    "phase-1": "#CDEBF7",
    "phase-2": "#C3EBDD",
    "phase-3": "#FFE2CC",
    "phase-4": "#DEE2EF",
    "phase-5": "#FFF2B3",
    "phase-6": "#FFC9C9",
    "phase-7": "#E0F5EC",
    "phase-8": "#E9E1FA",
    "phase-9": "#D3E9FC",
    "phase-10": "#FAE3E3",
  };

  const phaseIcons: Record<string, JSX.Element> = {
    "phase-1": <FaPlane />,
    "phase-2": <FaSlidersH />,
    "phase-3": <FaBroadcastTower />,
    "phase-4": <FaMapMarkedAlt />,
    "phase-5": <FaCloudSun />,
    "phase-6": <FaTachometerAlt />,
    "phase-7": <FaClipboardList />,
    "phase-8": <FaUniversity />,
    "phase-9": <FaPassport />,
    "phase-10": <FaBrain />,
  };

  const [selectedPhases, setSelectedPhases] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const toggleSelection = (
    value: string,
    selected: string[],
    setter: (s: string[]) => void
  ) => {
    setter(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  };

  return (
    <main className="max-w-7xl mx-auto py-12 px-6">
      <div className="flex flex-col gap-10 mt-20 mb-20">
        <h1 className="text-8xl font-bold text-center uppercase">Leçons</h1>
        <p className="text-center opacity-40 font-caveat text-3xl">
          Révise{" "}
          <span className="realistic-marker-highlight">chaque notion</span> en
          accédant aux leçons{" "}
          <span className="sketch-highlight">classées par PHASE</span>.
        </p>
      </div>

      {/* Filtres */}
      <div className="bg-white p-6 rounded-xl  mb-10">
        <div className="mb-4 text-lg font-semibold">Filtres</div>
        <div className="flex flex-col gap-4">
          {/* Phases */}
          <div>
            <div className="text-sm font-medium text-gray-600 mb-1">Phase</div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(highlightColors).map((phase) => (
                <button
                  key={phase}
                  onClick={() =>
                    toggleSelection(phase, selectedPhases, setSelectedPhases)
                  }
                  className={`px-3 py-1 rounded-full text-sm transition cursor-pointer ${
                    selectedPhases.includes(phase)
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {phase}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulté (visuel uniquement ici) */}
          <div>
            <div className="text-sm font-medium text-gray-600 mb-1">
              Difficulté
            </div>
            <div className="flex flex-wrap gap-2">
              {["Débutant", "Intermédiaire", "Avancé"].map((level) => (
                <button
                  key={level}
                  onClick={() =>
                    toggleSelection(level, selectedLevels, setSelectedLevels)
                  }
                  className={`px-3 py-1 rounded-full text-sm transition ${
                    selectedLevels.includes(level)
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      {/* Sections par phase */}
      {phasesData.map((theme, index) => {
        const allLessons = theme.subCards.flatMap((card) => card.lessons || []);
        const readLessons = getReadLessonsInChapter(allLessons);
        const totalLessons = allLessons.length;
        const readCount = readLessons.length;
        const progressPercent = Math.round((readCount / totalLessons) * 100);

        const phaseColor = highlightColors[theme.category] || "#f5f5f5";

        // 🔥 Filtres actifs → on affiche uniquement les phases sélectionnées
        if (
          selectedPhases.length > 0 &&
          !selectedPhases.includes(theme.category)
        ) {
          return null;
        }

        return (
          <section
            key={index}
            id={theme.category}
            className="scroll-mt-32 mb-20 p-10 rounded-4xl card-section bg-[#f5f5f53b]"
            style={{
              background: "#f5f5f53b",
              position: "relative",
              overflow: "hidden",
              zIndex: 0,
              "--phase-highlight": `${phaseColor}`,
            }}
          >
            <h2 className="text-3xl font-semibold mb-4">
              <span
                className={`circle-sketch-highlight circle-${theme.category}`}
              >
                <span className="text-black font-bold">
                  {theme.category.charAt(0).toUpperCase() +
                    theme.category.slice(1).toLowerCase()}
                </span>
              </span>
              <span className="font-medium"> : {theme.title}</span>
            </h2>

            {theme.subtitle && <p className="mb-2">{theme.subtitle}</p>}

            <div className="flex flex-wrap gap-2 my-6">
              {theme.subCards
                .flatMap((card) => card.keyConcepts || [])
                .slice(0, 4)
                .map((concept, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {concept}
                  </span>
                ))}
            </div>

            <div className="mb-8">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-green-500 h-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {readCount} / {totalLessons} leçons complétées (
                {progressPercent}%)
              </p>
            </div>

            <div className="hidden md:grid grid-cols-[3fr_0.5fr_0.5fr_0.5fr_1fr] gap-4 text-sm text-muted-foreground border-b border-gray-300 pb-2 mb-4">
              <div>Chapitres</div>
              <div className="justify-self-center">Leçons</div>
              <div className="justify-self-center">Durée</div>
              <div className="justify-self-center">QCM réussite</div>
            </div>

            <ul className="divide-y divide-dashed divide-gray-300">
              {theme.subCards.map((chapter, index) => {
                const lessons = chapter.lessons || [];
                const readCount = lessons.filter((l) =>
                  isLessonRead(l.slug)
                ).length;
                const isCompleted =
                  readCount === lessons.length && lessons.length > 0;
                const statusColor = isCompleted
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-600";
                const chapterStats = statsByChapter[chapter.slug] || [];
                const qcmRate = getSuccessRate(chapterStats);

                const qcmDisplay =
                  qcmRate === null ? (
                    <span className="text-gray-400">–</span>
                  ) : qcmRate >= 80 ? (
                    <span className="text-green-600 font-semibold">
                      {qcmRate}%
                    </span>
                  ) : qcmRate >= 50 ? (
                    <span className="text-yellow-600 font-semibold">
                      {qcmRate}%
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">
                      {qcmRate}%
                    </span>
                  );

                let buttonLabel = "Voir";
                if (readCount === lessons.length && lessons.length > 0) {
                  buttonLabel = "Revoir";
                } else if (readCount === 0) {
                  buttonLabel = "Commencer";
                } else {
                  buttonLabel = "Continue";
                }

                return (
                  <li
                    key={chapter.slug}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between py-7 gap-4 md:grid grid-cols-[3fr_0.5fr_0.5fr_0.5fr_1fr] hover:bg-gray-50 transition duration-200 ease-out"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`px-3 py-2 rounded-full text-sm font-semibold ${statusColor}`}
                      >
                        Chapitre {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold">
                          {chapter.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 justify-self-center">
                      {lessons.length}
                    </p>
                    <p className="text-sm text-gray-500 justify-self-center">
                      ~12min
                    </p>
                    <p className="text-sm justify-self-center">{qcmDisplay}</p>
                    <div className="flex items-center gap-2 mt-2 md:mt-0 justify-self-end">
                      <Link
                        href={`/lecons/${theme.category}/chapitre/${chapter.slug}`}
                        className="px-4 py-1.5 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition"
                      >
                        {buttonLabel}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </main>
  );
}

export default Page;
