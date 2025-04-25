"use client";

import { useState } from "react";
import { Card, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { CourseCardProps } from "@/types/types";
import { PiBooks } from "react-icons/pi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { LuRepeat2 } from "react-icons/lu";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { TiWeatherPartlySunny } from "react-icons/ti";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { StatusBadge } from "./StatusBadge";
import { Separator } from "./ui/separator";
import Link from "next/link";
import slugify from "@/utils/slugify";
import Image from "next/image";

const SubCardSection = ({
  card,
}: {
  card: {
    keyConcepts: string[];
    lessonsToReview: number;
    slug: string;
  };
}) => {
  const [stats, setStats] = useState<{
    total: number;
    success: number;
    rate: number | null;
  } | null>(null);

  useState(() => {
    const fetchStats = async () => {
      const res = await fetch("/api/qcm/chapter-stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chapterSlug: card.slug }),
      });
      const data = await res.json();
      setStats(data);
    };
    fetchStats();
  });

  const getRateColor = (rate: number | null) => {
    if (rate === null) return "text-gray-400";
    if (rate >= 80) return "text-green-600";
    if (rate >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="flex flex-col items-center gap-3 mt-3 w-full">
      <div className="flex flex-wrap justify-center gap-2 h-20">
        {card.keyConcepts.map((concept, i) => (
          <Badge
            key={i}
            variant="secondary"
            className="text-xs px-2 py-1 h-max w-max"
          >
            {concept}
          </Badge>
        ))}
      </div>

      {/* Grid Stats */}
      {stats && (
        <div className="grid grid-cols-3 gap-2 bg-white rounded-md shadow-sm px-3 py-2 text-xs w-full border border-gray-300 mt-4 text-center">
          <div>
            <div className="text-gray-500">Tentatives</div>
            <div className="font-bold text-base text-gray-800">
              {stats.total}
            </div>
          </div>
          <div>
            <div className="text-gray-500">Réussite</div>
            <div className={`font-bold text-base ${getRateColor(stats.rate)}`}>
              {stats.rate !== null ? `${stats.rate}%` : "–"}
            </div>
          </div>
          <div>
            <div className="text-gray-500">À réviser</div>
            <div className="font-bold text-base text-gray-800">
              {card.lessonsToReview}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ThemeCard = ({
  title,
  subtitle,
  category,
  status = "in-progress", 
  qcmDone,
  qcmTotal,
  lessonsTotal,
  lessonsRead,
  lessonsToReview,
  subCards,
}: CourseCardProps) => {
  const globalProgress = ((lessonsRead ?? 0) / (lessonsTotal ?? 1)) * 100 || 0;

  return (
    <Card className="p-4 md:p-6 bg-white rounded-2xl shadow-lg w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between items-end gap-4 mb-6">
        <div className="flex flex-col gap-6">
          <StatusBadge status={status} />
          <h2 className="text-xl md:text-5xl uppercase font-extrabold text-gray-900 leading-tight">
            {title}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-5 border-2 border-red-400">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="secondary" className="text-xs">
              <PiBooks className="text-sm mr-1" /> Leçons :{" "}
              <span className="font-semibold">{lessonsRead}</span> /{" "}
              {lessonsTotal}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <IoExtensionPuzzleOutline className="text-sm mr-1" /> QCM :{" "}
              <span className="font-semibold">{qcmDone}</span> / {qcmTotal}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <LuRepeat2 className="text-sm mr-1" /> À réviser :{" "}
              <span className="font-semibold">{lessonsToReview}</span>
            </Badge>
          </div>
          <Progress className="h-2 rounded-full overflow-hidden mb-6">
            <div
              className="h-2 bg-green-500 transition-all duration-500 ease-in-out"
              style={{ width: `${globalProgress}%` }}
            />
          </Progress>
        </div>
      </div>
      <Separator />
      <Carousel className="w-full">
        <CarouselContent className="md:pl-10">
          {subCards.map((card, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-[380px] md:basis-[400px] lg:basis-[420px] flex items-center justify-center "
            >
              <Card className="rounded-xl shadow-md overflow-hidden py-0 h-[440px] border-2">
                <div className="bg-red-100 p-4 flex flex-col gap-2 h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="rounded-full bg-white p-2">
                      <TiWeatherPartlySunny className="text-xl" />
                    </div>
                    <div
                      className="rounded-full bg-black text-white h-8 w-8 grid place-content-center text-2xl font-bold"
                      style={{ fontFamily: "var(--font-caveat)" }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-center text-base md:text-lg text-gray-800 mt-2">
                    {card.title}
                  </h3>

                  <SubCardSection
                    card={{
                      keyConcepts: card.keyConcepts,
                      lessonsToReview: card.lessonsToReview,
                      slug: card.slug,
                    }}
                  />
                </div>
                <CardFooter className="flex flex-col gap-2 px-4 pb-4">
                  <Link
                    href={`/lecons/${category.toLowerCase()}/chapitre/${slugify(
                      card.slug
                    )}`}
                    className="w-full"
                  >
                    <Button
                      variant="default"
                      className="w-full text-sm cursor-pointer"
                    >
                      Commencer
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full text-sm cursor-pointer"
                  >
                    QCM
                  </Button>
                </CardFooter>
              </Card>

              <Image
                src="/icons/3d_arrow.png"
                alt=""
                width={50}
                height={50}
                className="mx-4 rotate-90 md:flex hidden"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="default"
          className="absolute -left-4 top-1/2 -translate-y-1/2 cursor-pointer"
        />
        <CarouselNext
          variant="default"
          className="absolute -right-4 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </Carousel>
    </Card>
  );
};

export default ThemeCard;
