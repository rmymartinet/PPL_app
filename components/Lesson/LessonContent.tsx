import { useMemo } from "react";

type Props = {
  htmlContent: string;
};

const LessonContent = ({ htmlContent }: Props) => {
  const styledHtml = useMemo(() => {
    let html = htmlContent;

    // Quesiton
    html = html.replace(
      /<blockquote>([^]*?)❓([^]*?)<\/blockquote>/g,
      `<blockquote class="p-4 bg-rose-50 text-emerald-800 font-semibold rounded-md my-4 border-none">$1❓ $2</blockquote>`
    );

    return html;
  }, [htmlContent]);

  return (
    <section className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ __html: styledHtml }} />
    </section>
  );
};

export default LessonContent;
