import ThemeCard from "@/components/ThemeCard";
import { Separator } from "@/components/ui/separator";
import React from "react";

function Page() {
  const themesData = [
    {
      title: "Météo",
      subtitle: "Comprendre les phénomènes météo essentiels en vol",
      subCards: [
        {
          title: "Bases météo",
          icon: "/icons/weather.svg",
          isNew: true,
          soundRead: true,
          lessonsRead: 3,
          totalLessons: 6,
          qcmAvailable: 45,
          avgScore: 78,
          lessonsToReview: 2,
          keyConcepts: ["Vent", "QNH", "Turbulence", "Nuages"],
        },
        {
          title: "Fronts et masses d'air",
          icon: "/icons/front.svg",
          soundRead: false,
          lessonsRead: 2,
          totalLessons: 4,
          qcmAvailable: 30,
          avgScore: 84,
          lessonsToReview: 1,
          keyConcepts: ["Front froid", "Front chaud", "Instabilité"],
        },
        {
          title: "Bases météo",
          icon: "/icons/weather.svg",
          isNew: true,
          soundRead: true,
          lessonsRead: 3,
          totalLessons: 6,
          qcmAvailable: 45,
          avgScore: 78,
          lessonsToReview: 2,
          keyConcepts: ["Vent", "QNH", "Turbulence", "Nuages"],
        },
        {
          title: "Fronts et masses d'air",
          icon: "/icons/front.svg",
          soundRead: false,
          lessonsRead: 2,
          totalLessons: 4,
          qcmAvailable: 30,
          avgScore: 84,
          lessonsToReview: 1,
          keyConcepts: ["Front froid", "Front chaud", "Instabilité"],
        },
        {
          title: "Bases météo",
          icon: "/icons/weather.svg",
          isNew: true,
          soundRead: true,
          lessonsRead: 3,
          totalLessons: 6,
          qcmAvailable: 45,
          avgScore: 78,
          lessonsToReview: 2,
          keyConcepts: ["Vent", "QNH", "Turbulence", "Nuages"],
        },
        {
          title: "Fronts et masses d'air",
          icon: "/icons/front.svg",
          soundRead: false,
          lessonsRead: 2,
          totalLessons: 4,
          qcmAvailable: 30,
          avgScore: 84,
          lessonsToReview: 1,
          keyConcepts: ["Front froid", "Front chaud", "Instabilité"],
        },
      ],
    },
    {
      title: "Météo",
      subtitle: "Comprendre les phénomènes météo essentiels en vol",
      subCards: [
        {
          title: "Bases météo",
          icon: "/icons/weather.svg",
          isNew: true,
          soundRead: true,
          lessonsRead: 3,
          totalLessons: 6,
          qcmAvailable: 45,
          avgScore: 78,
          lessonsToReview: 2,
          keyConcepts: ["Vent", "QNH", "Turbulence", "Nuages"],
        },
        {
          title: "Fronts et masses d'air",
          icon: "/icons/front.svg",
          soundRead: false,
          lessonsRead: 2,
          totalLessons: 4,
          qcmAvailable: 30,
          avgScore: 84,
          lessonsToReview: 1,
          keyConcepts: ["Front froid", "Front chaud", "Instabilité"],
        },
      ],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col gap-20 justify-center items-center mt-56">
      <h1 className="font-bold text-9xl">Leçons</h1>
      {themesData.map((theme, index) => (
        <ThemeCard
          key={index}
          title={theme.title}
          subtitle={theme.subtitle}
          subCards={theme.subCards}
        />
      ))}
      <Separator className="max-w-7xl mx-auto" />
    </section>
  );
}

export default Page;
