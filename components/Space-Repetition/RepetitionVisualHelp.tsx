const RepetitionVisualHelp = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
      <div className="bg-white border-l-4 border-blue-400 p-4 rounded shadow-sm">
        <h3 className="font-semibold text-blue-800 mb-1">📌 Sujet</h3>
        <p className="text-sm text-gray-700">
          C’est le titre de ta leçon. Elle s’ajoute automatiquement après que tu
          l’as étudiée, ou manuellement depuis ce tableau.
        </p>
      </div>
      <div className="bg-white border-l-4 border-green-400 p-4 rounded shadow-sm">
        <h3 className="font-semibold text-green-800 mb-1">
          ✏️ Dernière lecture
        </h3>
        <p className="text-sm text-gray-700">
          Tu peux modifier cette date si tu veux relancer ta révision à partir
          d’un nouveau point. Utile si tu as loupé une session ou si tu veux
          recommencer à zéro.
        </p>
      </div>
      <div className="bg-white border-l-4 border-purple-400 p-4 rounded shadow-sm">
        <h3 className="font-semibold text-purple-800 mb-1">
          🔁 Prochaine révision
        </h3>
        <p className="text-sm text-gray-700">
          Calculée automatiquement selon le nombre de répétitions cochées. Tu
          n’as rien à faire ici.
        </p>
      </div>
      <div className="bg-white border-l-4 border-yellow-500 p-4 rounded shadow-sm">
        <h3 className="font-semibold text-yellow-800 mb-1">
          ✅ Répétitions (1 à 4)
        </h3>
        <p className="text-sm text-gray-700">
          À chaque révision faite, tu coches une case. L’outil adapte le rythme
          de répétition pour consolider ta mémoire.
        </p>
      </div>
    </section>
  );
};

export default RepetitionVisualHelp;
