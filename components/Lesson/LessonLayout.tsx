// components/LessonLayout.tsx
"use client";

import LessonContent from "@/components/Lesson/LessonContent";
import LessonFooter from "@/components/Lesson/LessonFooter";
import LessonObjectives from "@/components/Lesson/LessonObjectives";
import QCMSection from "@/components/Lesson/QCMSection";
import TableOfContents from "@/components/TableOfContents";
import LessonEnd from "./LessonEnd";
import { useEffect, useMemo, useState } from "react";
import LessonResum from "./LessonResum";
import { useNextLesson } from "@/utils/useNextLesson";
import { QCMItem } from "@/types/types";
import { usePathname } from "next/navigation";

export default function LessonLayout({
  htmlContent,
  toc,
  objectives,
  summary,
  memo,
  qcm,
}: {
  htmlContent: string;
  toc: string[];
  objectives: string[];
  summary: string;
  memo?: string;
  qcm: QCMItem[];
}) {
  const [qcmValidated, setQcmValidated] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const nextLesson = useNextLesson();

  const pathname = usePathname();
  const currentLessonSlug = pathname.split("/").pop() || "";

  const nextLessonSlug = useMemo(() => {
    if (!nextLesson) return "/lecons";
    return `/${nextLesson.phase}/chapitre/${nextLesson.chapter}/${nextLesson.slug}`;
  }, [nextLesson]);

  useEffect(() => {
    const handleResetDone = () => {
      setIsReset(false);
    };

    window.addEventListener("qcmResetDone", handleResetDone);
    return () => window.removeEventListener("qcmResetDone", handleResetDone);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 bg-white">
      {/* Sidebar Table des matières */}
      <aside className="hidden lg:block w-1/4 pr-8">
        <TableOfContents items={toc} />
      </aside>

      {/* Corps de la leçon */}
      <main className="w-full lg:w-3/4">
        <div className="space-y-8">
          <LessonObjectives items={objectives} />
          <LessonResum summary={summary} />
          <LessonContent htmlContent={htmlContent} />
          {memo && <LessonFooter memo={memo} />}
          <QCMSection
            qcmList={qcm}
            isReset={isReset}
            onSuccess={() => setQcmValidated(true)}
          />
        </div>
        <LessonEnd
          isQcmValidated={qcmValidated}
          setIsReset={setIsReset}
          currentLessonSlug={currentLessonSlug}
          nextLessonSlug={nextLessonSlug}
        />
      </main>
    </div>
  );
}
