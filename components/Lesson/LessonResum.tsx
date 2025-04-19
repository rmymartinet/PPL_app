const LessonResum = ({ summary }: { summary: string }) => {
  return (
    <section>
      <div
        id="résumé-express"
        className="bg-yellow-50 border-l-4 border-yellow-400 px-4 py-3 rounded-md mb-6"
      >
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          📌 Résumé express
        </h3>
        <div
          className="text-[15px] leading-relaxed text-gray-800"
          dangerouslySetInnerHTML={{ __html: summary }}
        ></div>
      </div>
    </section>
  );
};

export default LessonResum;
