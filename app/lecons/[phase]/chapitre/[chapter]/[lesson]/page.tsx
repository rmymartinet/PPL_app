import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import LessonHeader from "@/components/Lesson/LessonHeader";
import LessonLayout from "@/components/Lesson/LessonLayout";
import deslugify from "@/utils/deslugify";
import splitMarkdownSections from "@/utils/splitMarkDown";
import gfm from "remark-gfm";

export default async function Page({
  params,
}: {
  params: { phase: string; chapter: string; lesson: string };
}) {
  const { phase, chapter, lesson: slug } = params;

  const filePath = path.join(
    process.cwd(),
    `public/lessons/${phase}/${chapter}/${slug}.md`
  );

  const file = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(file);

  const { summary, fullLesson, memo } = splitMarkdownSections(content);

  const processedSummary = await remark().use(gfm).use(html).process(summary);
  const processedFullLesson = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(fullLesson);
  const processedMemo = memo
    ? await remark().use(gfm).use(html).process(memo)
    : null;

  const summaryHtml = processedSummary.toString();
  const contentHtml = processedFullLesson.toString();
  const memoHtml = processedMemo?.toString() || "";

  return (
    <>
      <LessonHeader
        title={data.title || deslugify(slug)}
        subtitle={data.subtitle || ""}
        themeBg={data.theme || "meteo"}
        category={data.category || "Général"}
        duration={data.duration || "10 min"}
        level={data.level || "Débutant"}
        imageUrl={data.imageUrl || "/images/prof.jpg"}
      />

      <LessonLayout
        objectives={data.objectives || []}
        summary={summaryHtml}
        htmlContent={contentHtml}
        memo={memoHtml}
        toc={[
          "Objectifs de la leçon",
          "Résumé express",
          "Leçon complète",
          "Moyens mnémotechniques",
          "QCM",
        ]}
        qcm={data.qcm}
      />
    </>
  );
}
