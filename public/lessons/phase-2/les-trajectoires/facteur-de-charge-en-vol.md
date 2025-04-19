---
title: "Le facteur de charge"
subtitle: "Comprendre les efforts subis par l’avion"
theme: "mécanique du vol"
category: "Phase 2 - Mécanique du vol"
duration: "8 min"
level: "Intermédiaire"
imageUrl: "/images/facteur_charge.png"
objectives:
  - Comprendre ce qu'est le facteur de charge (n)
  - Calculer n selon l’inclinaison de l’avion
  - Identifier les risques structurels liés à n
  - Estimer les efforts subis par les ailes
memo: >
  🔢 n = Portance / Poids  
  📐 En virage : n = 1 / cos(Φ)  
  ⚠️ À 60° d’inclinaison : l’avion subit 2 fois son poids !  
  🧠 n = "nombre de fois le poids"
qcm:
  - question: "En ligne droite, le facteur de charge est égal à :"
    answers:
      - label: "0"
        correct: false
      - label: "1"
        correct: true
      - label: "2"
        correct: false
      - label: "Cela dépend de la vitesse"
        correct: false
  - question: "Lors d’un virage à 60°, le facteur de charge est :"
    answers:
      - label: "1,5"
        correct: false
      - label: "1,8"
        correct: false
      - label: "2"
        correct: true
      - label: "3"
        correct: false
  - question: "Si le facteur de charge vaut 2, cela signifie que :"
    answers:
      - label: "L’avion a perdu de la portance"
        correct: false
      - label: "L’avion subit une portance deux fois plus grande que son poids"
        correct: true
      - label: "L’avion monte automatiquement"
        correct: false
      - label: "La vitesse diminue"
        correct: false
  - question: "Quel est le lien entre inclinaison et facteur de charge ?"
    answers:
      - label: "Plus l’inclinaison augmente, plus n diminue"
        correct: false
      - label: "Plus l’inclinaison augmente, plus n augmente"
        correct: true
      - label: "n est constant quelle que soit l’inclinaison"
        correct: false
      - label: "Aucune relation"
        correct: false
---

## Résumé express

- Le **facteur de charge** (n) = **portance ÷ poids**
- En palier : **n = 1**
- En virage : **n augmente avec l’inclinaison**
- À 60° d’inclinaison : **n = 2**
- Risque : **surcharge structurelle** en cas de manœuvres violentes ou turbulences

---

## Leçon complète

### 📐 Définition

Le facteur de charge **n** exprime combien de fois la portance dépasse le poids :

- **n = Portance / Poids**
- Sans unité
- Parfois affiché sur un **accéléromètre de bord**

---

### 🛫 En vol rectiligne

- **Palier** : n = 1
- **Montée ou descente douce** : n ≈ 1

---

### ↩️ En virage

- La portance doit compenser **le poids + l’inertie centrifuge**
- Donc : plus l’**inclinaison** augmente, plus **n augmente**

| Inclinaison | Facteur de charge |
| ----------- | ----------------- |
| 0°          | 1                 |
| 30°         | 1,15              |
| 45°         | 1,41              |
| 60°         | 2                 |

**Formule clé** :  
n = **1 / cos(Φ)**

---

### 🧮 Exemple simple

Avion de 1 000 kg, g = 10 m/s²  
→ Poids = 10 000 N

- En palier : Portance = 10 000 N → n = 1
- À 60° : Portance = 20 000 N → n = 2

---

### ⚠️ Surcharge temporaire

- En virages brusques, ressources ou turbulences, la **portance peut bondir**
- Cela fait grimper n au-delà des **limites structurelles** prévues

> Avions légers classiques : limite positive souvent à **+3,8 g**

---

## Moyens mnémotechniques

- **n = nombre de fois le poids**
- **Inclinaison ↗️ → n ↗️**
- **n = 1 / cos(Φ)**

---

👉 Dans la prochaine leçon, tu verras comment ces **limites de facteur de charge sont encadrées** dans le manuel de vol et varient selon la **catégorie de l'avion**.
