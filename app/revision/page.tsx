"use client";

import { useMemo, useState } from "react";
import { DataTable } from "@/components/Space-Repetition/DataTable";
import { FilterAndSortControls } from "@/components/Space-Repetition/FilterAndSortControls";
import { CalendarView } from "@/components/Space-Repetition/CalendarView";
import { SpaceRepetitionRow } from "@/types/types";
import { Columns } from "@/components/Columns";
import { Separator } from "@/components/ui/separator";
import RevisionCharts from "@/components/Charts/RevisionCharts";
import RepetitionIntro from "@/components/Space-Repetition/RepetitionIntro";
import RepetitionVisualHelp from "@/components/Space-Repetition/RepetitionVisualHelp";
import RepetitionCTA from "@/components/Space-Repetition/RepetitionCTA";
import RepetitionHeader from "@/components/Space-Repetition/RepetitionHeader";
import { useRepetitionLogic } from "@/utils/useRepetitionLogic";
import { phasesData } from "@/data/phaseData";
import { useDebounce } from "@/utils/useDebounce";

export default function RepetitionPage() {
  const [viewMode, setViewMode] = useState<"table" | "calendar">("table");
  const [filter, setFilter] = useState<"all" | "today">("all");
  const [selectedReps, setSelectedReps] = useState<number[]>([]);
  const [search, setSearch] = useState("");

  const allLessons = useMemo(() => {
    return phasesData.flatMap((phase) =>
      phase.subCards.flatMap((subCard) =>
        subCard.lessons.map((lesson) => ({
          title: lesson.title,
          slug: lesson.slug,
          duration: lesson.duration,
          level: lesson.level,
          phase: phase.title,
          subCard: subCard.title,
          lastLearned: lesson.lastLearned ?? "",
          repetitions: lesson.repetitions ?? [false, false, false, false],
        }))
      )
    );
  }, []);

  const mappedLessons = useMemo<SpaceRepetitionRow[]>(() => {
    return allLessons.map((lesson, index) => ({
      id: `${index}`,
      subject: lesson.title,
      lastLearned: lesson.lastLearned,
      nextRevision: lesson.nextRevision ?? "", // calculable plus tard
      repetitions: lesson.repetitions,
    }));
  }, [allLessons]);

  const debouncedSearch = useDebounce(search, 300);

  const [data, setData] = useState<SpaceRepetitionRow[]>(mappedLessons);

  const { filteredData, handleSort, flattenedLessons } = useRepetitionLogic(
    data,
    search,
    debouncedSearch,
    selectedReps,
    filter,
    setData
  );
  return (
    <section className="min-h-screen flex flex-col gap-20 justify-center items-center mt-56 md:px-8">
      <h1 className="font-bold text-9xl">Révision</h1>

      <div className="max-w-6xl">
        <RepetitionIntro />
        <RepetitionVisualHelp />
        <RepetitionCTA />
        <RepetitionHeader
          flattenedLessons={flattenedLessons}
          data={data}
          viewMode={viewMode}
          setViewMode={setViewMode}
          setData={setData}
        />

        <Separator className="my-10" />

        {viewMode === "table" ? (
          <>
            <FilterAndSortControls
              currentFilter={filter}
              setFilter={setFilter}
              onSortChange={handleSort}
              selectedReps={selectedReps}
              setSelectedReps={setSelectedReps}
              search={search}
              setSearch={setSearch}
            />
            <DataTable
              columns={Columns({ data, setData })}
              data={filteredData}
            />
          </>
        ) : (
          <CalendarView data={data} />
        )}
        <RevisionCharts />
      </div>
    </section>
  );
}
