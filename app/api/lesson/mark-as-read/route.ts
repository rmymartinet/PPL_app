import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { lessonSlug } = await req.json();

  try {
    await prisma.lessonRead.upsert({
      where: {
        userId_lessonSlug: {
          userId: session.user.id, // ✅ C’est une clé composite
          lessonSlug,
        },
      },
      update: {},
      create: {
        userId: session.user.id,
        lessonSlug,
      },
    });

    return NextResponse.json({ ok: true }, { status: 200 }); // ✅ Il manquait le `return`
  } catch (err) {
    console.error("Error marking lesson as read:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
