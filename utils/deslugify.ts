export default function deslugify(slug: string): string {
  return slug
    .replace(/-/g, " ") // remplace les tirets par des espaces
    .replace(/\b\w/g, (l) => l.toUpperCase()) // majuscule à chaque mot
    .replace(/Dair\b/i, "d'air"); // correction manuelle pour "dair"
}
