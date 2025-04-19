// components/Space-Repetition/DataTableToolbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

type Props = {
  filterValue: string;
  onFilterChange: (value: string) => void;
  onShowToday: () => void;
  onShowAll: () => void;
};

export default function DataTableToolbar({
  filterValue,
  onFilterChange,
  onShowToday,
  onShowAll,
}: Props) {
  return (
    <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
      <Input
        placeholder="🔍 Rechercher une leçon..."
        value={filterValue}
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full sm:w-[300px]"
      />
      <div className="flex gap-2">
        <Button variant="secondary" onClick={onShowAll}>
          Toutes les révisions
        </Button>
        <Button variant="default" onClick={onShowToday}>
          📅 Aujourd&paos;hui
        </Button>
      </div>
    </div>
  );
}
