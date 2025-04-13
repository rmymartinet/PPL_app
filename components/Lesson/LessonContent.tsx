const LessonContent = ({
  summary,
  htmlContent,
}: {
  summary: string;
  htmlContent: string;
}) => {
  return (
    <section className="prose prose-neutral max-w-none">
      <div
        id="résumé-express"
        className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md mb-6"
      >
        <h3 className="text-md font-semibold mb-2">📌 Résumé express</h3>
        <p>{summary}</p>
      </div>
      <div
        id="lecon-complète"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </section>
  );
};

export default LessonContent;
