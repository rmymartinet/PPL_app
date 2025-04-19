import ThemeCard from "@/components/ThemeCard";
import { Separator } from "@/components/ui/separator";
import { phasesData } from "@/data/phaseData";
import React from "react";

function Page() {
  return (
    <section className="min-h-screen flex flex-col gap-20 justify-center items-center mt-56 md:px-8">
      <h1 className="font-bold text-9xl">Leçons</h1>
      {phasesData.map((theme, index) => (
        <ThemeCard
          key={index}
          title={theme.title}
          subtitle={theme.subtitle}
          category={theme.category}
          subCards={theme.subCards}
        />
      ))}
      <Separator className="max-w-7xl mx-auto" />
    </section>
  );
}

export default Page;
