// app/qcm/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const qcmThemes = [
  {
    title: "Connaissance de l’avion",
    slug: "connaissance-avion",
    subQcm: [
      {
        title: "Description de l’avion",
        duration: "14 min",
        score: null,
        slug: "description-avion",
      },
      {
        title: "Comment l’avion vole-t-il ?",
        duration: "13 min",
        score: "50%",
        slug: "comment-avion-vole",
      },
      {
        title: "Les gouvernes",
        duration: "12 min",
        score: null,
        slug: "gouvernes",
      },
      {
        title: "Instruments de bord",
        duration: "13 min",
        score: null,
        slug: "instruments-bord",
      },
    ],
  },
  {
    title: "Performances",
    slug: "performances",
    subQcm: [
      {
        title: "Vitesse, distance, altitude",
        duration: "11 min",
        score: "80%",
        slug: "performances-base",
      },
    ],
  },
];

export default function QCMPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">QCM par thème</h1>
      <p className="text-muted-foreground mb-10">
        Révise chaque notion en accédant aux QCM classés par section.
      </p>

      {qcmThemes.map((theme) => (
        <div key={theme.slug} className="mb-10">
          {/* Titre de thème */}
          <h2 className="text-2xl font-bold mb-2">{theme.title}</h2>

          {/* Header de la table */}
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 text-sm text-muted-foreground border-b border-gray-300 pb-2 mb-4">
            <span>Chapitres</span>
            <span className="justify-self-center">Durée</span>
            <span className="justify-self-center">QCM réussite</span>
          </div>

          {/* Liste des sous-QCM */}
          <ul className="space-y-2">
            {theme.subQcm.map((qcm, index) => (
              <li
                key={qcm.slug}
                className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center border-b border-dashed py-4"
              >
                {/* Index + titre */}
                <div className="flex items-center gap-3 w-full">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md font-semibold">
                    chapitre {index + 1}
                  </span>
                  <span className="font-medium text-gray-900">{qcm.title}</span>
                </div>

                {/* Durée */}
                <p className="text-sm text-gray-600 justify-self-center">
                  {qcm.duration}
                </p>

                {/* Score */}
                <p className="text-sm text-gray-600 justify-self-center">
                  {qcm.score ?? "-"}
                </p>

                {/* Bouton */}
                <Link
                  href={`/qcm/${theme.slug}/${qcm.slug}`}
                  className="justify-self-end"
                >
                  <Button variant="outline" size="sm">
                    Commencer
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
