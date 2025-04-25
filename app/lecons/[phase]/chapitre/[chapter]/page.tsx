"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { phasesData } from "@/data/phaseData";
import useLessonRead from "@/utils/useLessonRead";
import useQcmStats from "@/utils/useQcmStats";
import { ArrowLeft } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ChapterPage({
  params,
}: {
  params: { phase: string; chapter: string };
}) {
  const { phase, chapter: chapterSlug } = params;
  const { groupBy, getSuccessRate } = useQcmStats();
  const { isLessonRead } = useLessonRead();

  const currentPhase = phasesData.find(
    (p) => p.category.toLowerCase() === phase.toLowerCase()
  );

  const currentChapter = currentPhase?.subCards.find(
    (c) => c.slug.toLowerCase() === chapterSlug
  );

  if (!currentPhase || !currentChapter) {
    return <div>Chapitre ou phase introuvable</div>;
  }

  const firstUnreadIndex = currentChapter.lessons.findIndex(
    (lesson) => !isLessonRead(lesson.slug)
  );

  const totalLessons = currentChapter.lessons.length;
  const readCount = currentChapter.lessons.filter((lesson) =>
    isLessonRead(lesson.slug)
  ).length;
  const progressPercent = Math.round((readCount / totalLessons) * 100);

  const statsByLesson = groupBy("lessonSlug");

  // Trouver l'index du chapitre actuel dans la phase
  const chapterIndex = currentPhase.subCards.findIndex(
    (c) => c.slug.toLowerCase() === chapterSlug.toLowerCase()
  );

  // Trouver le chapitre suivant
  const nextChapter = currentPhase.subCards[chapterIndex + 1];
  const nextChapterFirstLesson = nextChapter?.lessons?.[0];

  return (
    <main className="max-w-7xl mx-auto py-12 px-6">
      <div className="my-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/lecons`}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:text-foreground  transition-colors" />
                Retour au thème
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-muted-foreground">
                {currentChapter.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="text-4xl font-bold mb-4">{currentChapter.title}</h1>

      <p className="text-gray-700 mb-6">
        {currentChapter.keyConcepts?.join(" • ")}
      </p>

      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {readCount} / {totalLessons} leçons complétées ({progressPercent}%)
        </p>
      </div>

      <div className="hidden md:grid grid-cols-[3fr_0.5fr_0.5fr_1fr] gap-4 font-semibold text-sm border-b border-gray-300 pb-2 py-7 mb-4">
        <div>Leçons</div>
        <div className="justify-self-center">Durée</div>
        <div className="justify-self-center">QCM réussite</div>
      </div>

      <ul className="divide-y divide-dashed divide-gray-300 ">
        {currentChapter.lessons.map((lesson, index) => {
          const isCompleted = isLessonRead(lesson.slug);
          const isNext = index === firstUnreadIndex;

          const statusColor = isCompleted
            ? "bg-green-100 text-green-800"
            : isNext
            ? "bg-blue-100 text-blue-800"
            : "bg-gray-100 text-gray-600";

          const lessonStats = statsByLesson?.[lesson.slug];
          const qcmRate = getSuccessRate(lessonStats);

          return (
            <li
              key={lesson.slug}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-7 gap-4 md:grid grid-cols-[3fr_0.5fr_0.5fr_1fr]"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-2 rounded-full text-sm font-semibold ${statusColor}`}
                >
                  Leçon {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{lesson.title}</h3>
                </div>
              </div>

              <p className="text-sm text-gray-500 justify-self-center">
                {lesson.duration}
              </p>

              <p className="justify-self-center text-sm">
                {qcmRate === null ? (
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
                  <span className="text-red-600 font-semibold">{qcmRate}%</span>
                )}
              </p>

              <div className="flex items-center gap-2 mt-2 md:mt-0 justify-self-end">
                <Link
                  href={`/lecons/${phase}/chapitre/${chapterSlug}/${lesson.slug}`}
                >
                  <Button variant="outline">
                    {isCompleted ? "Revoir" : "Commencer"}
                  </Button>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Navigation bas de page */}
      <div className="mt-12 flex justify-between border-t pt-6">
        <Link href={`/lecons`}>
          <Button variant="outline">← Retour au thèmes</Button>
        </Link>

        {nextChapter && nextChapterFirstLesson && (
          <Link href={`/lecons/${phase}/chapitre/${nextChapter.slug}`}>
            <Button variant="secondary">
              Chapitre suivant : {nextChapter.title} →
            </Button>
          </Link>
        )}
      </div>
    </main>
  );
}
