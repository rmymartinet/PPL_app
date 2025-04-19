import { phasesData } from "@/data/phaseData";
import { useParams } from "next/navigation";

export function useNextLesson() {
  const params = useParams();
  const { phase, chapter, lesson } = params;

  const normalizedPhase = phase.toLowerCase();
  const transformedPhase =
    normalizedPhase.charAt(0).toUpperCase() + normalizedPhase.slice(1);

  const phaseIndex = phasesData.findIndex(
    (p) => p.category === transformedPhase
  );
  if (phaseIndex === -1) return null;

  const currentPhase = phasesData[phaseIndex];
  const chapterIndex = currentPhase.subCards.findIndex(
    (c) => c.slug === chapter
  );
  if (chapterIndex === -1) return null;

  const currentChapter = currentPhase.subCards[chapterIndex];
  const lessonIndex = currentChapter.lessons.findIndex(
    (l) => l.slug === lesson
  );
  if (lessonIndex === -1) return null;

  // Cas 1 : leçon suivante
  if (lessonIndex + 1 < currentChapter.lessons.length) {
    const next = currentChapter.lessons[lessonIndex + 1];
    return {
      phase,
      chapter,
      slug: next.slug,
      title: next.title,
      type: "lesson", // 🔁
    };
  }

  // Cas 2 : chapitre suivant
  if (chapterIndex + 1 < currentPhase.subCards.length) {
    const nextChapter = currentPhase.subCards[chapterIndex + 1];
    if (nextChapter.lessons.length > 0) {
      return {
        phase,
        chapter: nextChapter.slug,
        slug: nextChapter.lessons[0].slug,
        title: nextChapter.lessons[0].title,
        type: "chapter", // 🔁
      };
    }
  }

  // Cas 3 : phase suivante
  if (phaseIndex + 1 < phasesData.length) {
    const nextPhase = phasesData[phaseIndex + 1];
    if (
      nextPhase.subCards.length > 0 &&
      nextPhase.subCards[0].lessons.length > 0
    ) {
      return {
        phase: nextPhase.category,
        chapter: nextPhase.subCards[0].slug,
        slug: nextPhase.subCards[0].lessons[0].slug,
        title: nextPhase.subCards[0].lessons[0].title,
        type: "phase", // 🔁
      };
    }
  }

  return null;
}
