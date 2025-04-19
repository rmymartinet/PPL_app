import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { searchLessons } from "@/utils/searchLessons";

export function LessonSearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<
    { title: string; slug: string; phase: string; subCard: string }[]
  >([]);

  useEffect(() => {
    if (search.trim().length > 0) {
      const found = searchLessons(search);
      setResults(found);
    } else {
      setResults([]);
    }
  }, [search]);

  return (
    <div className="w-full max-w-md space-y-4">
      <Input
        placeholder="Rechercher une leçon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full"
      />

      {results.length > 0 && (
        <ul className="bg-white border rounded p-2 space-y-1">
          {results.map((lesson) => (
            <li key={lesson.slug} className="text-sm">
              <strong>{lesson.title}</strong>
              <div className="text-xs text-muted-foreground">
                {lesson.phase} – {lesson.subCard}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
