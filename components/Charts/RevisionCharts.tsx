"use client";

import { useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Couleurs Pie Chart
const COLORS = ["#FACC15", "#F59E0B", "#EA580C", "#991B1B"];

// Données simulées
const allRevisions = [
  { date: "2025-04-11", count: 2 },
  { date: "2025-04-12", count: 4 },
  { date: "2025-04-13", count: 1 },
  { date: "2025-04-14", count: 0 },
  { date: "2025-04-15", count: 5 },
  { date: "2025-04-16", count: 2 },
  { date: "2025-04-17", count: 3 },
  { date: "2025-04-10", count: 1 },
  { date: "2025-04-09", count: 2 },
];

const allRepetitions = [
  { date: "2025-04-10", level: 0 },
  { date: "2025-04-11", level: 1 },
  { date: "2025-04-12", level: 2 },
  { date: "2025-04-13", level: 0 },
  { date: "2025-04-14", level: 0 },
  { date: "2025-04-15", level: 1 },
  { date: "2025-04-16", level: 2 },
  { date: "2025-04-17", level: 3 },
  { date: "2025-04-17", level: 0 },
];

const chartConfig = {
  count: {
    label: "Révisions",
  },
} as const;

export default function RevisionCharts() {
  const [rangeBar, setRangeBar] = useState<"7" | "14" | "30" | "all">("7");
  const [rangePie, setRangePie] = useState<"7" | "14" | "30" | "all">("7");

  const filterByRange = (
    data: { date: string }[],
    range: string
  ): { date: string }[] => {
    if (range === "all") return data;
    const days = parseInt(range);
    const start = new Date();
    start.setDate(start.getDate() - days);
    return data.filter((d) => new Date(d.date) >= start);
  };

  const barData = useMemo(() => {
    const filtered = filterByRange(allRevisions, rangeBar);
    return filtered.reduce((acc, curr) => {
      const day = new Date(curr.date).toLocaleDateString("fr-FR", {
        weekday: "short",
      });
      const existing = acc.find((item) => item.date === day);
      if (existing) {
        existing.count += curr.count;
      } else {
        acc.push({
          date: day,
          count: curr.count,
          fill: `hsl(var(--chart-${(acc.length % 7) + 1}))`,
        });
      }
      return acc;
    }, [] as { date: string; count: number; fill: string }[]);
  }, [rangeBar]);

  const pieData = useMemo(() => {
    const filtered = filterByRange(allRepetitions, rangePie);
    return [0, 1, 2, 3].map((level) => ({
      name: `${level + 1}ᵉ rép`,
      value: filtered.filter((r) => r.level === level).length,
    }));
  }, [rangePie]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
      {/* Bar Chart */}
      <Card className="shadow-sm border border-muted rounded-2xl">
        <CardHeader className="pb-2 flex items-center justify-between">
          <div>
            <CardTitle className="bg-gray-50 dark:bg-muted w-max px-4 py-1 rounded-full text-md font-medium text-gray-800 dark:text-gray-100">
              Révisions par jour
            </CardTitle>
            <CardDescription className="ml-1 text-muted-foreground text-sm mt-1">
              Période : {rangeBar === "all" ? "Tout" : `${rangeBar} jours`}
            </CardDescription>
          </div>
          <select
            value={rangeBar}
            onChange={(e) => setRangeBar(e.target.value as any)}
            className="text-sm border border-muted rounded-md px-2 py-1 bg-white dark:bg-background text-foreground"
          >
            <option value="7">7 jours</option>
            <option value="14">14 jours</option>
            <option value="30">30 jours</option>
            <option value="all">Tout</option>
          </select>
        </CardHeader>

        <CardContent className="pt-0">
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={barData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                style={{ fontSize: "0.8rem" }}
              />
              <YAxis
                allowDecimals={false}
                tickMargin={10}
                style={{ fontSize: "0.8rem" }}
              />
              <ChartTooltip
                cursor={{ fill: "transparent" }}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="count"
                radius={[8, 8, 0, 0]}
                strokeWidth={2}
                shape={(props) => (
                  <Rectangle
                    {...props}
                    fill={props.payload.fill}
                    radius={[8, 8, 0, 0]}
                  />
                )}
                activeBar={(props) => (
                  <Rectangle
                    {...props}
                    fillOpacity={0.9}
                    stroke={props.payload.fill}
                    strokeWidth={2}
                    strokeDasharray="4"
                    className="shadow-md"
                  />
                )}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>

        <CardFooter className="flex-col items-start gap-2 text-sm pt-0">
          <div className="flex gap-2 font-semibold leading-none">
            Bien joué pour ta régularité ! <TrendingUp className="h-4 w-4" />
          </div>
          <div className="text-muted-foreground text-xs">
            Nombre total de révisions par jour
          </div>
        </CardFooter>
      </Card>

      {/* Pie Chart */}
      <Card className="shadow-sm border border-muted rounded-2xl">
        <CardHeader className="pb-2 flex items-center justify-between">
          <div>
            <CardTitle className="bg-gray-50 dark:bg-muted w-max px-4 py-1 rounded-full text-md font-medium text-gray-800 dark:text-gray-100">
              Répartition des répétitions
            </CardTitle>
            <CardDescription className="ml-1 text-muted-foreground text-sm mt-1">
              Période : {rangePie === "all" ? "Tout" : `${rangePie} jours`}
            </CardDescription>
          </div>
          <select
            value={rangePie}
            onChange={(e) => setRangePie(e.target.value as any)}
            className="text-sm border border-muted rounded-md px-2 py-1 bg-white dark:bg-background text-foreground"
          >
            <option value="7">7 jours</option>
            <option value="14">14 jours</option>
            <option value="30">30 jours</option>
            <option value="all">Tout</option>
          </select>
        </CardHeader>
        <CardContent className="p-4">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
