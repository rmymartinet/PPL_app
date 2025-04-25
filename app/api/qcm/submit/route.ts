// app/api/qcm/submit/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = session?.user;

  const body = await req.json();
  const { phaseSlug, chapterSlug, lessonSlug, success } = body;

  if (
    !phaseSlug ||
    !chapterSlug ||
    !lessonSlug ||
    typeof success !== "boolean"
  ) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const attempt = await prisma.qcmAttempt.create({
    data: {
      userId: user.id,
      phaseSlug,
      chapterSlug,
      lessonSlug,
      success,
    },
  });

  return NextResponse.json({ ok: true, attempt });
}
