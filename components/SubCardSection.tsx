import { Badge } from "lucide-react";
import { useState } from "react";

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
      <div className="flex flex-wrap justify-center gap-2">
        {card.keyConcepts.map((concept, i) => (
          <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
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

export default SubCardSection;
