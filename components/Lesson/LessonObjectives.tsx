import { FaCheckCircle } from "react-icons/fa";

const LessonObjectives = ({ items }: { items: string[] }) => {
  return (
    <section
      id="objectifs-de-la-leçon"
      className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
    >
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        🎯 Objectifs de la leçon
      </h2>
      <ul className="flex flex-col gap-1">
        {items.map((obj, i) => (
          <li
            key={i}
            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow transition"
          >
            <div className="text-green-500 text-xl">
              <FaCheckCircle />
            </div>
            <span className="text-gray-800 leading-snug">{obj}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default LessonObjectives;
