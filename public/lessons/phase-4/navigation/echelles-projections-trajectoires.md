---
title: "Échelles, projections et trajectoires sur les cartes aéronautiques"
subtitle: "Comprendre la représentation de la Terre en navigation"
theme: "navigation"
category: "Phase 4 : Navigation"
duration: "20 min"
level: "Débutant"
imageUrl: "/images/projections-cartes-aeronautiques.jpg"
objectives:
  - Comprendre la notion d’échelle cartographique et comparer plusieurs échelles
  - Identifier les principaux types de projections cartographiques conformes
  - Comprendre le fonctionnement de la projection Lambert conforme
  - Distinguer les orthodromies et les loxodromies sur une carte de navigation
memo: "Orthodromie pour aller droit au but, loxodromie pour garder le cap constant !"
qcm:
  - question: "Quelle échelle donne une carte plus détaillée ?"
    answers:
      - label: "1/1 000 000"
        correct: false
      - label: "1/500 000"
        correct: true
      - label: "Elles sont identiques"
        correct: false
  - question: "Quelle propriété une projection conforme respecte-t-elle ?"
    answers:
      - label: "Les distances"
        correct: false
      - label: "Les angles"
        correct: true
      - label: "Les surfaces"
        correct: false
  - question: "Quelle projection est utilisée pour les cartes VFR en France ?"
    answers:
      - label: "Mercator"
        correct: false
      - label: "Stéréographique"
        correct: false
      - label: "Lambert"
        correct: true
  - question: "Qu’est-ce qu’une orthodromie ?"
    answers:
      - label: "Une trajectoire en ligne droite"
        correct: false
      - label: "La route la plus courte entre deux points"
        correct: true
      - label: "Une trajectoire qui suit les méridiens"
        correct: false
  - question: "Comment est représentée une loxodromie sur une carte Lambert ?"
    answers:
      - label: "Par une droite"
        correct: false
      - label: "Par une courbe dont la concavité est tournée vers le pôle"
        correct: true
      - label: "Par un arc de cercle horizontal"
        correct: false
---

## Résumé express

En cartographie aéronautique, une **grande échelle** (comme 1/500 000) donne plus de **détail** qu’une petite. Les cartes utilisent des **projections conformes** qui conservent les **angles**, comme la **projection Lambert** en France. Sur ces cartes, les **orthodromies** (trajets les plus courts) apparaissent comme des **courbes**, tout comme les **loxodromies** (trajets à cap constant) mais avec une concavité tournée vers le pôle.

---

## Leçon complète

### Échelle cartographique : attention au vocabulaire !

> ❓ Une carte à "grande échelle", c’est une grande carte ?

Pas du tout ! C’est une carte **plus détaillée**.

| Échelle     | Détail visible     | Utilisation              |
| ----------- | ------------------ | ------------------------ |
| 1/500 000   | Détail important   | Navigation VFR           |
| 1/1 000 000 | Détail plus faible | Vue d’ensemble régionale |

> 💡 Plus le **dénominateur est petit**, plus la carte est **détaillée**.

---

### Projections cartographiques : comment aplatir une sphère ?

Pour représenter la Terre (ronde) sur une carte (plane), on utilise des **projections**.

### Projections conformes : pourquoi sont-elles importantes ?

> ℹ️ Une **projection conforme** conserve les **angles**, ce qui est crucial en navigation.

📌 Projections utilisées en navigation :

- **Mercator** : conforme, adaptée aux faibles latitudes
- **Lambert conforme** : projection conique utilisée en France
- **Stéréographique** : adaptée aux pôles

> 💡 Sur une carte conforme, l’angle entre deux routes est exact — c’est vital pour suivre un cap !

---

## La projection Lambert conforme

> ❓ Pourquoi la projection Lambert est-elle utilisée en France ?

Parce qu’elle est :

- Conforme (préserve les angles)
- Précise entre deux **parallèles standards** (en France : 45°N et 49°N)
- Idéale pour représenter des portions de territoire comme la France

📌 Caractéristiques :

- **Méridiens** : lignes droites qui convergent vers le pôle
- **Parallèles** : arcs de cercle
- **Échelle constante** entre deux parallèles d’échelle conservée

> 🧠 **Lambert = L comme Local = utilisé pour la France**

---

## Orthodromie vs Loxodromie

### Orthodromie

- ✈️ **Trajectoire la plus courte** entre deux points sur une sphère
- Suit un **grand cercle**
- **Angle avec les méridiens varie**
- Représentée comme une **courbe** sur une carte Lambert

### Loxodromie

- 🧭 **Trajectoire à cap constant**
- Coupe les méridiens sous un **angle fixe**
- **Pas le chemin le plus court** (sauf à l’équateur)
- Sur carte Lambert : **courbe tournée vers le pôle**

| Type de trajectoire | Cap constant | Plus court chemin | Représentation sur carte Lambert |
| ------------------- | ------------ | ----------------- | -------------------------------- |
| Orthodromie         | Non          | Oui               | Courbe "neutre"                  |
| Loxodromie          | Oui          | Non               | Courbe vers le pôle              |

> 🧠 **Orthodromie = Optimal**, **Loxodromie = cap Long**

---

## Moyens mnémotechniques

- 🧠 **Conforme = Conservation des angles**
- 🧠 **Petite échelle = Petit détail**
- 🧠 **Orthodromie = Optimal (chemin le plus court)**
- 🧠 **Loxodromie = Longue route constante**
- 🧠 **Lambert = L pour Local (France)**

---

## Transition vers la leçon suivante

Tu maîtrises maintenant comment la Terre est représentée sur une carte, et comment y tracer des trajectoires précises. Mais pour vraiment **savoir dans quelle direction tu voles**, il ne suffit pas d’une carte : il te faut un **compas magnétique** !  
Découvrons dans la prochaine leçon comment le champ magnétique terrestre, la **déclinaison**, et la position de ton compas influencent ton orientation en vol.
