"use client";

import { QCMProps } from "@/types/types";
import { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const QCMSection = ({ qcmList, isReset, onSuccess }: QCMProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(qcmList.length).fill(null)
  );
  const [validated, setValidated] = useState(false);

  // 🔁 Reset automatique quand `isReset` devient true
  useEffect(() => {
    if (isReset) {
      resetAll();
      // 🔁 On notifie le parent que le reset est fini
      setTimeout(() => {
        // ça évite un update pendant le render
        const event = new CustomEvent("qcmResetDone");
        window.dispatchEvent(event);
      }, 0);
    }
  }, [isReset]);

  const handleChange = (qcmIndex: number, answerIndex: number) => {
    const updated = [...selectedAnswers];
    updated[qcmIndex] = answerIndex;
    setSelectedAnswers(updated);
  };

  const isAnswerCorrect = (qcmIndex: number) => {
    const selected = selectedAnswers[qcmIndex];
    return selected !== null && qcmList[qcmIndex].answers[selected].correct;
  };

  const handleSubmit = async () => {
    setValidated(true);

    const allCorrect = qcmList.every((_, i) => isAnswerCorrect(i));
    const phaseSlug = window.location.pathname.split("/").slice(-4)[0];
    const chapterSlug = window.location.pathname.split("/").slice(-2)[0];
    const lessonSlug = window.location.pathname.split("/").pop();

    try {
      await fetch("/api/qcm/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phaseSlug,
          chapterSlug,
          lessonSlug,
          success: allCorrect,
        }),
      });
    } catch (err) {
      console.error("Erreur en enregistrant la tentative de QCM :", err);
    }

    if (allCorrect) onSuccess();
  };

  const resetAll = () => {
    setSelectedAnswers(Array(qcmList.length).fill(null));
    setValidated(false);
  };

  return (
    <section
      id="qcm"
      className="bg-white border border-gray-200 rounded-xl p-6 mt-8 shadow-sm"
    >
      <h3 className="text-xl font-bold mb-6">🎯 Teste tes connaissances</h3>
      {qcmList.map((qcm, qcmIndex) => (
        <div key={qcmIndex} className="mb-6">
          <p className="mb-3 font-medium text-gray-800">
            {qcmIndex + 1}) {qcm.question}
          </p>

          <div className="space-y-2">
            {qcm.answers.map((answer, answerIndex) => {
              const isSelected = selectedAnswers[qcmIndex] === answerIndex;
              const isRight = validated && answer.correct;
              const isWrong = validated && isSelected && !answer.correct;

              return (
                <label
                  key={answerIndex}
                  className={`flex items-center p-3 border rounded-md cursor-pointer transition
                    ${isRight ? "bg-green-50 border-green-500" : ""}
                    ${isWrong ? "bg-red-50 border-red-500" : ""}
                    ${!validated ? "hover:bg-gray-50 border-gray-300" : ""}
                  `}
                >
                  <input
                    type="radio"
                    name={`qcm-${qcmIndex}`}
                    checked={isSelected}
                    onChange={() => handleChange(qcmIndex, answerIndex)}
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
          </div>
        </div>
      ))}

      {!validated && (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selectedAnswers.includes(null)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition disabled:opacity-50"
        >
          Valider toutes les réponses
        </button>
      )}
    </section>
  );
};

export default QCMSection;
