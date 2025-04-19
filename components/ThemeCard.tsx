"use client";

import { Card, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { CourseCardProps } from "@/types/types";
import { PiBooks } from "react-icons/pi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuRepeat2 } from "react-icons/lu";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { TiWeatherPartlySunny } from "react-icons/ti";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { StatusBadge } from "./StatusBadge";
import { Separator } from "./ui/separator";
import Link from "next/link";
import slugify from "@/utils/slugify";
import Image from "next/image";

const SubCardCarousel = ({
  card,
}: {
  card: { keyConcepts: string[]; avgScore: number; lessonsToReview: number };
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="w-full mt-4" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm text-gray-700 font-medium">
              Concepts abordés
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {card.keyConcepts.map((concept: string, i: number) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="text-xs px-2 py-1"
                >
                  {concept}
                </Badge>
              ))}
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              <BsGraphUpArrow className="inline mr-1" /> Moyenne :
              <span className="font-semibold text-red-500">
                {card.avgScore}%
              </span>
            </Badge>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              <LuRepeat2 className="inline mr-1" /> À réviser :
              <span className="font-semibold">{card.lessonsToReview}</span>
            </Badge>
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="absolute left-0 top-2 w-6 h-6 bg-white shadow rounded-full disabled:opacity-0 disabled:pointer-events-none cursor-pointer" />
      <CarouselNext className="absolute right-0 top-2 w-6 h-6 bg-white shadow rounded-full disabled:opacity-0 disabled:pointer-events-none cursor-pointer" />

      <div className="flex justify-center mt-2">
        <div className="text-xs text-gray-500">
          {count > 0 &&
            Array.from({ length: count }).map((_, i) => (
              <span
                key={i}
                className={`inline-block w-2 h-2 rounded-full mx-1 ${
                  current === i + 1 ? "bg-black" : "bg-white"
                }`}
              />
            ))}
        </div>
      </div>
    </Carousel>
  );
};

export const ThemeCard = ({
  title,
  subtitle,
  category,
  status = "in-progress",
  lessonsRead,
  totalLessons,
  qcmDone,
  qcmTotal,
  avgScore,
  lessonsToReview,
  subCards,
}: CourseCardProps) => {
  const globalProgress = (lessonsRead / totalLessons) * 100 || 0;

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
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="secondary" className="text-xs">
              <PiBooks className="text-sm mr-1" /> Leçons :
              <span className="font-semibold">{lessonsRead}</span> /{" "}
              {totalLessons}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <IoExtensionPuzzleOutline className="text-sm mr-1" /> QCM :
              <span className="font-semibold">{qcmDone}</span> / {qcmTotal}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <BsGraphUpArrow className="text-sm mr-1" /> Moyenne :
              <span
                className={`ml-1 font-semibold ${
                  avgScore > 80
                    ? "text-green-600"
                    : avgScore > 60
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {avgScore}%
              </span>
            </Badge>
            <Badge variant="secondary" className="text-xs">
              <LuRepeat2 className="text-sm mr-1" /> À réviser :
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
        <CarouselContent className="pl-2">
          {subCards.map((card, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-[380px] md:basis-[400px] lg:basis-[420px] flex items-center justify-center"
            >
              <Card className="rounded-xl shadow-md overflow-hidden py-0 h-[400px] border-2">
                <div className="bg-red-100 p-4 flex flex-col gap-2 h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div className="rounded-full bg-white p-2">
                      <TiWeatherPartlySunny className="text-xl" />
                    </div>
                    <div
                      className="rounded-full bg-white h-8 w-8 grid place-content-center text-2xl font-bold"
                      style={{ fontFamily: "var(--font-caveat)" }}
                    >
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-center text-base md:text-lg text-gray-800 mt-2">
                    {card.title}
                  </h3>
                  <SubCardCarousel card={card} />
                </div>
                <CardFooter className="flex flex-col gap-2 px-4 pb-4">
                  <Link
                    href={`/lecons/${category.toLocaleLowerCase()}/chapitre/${slugify(
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
        <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 cursor-pointer" />
        <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 cursor-pointer" />
      </Carousel>
    </Card>
  );
};

export default ThemeCard;
