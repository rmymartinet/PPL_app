import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getQcmFromMarkdown = (slug: string) => {
  const filePath = path.join(process.cwd(), "content/lessons", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return data.qcm || [];
};
