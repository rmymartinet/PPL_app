"use client";

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface QCMAnswer {
  label: string;
  correct: boolean;
}

interface QCMProps {
  qcm: {
    question: string;
    answers: QCMAnswer[];
  };
  onSuccess: () => void;
}

const QCMSection = ({ qcm, onSuccess }: QCMProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [validated, setValidated] = useState(false);

  const isCorrect = () =>
    selected !== null && qcm.answers[selected].correct === true;

  const handleSubmit = () => {
    if (selected !== null) {
      setValidated(true);
      if (qcm.answers[selected].correct) {
        onSuccess(); // ✅ On déclenche le succès
      }
    }
  };

  const resetQCM = () => {
    setSelected(null);
    setValidated(false);
  };

  return (
    <section
      id="qcm"
      className="bg-white border border-gray-200 rounded-xl p-6 mt-8 shadow-sm "
    >
      <h3 className="text-xl font-bold mb-4">🎯 Teste tes connaissances</h3>

      <p className="mb-4 text-gray-800 font-medium">{qcm.question}</p>

      <form className="space-y-3">
        {qcm.answers.map((answer, index) => {
          const isSelected = selected === index;
          const isRight = validated && answer.correct;
          const isWrong = validated && isSelected && !answer.correct;

          return (
            <label
              key={index}
              className={`flex items-center p-3 border rounded-md cursor-pointer transition
                ${isRight ? "bg-green-50 border-green-500" : ""}
                ${isWrong ? "bg-red-50 border-red-500" : ""}
                ${!validated ? "hover:bg-gray-50 border-gray-300" : ""}
              `}
            >
              <input
                type="radio"
                name="qcm"
                value={index}
                checked={isSelected}
                onChange={() => setSelected(index)}
                className="form-radio text-blue-600 mr-3"
                disabled={validated}
              />
              <span className="text-gray-800">{answer.label}</span>

              {validated && isRight && (
                <FaCheckCircle className="ml-auto text-green-500" />
              )}
              {validated && isWrong && (
                <FaTimesCircle className="ml-auto text-red-500" />
              )}
            </label>
          );
        })}

        {/* Bouton Valider */}
        {!validated && (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={selected === null}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition disabled:opacity-50"
          >
            Valider
          </button>
        )}

        {/* Feedback texte */}
        {validated && (
          <div
            className={`mt-4 text-sm font-semibold ${
              isCorrect() ? "text-green-600" : "text-red-600"
            }`}
          >
            {isCorrect()
              ? "✅ Bonne réponse, bien joué !"
              : "❌ Mauvaise réponse, essaie encore !"}
          </div>
        )}

        {/* Bouton Refaire */}
        {validated && !isCorrect() && (
          <button
            type="button"
            onClick={resetQCM}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            🔁 Refaire le QCM
          </button>
        )}
      </form>
    </section>
  );
};

export default QCMSection;
