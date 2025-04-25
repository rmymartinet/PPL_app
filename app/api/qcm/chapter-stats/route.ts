import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { chapterSlug } = await req.json();

  if (!chapterSlug || typeof chapterSlug !== "string") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // ✅ On récupère directement tous les QCM liés à ce chapitre
  const attempts = await prisma.qcmAttempt.findMany({
    where: { chapterSlug },
  });

  const total = attempts.length;
  const success = attempts.filter((a) => a.success).length;
  const rate = total > 0 ? Math.round((success / total) * 100) : null;

  return NextResponse.json({ total, success, rate });
}
