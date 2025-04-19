// app/qcm/page.tsx
"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QCMThemeData } from "@/data/qcmData";

const qcmThemes: QCMThemeData[] = [
  {
    title: "Connaissance de l'avion",
    slug: "connaissance-avion",
    description: "Comprendre les bases de l'aéronef et son fonctionnement",
    totalQCM: 24,
    toReview: 5,
    averageScore: 72,
  },
  {
    title: "Performances",
    slug: "performances",
    description: "Maîtriser les performances et limitations de l'avion",
    totalQCM: 18,
    toReview: 3,
    averageScore: 68,
  },
];

export default function QCMThemesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-2 text-center">QCM</h1>
      <p className="text-center text-muted-foreground mb-10">
        Entraîne-toi sur chaque thème du programme avec des QCM ciblés.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qcmThemes.map((theme) => (
          <Card key={theme.slug} className="shadow-md border rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg">{theme.title}</CardTitle>
              <CardDescription>{theme.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm space-y-1">
                <p>
                  📝 QCM disponibles : <strong>{theme.totalQCM}</strong>
                </p>
                <p>
                  📊 Moyenne : <strong>{theme.averageScore}%</strong>
                </p>
                <p>
                  🔁 À réviser : <strong>{theme.toReview}</strong>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link href={`/qcm/${theme.slug}/aleatoire`}>
                  <Button className="w-full">QCM aléatoire</Button>
                </Link>
                <Link href={`/qcm/${theme.slug}`}>
                  <Button variant="outline" className="w-full">
                    Voir les QCM par chapitre
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
