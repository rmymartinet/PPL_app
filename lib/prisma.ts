import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// ✅ Ajoute ici des options pour renforcer la stabilité en dev
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["error", "warn"], // Ajoute logs utiles
  });

// ✅ En dev, évite d'avoir plusieurs instances
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// ✅ Teste explicitement la connexion à la base
prisma
  .$connect()
  .then(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Prisma connecté");
    }
  })
  .catch((err) => {
    if (process.env.NODE_ENV === "development") {
      console.error("❌ Erreur de connexion à Prisma :", err);
    }
  });
