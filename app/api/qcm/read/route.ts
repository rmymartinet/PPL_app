import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // 🧠 Récupère toutes les tentatives utilisateur avec les champs nécessaires
  const attempts = await prisma.qcmAttempt.findMany({
    where: {
      userId: session.user.id,
    },
    select: {
      phaseSlug: true,
      chapterSlug: true,
      lessonSlug: true,
      success: true,
    },
  });

  return NextResponse.json(attempts);
}
