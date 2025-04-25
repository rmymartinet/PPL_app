// /api/qcm/read/route.ts
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const attempts = await prisma.qcmAttempt.findMany({
    where: { userId: session.user.id },
    select: { phaseSlug: true, chapterSlug: true, lessonSlug: true },
  });

  return NextResponse.json({ qcms: attempts });
}
