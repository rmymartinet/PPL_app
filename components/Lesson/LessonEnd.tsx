"use client";

import { FaArrowRight, FaRedo } from "react-icons/fa";
import { Button } from "../ui/button";
import { useNextLesson } from "@/utils/useNextLesson";
import { LessonEndProps } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LessonEnd = ({
  isQcmValidated,
  setIsReset,
  currentLessonSlug, // 👈 important
  nextLessonSlug,
}: LessonEndProps & { currentLessonSlug: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextLesson = useNextLesson();

  console.log("nextLesson", nextLesson);
  const router = useRouter();

  const buttonLabel =
    nextLesson?.type === "lesson"
      ? "Passer à la leçon suivante"
      : nextLesson?.type === "chapter"
      ? "Passer au chapitre suivant"
      : nextLesson?.type === "phase"
      ? "Passer au thème suivant"
      : "Parcours terminé ! 🎉";

  const destination = nextLesson ? `/lecons/${nextLessonSlug}` : "/lecons";

  const handleSummit = () => {
    setIsReset(true);
  };

  const handleLessonValidation = async () => {
    try {
      setIsSubmitting(true);
      await fetch("/api/lesson/mark-as-read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonSlug: currentLessonSlug }),
      });

      router.push(destination);
    } catch (error) {
      console.error("Erreur lors de la validation de la leçon :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-12 bg-gray-50 border-t pt-8 pb-12 text-center rounded-md w-full">
      {isQcmValidated ? (
        <>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎉 Bien joué !
          </h2>
          <p className="text-gray-600 mb-6">
            Tu as validé cette leçon. Tu peux passer à la suite.
          </p>

          <Button
            onClick={handleLessonValidation}
            disabled={isSubmitting}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-md font-semibold transition ${
              isSubmitting
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-800 text-white"
            }`}
          >
            {isSubmitting ? "Chargement..." : buttonLabel}
            {!isSubmitting && <FaArrowRight />}
          </Button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📌 QCM non validé
          </h2>
          <p className="text-gray-600 mb-2">
            Tu peux retenter le QCM ou passer à la suite si tu préfères.
          </p>

          <p className="text-sm text-gray-500 italic mb-4">
            Tu n’as pas validé cette leçon, mais tu peux continuer si tu veux :
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button onClick={handleSummit} variant="outline" className="gap-2">
              <FaRedo /> Refaire le QCM
            </Button>

            <Button
              onClick={handleLessonValidation}
              disabled={isSubmitting}
              className={`gap-2 px-5 py-2 rounded-md font-semibold transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-gray-700 hover:bg-gray-800 text-white"
              }`}
            >
              {isSubmitting ? "Chargement..." : buttonLabel}
              {!isSubmitting && <FaArrowRight />}
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default LessonEnd;
