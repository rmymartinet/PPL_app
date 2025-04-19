export default function splitMarkdownSections(content: string) {
  const sections = {
    summary: "",
    fullLesson: "",
    memo: "",
  };

  const parts = content.split(/^#{1,6} /gm);

  let foundFullLesson = false;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();

    // 🎯 Résumé express
    if (part.startsWith("Résumé express")) {
      sections.summary = part.replace("Résumé express", "").trim();
    }

    // ✈️ Leçon complète
    else if (part.startsWith("Leçon complète")) {
      foundFullLesson = true;
      continue;
    }

    // 🧠 Moyens mnémotechniques — on arrête la collecte de la leçon ici
    else if (part.startsWith("Moyens mnémotechniques")) {
      foundFullLesson = false;
      sections.memo = part.replace("Moyens mnémotechniques", "").trim();
      continue;
    }

    // Récapitulatif
    else if (part.startsWith("Récapitulatif")) {
      sections.memo = part.replace("Récapitulatif", "").trim();
      continue;
    }

    // Tant qu’on est dans la leçon complète, on accumule
    if (foundFullLesson) {
      sections.fullLesson += "\n\n## " + part;
    }
  }

  return sections;
}
