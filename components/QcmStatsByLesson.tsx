"use client";

import React, { useEffect, useState } from "react";

const QcmStatsByLesson = ({ lessonSlug }: { lessonSlug: string }) => {
  const [stats, setStats] = useState<{
    total: number;
    success: number;
    rate: number | null;
  } | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("/api/qcm/stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonSlug }),
      });
      const data = await res.json();
      setStats(data);
    };

    fetchStats();
  }, [lessonSlug]);

  return (
    <>
      {/* {stats && stats.total > 0 && (
        <div className="text-sm text-gray-500 mt-1">
          Qcm : {stats.total} tentative{stats.total > 1 ? "s" : ""} —{" "}
          {stats.rate !== null ? `${stats.rate}% de réussite` : "Non défini"}
        </div>
      )} */}

      {stats && stats.total > 0 ? (
        <div className="text-sm text-gray-500 mt-1">
          {stats.rate !== null ? `${stats.rate}%` : "-"}
        </div>
      ) : (
        <p className="text-sm text-gray-500 mt-1">-</p>
      )}
    </>
  );
};

export default QcmStatsByLesson;
