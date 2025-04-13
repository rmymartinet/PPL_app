"use client";

import LessonHeader from "@/components/Lesson/LessonHeader";
import LessonLayout from "@/components/Lesson/LessonLayout";
import deslugify from "@/utils/deslugify";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

  if (!params.slug) {
    return <p>Loading...</p>;
  }

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const title = deslugify(slug);

  return (
    <>
      <LessonHeader
        title={title}
        subtitle="Comprendre les bases fondamentales de l'aérologie"
        themeBg="meteo"
        category="Météo"
        duration="25 min"
        level="Débutant"
        imageUrl="/images/prof.jpg"
      />

      <LessonLayout
        objectives={[
          "Comprendre la notion de front",
          "Différencier front chaud et front froid",
          "Identifier les impacts sur le vol",
        ]}
        summary="Dans cette leçon, nous allons explorer les interactions entre les masses d'air et les fronts. Vous découvrirez pourquoi un front froid peut être associé à des turbulences, et comment anticiper les conditions météos en vol."
        htmlContent={`<h2>Introduction</h2><p>Un front est une zone de transition entre deux masses d'air de températures différentes...</p><h3>Les différents types</h3><ul><li>Front chaud</li><li>Front froid</li><li>Front occlus</li></ul>`}
        memo="🌬️ Front = transition. Froid = ⚡ orageux. Chaud = ☁️ progressif. Retenir les symboles cartographiques pour l'examen."
        toc={[
          "Objectifs de la leçon",
          "Résumé express",
          "Lecon complète",
          "Moyens mémotechniques",
          "QCM",
        ]}
        qcm={{
          question: "Qu’est-ce qu’un front froid ?",
          answers: [
            { label: "Une zone stable entre deux vents", correct: false },
            {
              label: "Une zone où l'air froid remplace l'air chaud",
              correct: true,
            },
            { label: "Une perturbation liée au brouillard", correct: false },
            { label: "Une zone de calme météo", correct: false },
          ],
        }}
      />
    </>
  );
}
