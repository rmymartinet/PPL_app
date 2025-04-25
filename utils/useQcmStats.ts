import { useEffect, useState } from "react";

type QcmAttempt = {
  phaseSlug: string;
  chapterSlug: string;
  lessonSlug: string;
  success: boolean;
};

export default function useQcmStats() {
  const [attempts, setAttempts] = useState<QcmAttempt[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/qcm/read");
        const data = await res.json();
        setAttempts(data || []);
      } catch (err) {
        console.error("Erreur lors de la récupération des QCM :", err);
      }
    };

    fetchData();
  }, []);

  const groupBy = <T extends keyof QcmAttempt>(
    key: T
  ): Record<string, QcmAttempt[]> => {
    return attempts.reduce((acc, curr) => {
      const groupKey = String(curr[key]);
      if (!acc[groupKey]) acc[groupKey] = [];
      acc[groupKey].push(curr);
      return acc;
    }, {} as Record<string, QcmAttempt[]>);
  };

  const getSuccessRate = (group?: QcmAttempt[]): number | null => {
    if (!group || group.length === 0) return null;
    const successCount = group.filter((a) => a.success).length;
    return Math.round((successCount / group.length) * 100);
  };

  return {
    rawAttempts: attempts,
    groupBy,
    getSuccessRate,
  };
}
