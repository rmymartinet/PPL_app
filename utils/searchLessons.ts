import { phasesData } from "@/data/phaseData";

export const searchLessons = (query: string) => {
  const results: {
    title: string;
    slug: string;
    phase: string;
    subCard: string;
  }[] = [];

  phasesData.forEach((phase) => {
    phase.subCards.forEach((subCard) => {
      subCard.lessons.forEach((lesson) => {
        if (lesson.title.toLowerCase().includes(query.toLowerCase())) {
          results.push({
            title: lesson.title,
            slug: lesson.slug,
            phase: phase.title,
            subCard: subCard.title,
          });
        }
      });
    });
  });

  return results;
};
