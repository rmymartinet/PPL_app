"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SpaceRepetitionRow } from "@/types/types";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Terminal } from "lucide-react";

type Props = {
  allLessons: {
    title: string;
    slug: string;
    phase: string;
    subCard: string;
  }[];
  existingSubjects: string[];
  onAdd: (newRow: SpaceRepetitionRow) => void;
};

export function AddLessonDialog({
  allLessons,
  existingSubjects,
  onAdd,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState<Props["allLessons"]>(allLessons);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const results = allLessons.filter((lesson) =>
      `${lesson.title} ${lesson.phase} ${lesson.subCard}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFiltered(results);
  }, [searchTerm, allLessons]);

  const handleSelect = (lesson: string) => {
    if (existingSubjects.includes(lesson)) {
      setShowAlert(true);
      return;
    }

    const today = new Date().toISOString().slice(0, 10);
    onAdd({
      id: crypto.randomUUID(),
      subject: lesson,
      lastLearned: today,
      nextRevision: today,
      repetitions: [false, false, false, false],
    });

    setIsOpen(false);
    setSearchTerm("");
    setShowAlert(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>➕ Ajouter une leçon</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="sr-only">Ajouter une leçon</DialogTitle>
        <h2 className="text-xl font-semibold mb-4">Choisir une leçon</h2>

        <Input
          placeholder="Rechercher une leçon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />

        {showAlert && (
          <Alert className="mb-4">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Cette leçon est déjà dans le tableau</AlertTitle>
            <AlertDescription>
              Vous ne pouvez pas ajouter la même leçon plusieurs fois.
              <br />
              Choisissez une autre leçon ou modifiez l&apos;existante.
            </AlertDescription>
          </Alert>
        )}

        <ul className="max-h-60 overflow-auto space-y-2">
          {filtered.map((lesson) => (
            <li
              key={lesson.slug}
              className="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(lesson.title)}
            >
              {lesson.title}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
