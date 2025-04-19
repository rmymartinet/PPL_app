---
title: "La conduite du moteur (calage variable)"
subtitle: "Régime, pression, pas d'hélice et gestion du couple"
theme: "moteur-et-propulsion"
category: "Phase 1 - Connaissance de l'avion"
duration: "8 min"
level: "Intermédiaire"
imageUrl: "/images/commande-moteur-calage-variable.png"
objectives:
  - Distinguer calage fixe et calage variable
  - Savoir utiliser les deux commandes (puissance et pas)
  - Éviter les erreurs de séquence (surrégime ou surcouple)
  - Lire le manomètre et le tachymètre en synergie
memo: "Petit pas = plein régime. D'abord pas, ensuite gaz."
qcm:
  - question: "Quelle couleur correspond à la commande de richesse ?"
    answers:
      - label: "Noir"
        correct: false
      - label: "Rouge"
        correct: true
      - label: "Bleu"
        correct: false
  - question: "Dans une hélice à calage fixe, comment contrôle-t-on la puissance ?"
    answers:
      - label: "Avec un manomètre"
        correct: false
      - label: "Avec un tachymètre"
        correct: true
      - label: "Avec un voltmètre"
        correct: false
  - question: "Quel est le bon ordre pour augmenter la puissance avec une hélice à calage variable ?"
    answers:
      - label: "Plein gaz puis petit pas"
        correct: false
      - label: "Petit pas puis plein gaz"
        correct: true
      - label: "Grand pas puis plein gaz"
        correct: false
  - question: "Quel est le danger d’augmenter la pression d’admission avant de réduire le pas ?"
    answers:
      - label: "Surchauffe"
        correct: false
      - label: "Surrégime"
        correct: false
      - label: "Surcouple"
        correct: true
---

## Résumé express

- L’hélice à **calage variable** utilise deux leviers :
  - ⚫ Manette noire : contrôle la **pression d’admission**
  - 🔵 Manette bleue : contrôle le **régime moteur** (via le pas de l’hélice)
- Le **régulateur** ajuste automatiquement le pas pour maintenir un régime constant.
- Il faut suivre un ordre précis pour éviter le **surcouple** : **Pas ➜ Gaz** pour augmenter / **Gaz ➜ Pas** pour réduire.

---

## Fonctionnement des deux commandes

| Commande     | Couleur | Rôle principal                 |
| ------------ | ------- | ------------------------------ |
| Puissance    | ⚫ Noir | Régule la pression d’admission |
| Pas d’hélice | 🔵 Bleu | Fixe le régime moteur          |

> Le **manomètre** indique la pression d’admission, le **tachymètre** mesure les tours/min du moteur.

---

## Ordre de réglage à respecter

| Situation              | Étapes                                                       |
| ---------------------- | ------------------------------------------------------------ |
| Augmenter la puissance | 1. Réduire le **pas** (petit pas) → 2. Augmenter les **gaz** |
| Réduire la puissance   | 1. Réduire les **gaz** → 2. Augmenter le **pas** (grand pas) |

> ⛔ Inverser cet ordre = risque de **surcouple** (contrainte excessive sur l’arbre moteur)

---

## Qu’est-ce que le surcouple ?

- Survient si tu ouvres les gaz alors que l’hélice n’absorbe pas assez (grand pas).
- Le moteur force → **risque mécanique** (vibrations, torsion, casse).
- 🎯 Solution : respecter l’ordre **Pas ➜ Gaz / Gaz ➜ Pas**

---

## Comparatif calage fixe / calage variable

| Élément               | Calage fixe   | Calage variable      |
| --------------------- | ------------- | -------------------- |
| Manette bleue         | ❌            | ✅                   |
| Tachymètre            | ✅            | ✅                   |
| Manomètre             | ❌            | ✅                   |
| Puissance mesurée via | Régime moteur | Pression d’admission |

---

## 🧠 Moyens mnémotechniques

- **Petit pas = plein régime**
- **Montée = Pas ➜ Gaz / Descente = Gaz ➜ Pas**
- **Bleu = régime / Noir = pression**

---

Dans la prochaine leçon, tu découvriras comment affiner la **conduite moteur** grâce au **réglage de la richesse** et à l'utilisation d’un **couplemètre**, notamment sur les turbopropulseurs.
