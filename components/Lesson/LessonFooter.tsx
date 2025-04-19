const LessonFooter = ({ memo }: { memo: string }) => {
  return (
    <section
      id="moyens-mémotechniques"
      className="bg-blue-50 p-4 rounded-md border border-blue-200 prose prose-neutral max-w-none"
    >
      <h3 className="text-md font-semibold mb-4">🧠 Moyens mnémotechniques</h3>

      <div dangerouslySetInnerHTML={{ __html: memo }} />
    </section>
  );
};

export default LessonFooter;
