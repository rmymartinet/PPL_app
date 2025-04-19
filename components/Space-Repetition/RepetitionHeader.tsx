"use client";

import { Button } from "@/components/ui/button";
import { AddLessonDialog } from "@/components/Space-Repetition/AddLessonDialog";
import { SpaceRepetitionRow } from "@/types/types";

type Props = {
  flattenedLessons: {
    title: string;
    slug: string;
    phase: string;
    subCard: string;
  }[];
  data: SpaceRepetitionRow[];
  viewMode: "table" | "calendar";
  setViewMode: (mode: "table" | "calendar") => void;
  setData: (data: SpaceRepetitionRow[]) => void;
};

export default function RepetitionHeader({
  flattenedLessons,
  data,
  viewMode,
  setViewMode,
  setData,
}: Props) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
      <h1 className="text-3xl font-bold">🧠 Répétition espacée</h1>
      <div className="flex gap-2">
        <AddLessonDialog
          allLessons={flattenedLessons}
          existingSubjects={data
            .map((d) => d.subject)
            .filter((subject): subject is string => subject !== undefined)}
          onAdd={(newRow) => setData([...data, newRow])}
        />
        <Button
          variant={viewMode === "table" ? "default" : "outline"}
          onClick={() => setViewMode("table")}
        >
          📋 Vue tableau
        </Button>
        <Button
          variant={viewMode === "calendar" ? "default" : "outline"}
          onClick={() => setViewMode("calendar")}
        >
          📅 Vue calendrier
        </Button>
      </div>
    </div>
  );
}
