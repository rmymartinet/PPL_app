"use client";

import Link from "next/link";
import { FaArrowRight, FaRedo } from "react-icons/fa";
import { Button } from "../ui/button";

type LessonEndProps = {
  isQcmValidated: boolean;
  onRetryQcm: () => void;
  nextLessonTitle?: string;
  nextLessonSlug?: string;
};

const LessonEnd = ({
  isQcmValidated,
  onRetryQcm,
  nextLessonTitle = "Les masses d'air",
  nextLessonSlug = "masses-d-air",
}: LessonEndProps) => {
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

          <Link
            href={`/lecons/${nextLessonSlug}`}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md font-semibold transition"
          >
            Leçon suivante : {nextLessonTitle}
            <FaArrowRight />
          </Link>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📌 QCM non validé
          </h2>
          <p className="text-gray-600 mb-6">
            Tu peux retenter le QCM ou passer à la suite si tu préfères.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Button onClick={onRetryQcm} variant="outline" className="gap-2">
              <FaRedo /> Refaire le QCM
            </Button>

            <Link
              href={`/lecons/${nextLessonSlug}`}
              className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-md font-semibold transition"
            >
              Continuer quand même
              <FaArrowRight />
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default LessonEnd;
