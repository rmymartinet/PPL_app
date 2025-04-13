export default function slugify(str: string) {
  return str
    .normalize("NFD") // Sépare les accents (ex: é → e + ́)
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .toLowerCase()
    .replace(/\s+/g, "-") // Remplace les espaces par des tirets
    .replace(/[^\w-]/g, "") // Supprime tout sauf lettres, chiffres et tirets
    .replace(/--+/g, "-") // Supprime les doubles tirets
    .replace(/^-+|-+$/g, ""); // Supprime les tirets en début/fin
}
