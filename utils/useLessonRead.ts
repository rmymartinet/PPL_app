import { useEffect, useState } from "react";

export default function useLessonRead() {
  const [lessonReadSlugs, setLessonReadSlugs] = useState<string[]>([]);

  useEffect(() => {
    const fetchReadLessons = async () => {
      try {
        const res = await fetch("/api/lesson/read");
        const data = await res.json();
        setLessonReadSlugs(data.lessonSlugs || []);
      } catch (err) {
        console.error("Erreur lors du chargement des leçons lues :", err);
      }
    };

    fetchReadLessons();
  }, []);

  const isLessonRead = (slug: string) => lessonReadSlugs.includes(slug);

  const getReadLessonsInChapter = (lessons: { slug: string }[]) =>
    lessons.filter((l) => lessonReadSlugs.includes(l.slug));

  return {
    lessonReadSlugs,
    isLessonRead,
    getReadLessonsInChapter,
  };
}
