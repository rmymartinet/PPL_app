// /app/api/lesson/read/route.ts
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

  const lessonReads = await prisma.lessonRead.findMany({
    where: { userId: session.user.id },
    select: { lessonSlug: true },
  });

  return NextResponse.json({
    lessonSlugs: lessonReads.map((l) => l.lessonSlug),
  });
}
