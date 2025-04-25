// /app/api/qcm/stats/route.ts
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = session?.user;

  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { lessonSlug } = await req.json();

  const attempts = await prisma.qcmAttempt.findMany({
    where: { userId: user.id, lessonSlug },
  });

  const total = attempts.length;
  const success = attempts.filter((a) => a.success).length;
  const rate = total === 0 ? null : Math.round((success / total) * 100);

  return NextResponse.json({ total, success, rate });
}
