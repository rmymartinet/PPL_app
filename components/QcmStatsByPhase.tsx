"use client";

import { useEffect, useState } from "react";

const QcmStatsByChapter = ({ phaseSlug }: { phaseSlug: string }) => {
  const [stats, setStats] = useState<{
    total: number;
    success: number;
    rate: number | null;
  } | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("/api/qcm/phase-stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phaseSlug }),
      });
      const data = await res.json();
      setStats(data);
    };

    fetchStats();
  }, [phaseSlug]);

  const getRateColor = (rate: number | null) => {
    if (rate === null) return "text-gray-500";
    if (rate >= 80) return "text-green-600";
    if (rate >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <>
      {stats && stats.total > 0 && (
        <div className="bg-white rounded-md shadow-sm px-3 py-2 text-xs w-full flex flex-col justify-between items-center border border-gray-300">
          {/* <div className="text-gray-600">
            {stats.total} tentative{stats.total > 1 ? "s" : ""}
          </div> */}
          <div>
            <p>Totaux des QCM sur ce chapitre : </p>
            <span className={`font-semibold ${getRateColor(stats.rate)}`}>
              {stats.rate}% de réussite
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default QcmStatsByChapter;
