"use client";

import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  FaSortAmountUp,
  FaArrowUp,
  FaArrowDown,
  FaSortAlphaDown,
} from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { FilterAndSortControlsProps } from "@/types/types";

export function FilterAndSortControls({
  currentFilter,
  setFilter,
  onSortChange,
  selectedReps,
  setSelectedReps,
  search,
  setSearch,
}: FilterAndSortControlsProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const toggleRep = useCallback(
    (i: number) => {
      setSelectedReps((prevSelectedReps) =>
        prevSelectedReps.includes(i)
          ? prevSelectedReps.filter((r) => r !== i)
          : [...prevSelectedReps, i]
      );
    },
    [setSelectedReps]
  );

  const repetitionOptions = useMemo(() => [0, 1, 2, 3], []);

  const handleSortClick = useCallback(
    (key: string, direction: "asc" | "desc") => {
      onSortChange(key, direction);
      setSortOpen(false);
    },
    [onSortChange, setSortOpen]
  );

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant={currentFilter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
        >
          Toutes les révisions
        </Button>
        <Button
          variant={currentFilter === "today" ? "default" : "outline"}
          onClick={() => setFilter("today")}
        >
          Révisions d’aujourd’hui
        </Button>

        {/* FILTRE */}
        <Popover open={filterOpen} onOpenChange={setFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="secondary">
              <IoFilter />
              Filtrer
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-3">
            <div className="text-sm font-semibold text-muted-foreground mb-1">
              Répétitions
            </div>
            <Separator className="mb-1" />
            <div className="flex flex-col mb-3">
              {repetitionOptions.map((i) => (
                <div
                  key={i}
                  className="flex items-center py-2 px-2 gap-4 hover:bg-gray-50"
                >
                  <Checkbox
                    id={`rep-${i}`}
                    checked={selectedReps.includes(i)}
                    onCheckedChange={() => toggleRep(i)}
                    className="cursor-pointer"
                  />
                  <Label className="text-md" htmlFor={`rep-${i}`}>
                    {i + 1}ᵉ répétition
                  </Label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        {/* TRI */}
        <Popover open={sortOpen} onOpenChange={setSortOpen}>
          <PopoverTrigger asChild>
            <Button variant="secondary">
              <FaSortAmountUp /> Trier
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-72 p-3 space-y-2">
            <div className="text-sm font-semibold text-muted-foreground mb-1">
              Trier par date
            </div>
            <Separator className="mb-1" />
            <div className="flex flex-col gap-1">
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => handleSortClick("nextRevision", "asc")}
              >
                <FaArrowUp className="mr-2" /> Prochaine révision (↑)
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => handleSortClick("nextRevision", "desc")}
              >
                <FaArrowDown className="mr-2" /> Prochaine révision (↓)
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => handleSortClick("lastLearned", "asc")}
              >
                <FaArrowUp className="mr-2" /> Dernière lecture (↑)
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => handleSortClick("lastLearned", "desc")}
              >
                <FaArrowDown className="mr-2" /> Dernière lecture (↓)
              </Button>
            </div>

            <div className="text-sm font-semibold text-muted-foreground mt-3 mb-1">
              Trier par nom
            </div>
            <Separator className="mb-1" />
            <div className="flex flex-col gap-1">
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => handleSortClick("subject", "asc")}
              >
                <FaSortAlphaDown className="mr-2" /> Sujet (A → Z)
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => handleSortClick("subject", "desc")}
              >
                <FaSortAlphaDown className="mr-2 rotate-180" /> Sujet (Z → A)
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* RECHERCHE */}
      <Input
        placeholder="Rechercher un sujet"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-72"
      />
    </div>
  );
}
