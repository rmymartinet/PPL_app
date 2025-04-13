const LessonFooter = ({ memo }: { memo: string }) => {
  return (
    <section
      id="moyens-mémotechniques"
      className="bg-blue-50 p-4 rounded-md border border-blue-200"
    >
      <h3 className="text-md font-semibold mb-2">🧠 Moyens mnémotechniques</h3>
      <p className="text-gray-700">{memo}</p>
    </section>
  );
};

export default LessonFooter;
