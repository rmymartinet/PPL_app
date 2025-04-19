const RepetitionIntro = () => {
  return (
    <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-md shadow-sm mb-10 space-y-4">
      <h2 className="text-2xl font-bold">C’est quoi la répétition espacée ?</h2>
      <p className="text-sm leading-relaxed text-gray-700">
        C’est une méthode de mémorisation intelligente. Plutôt que de relire 10
        fois d’affilée, tu revois une leçon à des moments bien choisis pour que
        ton cerveau retienne mieux et plus longtemps.
      </p>
      <ul className="text-sm list-disc list-inside text-gray-700 space-y-1">
        <li>📘 1ère lecture → rappel après 1 jour</li>
        <li>🕒 2e répétition → après 3 jours</li>
        <li>⏳ 3e répétition → après 7 jours</li>
        <li>📅 4e répétition → après 14 jours</li>
      </ul>
      <p className="text-sm text-gray-700">
        À chaque révision réussie, tu coches une case. L’outil calcule
        automatiquement ta prochaine révision. Tu avances à ton rythme, en
        restant focus sur ce qui compte. 🧠
      </p>
    </section>
  );
};

export default RepetitionIntro;
