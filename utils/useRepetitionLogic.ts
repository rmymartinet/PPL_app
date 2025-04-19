import { useMemo } from "react";
import { SpaceRepetitionRow } from "@/types/types";
import { phasesData } from "@/data/phaseData";

type Filter = "all" | "today";

export function useRepetitionLogic(
  data: SpaceRepetitionRow[],
  search: string, // ← encore utile si tu veux afficher ce que tape l’utilisateur
  debouncedSearch: string, // ← pour filtrer efficacement
  selectedReps: number[],
  filter: Filter,
  setData: (rows: SpaceRepetitionRow[]) => void
) {
  const today = new Date().toISOString().slice(0, 10);

  const filteredData = useMemo(() => {
    let result = [...data];

    if (filter === "today") {
      result = result.filter((item) => item.nextRevision === today);
    }

    if (selectedReps.length > 0) {
      result = result.filter((item) => {
        const repCount = item.repetitions.filter(Boolean).length;
        return selectedReps.includes(repCount - 1);
      });
    }

    if (debouncedSearch.trim() !== "") {
      result = result.filter((item) =>
        (item.subject?.toLowerCase() ?? "").includes(
          debouncedSearch.toLowerCase()
        )
      );
    }

    return result;
  }, [data, filter, debouncedSearch, selectedReps]);

  const handleSort = (key: string, order: "asc" | "desc") => {
    const sorted = [...filteredData].sort((a, b) => {
      const aVal = a[key as keyof SpaceRepetitionRow];
      const bVal = b[key as keyof SpaceRepetitionRow];
      if (typeof aVal === "string" && typeof bVal === "string") {
        return order === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      return 0;
    });
    setData(sorted);
  };

  const flattenedLessons = useMemo(() => {
    return phasesData.flatMap((phase) =>
      phase.subCards.flatMap((subCard) =>
        subCard.lessons.map((lesson) => ({
          title: lesson.title,
          slug: lesson.slug,
          phase: phase.title,
          subCard: subCard.title,
        }))
      )
    );
  }, []);

  return {
    filteredData,
    handleSort,
    flattenedLessons,
  };
}
