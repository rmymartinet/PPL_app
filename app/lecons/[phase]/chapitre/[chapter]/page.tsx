import { phasesData } from "@/data/phaseData";
import Link from "next/link";

export default function ChapterPage({
  params,
}: {
  params: { phase: string; chapter: string };
}) {
  const { phase, chapter: chapterSlug } = params;

  const currentPhase = phasesData.find(
    (p) => p.category.toLowerCase() === phase.toLowerCase()
  );

  const currentChapter = currentPhase?.subCards.find(
    (c) => c.slug.toLowerCase() === chapterSlug
  );

  if (!currentPhase || !currentChapter) {
    return <div>Chapitre ou phase introuvable</div>;
  }

  const completedCount = 2; // Tu peux remplacer ça plus tard par une donnée dynamique (ex: depuis DB)

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{currentChapter.title}</h1>
      <p className="text-gray-700 mb-6">
        {currentChapter.keyConcepts?.join(" • ")}
      </p>

      {/* Stepper horizontal */}
      <div className="relative flex items-center justify-between mb-10">
        {/* Ligne horizontale */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 z-0 translate-y-[-50%]" />
        {currentChapter.lessons.map((_, index) => {
          const isDone = index < completedCount;
          const isCurrent = index === completedCount;

          return (
            <div
              key={index}
              className={`relative z-10 w-10 h-10 rounded-full text-sm font-bold flex items-center justify-center shadow-md
                ${
                  isDone
                    ? "bg-green-500 text-white"
                    : isCurrent
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
            >
              {isDone ? "✓" : index + 1}
            </div>
          );
        })}
      </div>

      {/* Liste des leçons */}
      <ul className="space-y-4">
        {currentChapter.lessons.map((lesson, index) => {
          const isCompleted = index < completedCount;
          const isNext = index === completedCount;

          let bgColor = "";
          let statusText = "";

          if (isCompleted) {
            bgColor = "bg-green-100";
            statusText = "✅ Relire";
          } else if (isNext) {
            bgColor = "bg-blue-100";
            statusText = "🔵 Continuer";
          } else {
            bgColor = "opacity-60";
            statusText = "Commencer";
          }

          return (
            <li key={lesson.slug}>
              <Link
                href={`/lecons/${phase}/chapitre/${chapterSlug}/${lesson.slug}`}
                className={`block p-4 border rounded-xl shadow-sm transition-all hover:shadow-md hover:scale-[1.01] ${bgColor}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {lesson.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {statusText}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  ⏱ {lesson.duration} • 🎯 {lesson.level}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
