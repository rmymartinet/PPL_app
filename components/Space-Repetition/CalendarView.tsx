// components/Space-Repetition/CalendarView.tsx
"use client";

import { Calendar } from "@/components/ui/calendar"; // ou selon ta lib
import { useState } from "react";

export function CalendarView() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Vue calendrier</h2>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border shadow"
      />
    </div>
  );
}
