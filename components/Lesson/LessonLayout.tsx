// components/LessonLayout.tsx
"use client";

import LessonContent from "@/components/Lesson/LessonContent";
import LessonFooter from "@/components/Lesson/LessonFooter";
import LessonObjectives from "@/components/Lesson/LessonObjectives";
import QCMSection from "@/components/Lesson/QCMSection";
import TableOfContents from "@/components/TableOfContents";
import LessonEnd from "./LessonEnd";
import { useState } from "react";
import LessonResum from "./LessonResum";

interface QCMAnswer {
  label: string;
  correct: boolean;
}

interface QCMItem {
  question: string;
  answers: QCMAnswer[];
}

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
          <QCMSection qcmList={qcm} onSuccess={() => setQcmValidated(true)} />
        </div>
        <LessonEnd
          isQcmValidated={qcmValidated}
          onRetryQcm={() => setQcmValidated(false)}
          nextLessonTitle="Les masses d'air"
          nextLessonSlug="masses-d-air"
        />
      </main>
    </div>
  );
}
