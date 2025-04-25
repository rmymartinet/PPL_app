---
title: "Les cartes de navigation : principes, propriétés et échelle"
subtitle: "Pourquoi et comment représenter la Terre sur une carte ?"
theme: "navigation"
category: "Phase 4 : Navigation"
duration: "20 min"
level: "Débutant"
imageUrl: "/images/cartes-navigation.jpg"
objectives:
  - Comprendre pourquoi on utilise des cartes planes pour la navigation
  - Identifier les trois grandes propriétés d’une carte: conformité, équidistance, équivalence
  - Interpréter correctement une échelle de carte
memo: "Une carte plane déforme, mais peut garder soit les angles (conformité), soit les distances (équidistance), soit les surfaces (équivalence)."
qcm:
  - question: "Pourquoi ne peut-on pas utiliser une maquette sphérique en vol ?"
    answers:
      - label: "Parce qu’elle est difficile à trouver"
        correct: false
      - label: "Parce qu’elle serait trop grande et peu pratique"
        correct: true
      - label: "Parce qu’elle est trop chère"
        correct: false
  - question: "Qu’est-ce qu’une carte conforme ?"
    answers:
      - label: "Une carte qui conserve les surfaces"
        correct: false
      - label: "Une carte qui conserve les angles"
        correct: true
      - label: "Une carte qui conserve les couleurs"
        correct: false
  - question: "Que signifie l’équidistance ?"
    answers:
      - label: "La carte garde les distances proportionnelles"
        correct: true
      - label: "Les angles sont les mêmes"
        correct: false
      - label: "La carte représente la sphère sans erreur"
        correct: false
  - question: "Une échelle de 1 / 1 000 000 signifie :"
    answers:
      - label: "1 km sur la carte = 1 million de km en vrai"
        correct: false
      - label: "1 cm sur la carte = 1 million de cm en vrai"
        correct: true
      - label: "1 mètre sur la carte = 1 km en vrai"
        correct: false
  - question: "Quelle propriété permet de conserver les surfaces ?"
    answers:
      - label: "L’équidistance"
        correct: false
      - label: "La conformité"
        correct: false
      - label: "L’équivalence"
        correct: true
---

## Résumé express

En navigation aérienne, on ne peut pas utiliser un globe terrestre. À la place, on utilise des cartes planes qui déforment la réalité mais conservent certaines propriétés utiles. Il existe trois propriétés principales : la **conformité** (conservation des angles), l’**équidistance** (conservation des distances proportionnelles), et l’**équivalence** (conservation des surfaces). L’**échelle** permet de traduire une distance mesurée sur la carte en distance réelle sur la Terre.

## Leçon complète

### Pourquoi utilise-t-on des cartes planes ?

> ❓ Peut-on vraiment embarquer un globe terrestre dans un cockpit ?

Non, évidemment ! Une maquette sphérique est trop encombrante et peu pratique. C’est pourquoi on utilise une **carte plane**.

Mais transformer une sphère (la Terre) en surface plane entraîne forcément des **déformations**. Pour naviguer efficacement, on utilise des **projections cartographiques** qui conservent certaines propriétés utiles.

> 💡 Une projection cartographique est un compromis : on choisit **quelle propriété on veut conserver** selon l’usage de la carte.

---

## Les trois grandes propriétés des cartes

### 1. La conformité – Conservation des angles

> ❓ Pourquoi est-il important que les angles soient conservés ?

Une carte **conforme** respecte les angles. Cela signifie que :

- Un **cap** mesuré sur la carte correspond à la **vraie direction** à suivre.
- C’est essentiel pour suivre une trajectoire en ligne droite, par exemple en navigation VFR.

> 🧠 Imagine un triangle sur la Terre : sur une carte conforme, ses angles restent les mêmes.

---

### 2. L’équidistance – Conservation des distances

> ❓ Peut-on se fier aux distances mesurées sur une carte ?

Une carte **équidistante** conserve les **distances proportionnelles** à la réalité.

- Exemple : 1 cm sur la carte = 10 km dans le monde réel
- Même si toutes les cartes ne sont pas rigoureusement équidistantes, **les cartes aéronautiques sont considérées comme telles** pour des distances raisonnables (ex : sur une seule feuille de carte VFR).

> ℹ️ Les cartes VFR ne sont **pas parfaitement équidistantes**, mais les écarts sont négligeables pour la navigation à vue.

---

### 3. L’équivalence – Conservation des surfaces

> ❓ À quoi sert une carte qui garde les surfaces ?

Une carte **équivalente** respecte les **proportions de surface**. Cela signifie que :

- Si un pays fait 2x la surface d’un autre dans la réalité, il apparaîtra 2x plus grand aussi sur la carte.

> 💡 Très utile en géographie, mais **moins en aviation**, car les surfaces ne sont pas notre priorité.

---

## L’échelle d’une carte

### Définition

L’**échelle** exprime le **rapport** entre une distance mesurée sur la carte et la distance réelle sur la Terre.

> 📐 Échelle = (distance sur la carte) / (distance réelle)

⚠️ Attention à bien utiliser les **mêmes unités** des deux côtés !

---

### Exemple simple

> Si 1 cm sur la carte représente 10 km :
>
> → Échelle = 1 / 1 000 000

Cela se lit : **1 cm sur la carte correspond à 1 000 000 cm (soit 10 km) dans la réalité**.

> ℹ️ Les cartes aéronautiques VFR sont souvent à l’échelle **1:500 000**.

---

### Variabilité de l’échelle

- Sur une **carte conforme**, l’échelle **peut varier légèrement** selon l’endroit.
- Mais sur une **feuille unique**, on considère souvent qu’elle est **constante**.

---

## Moyens mnémotechniques

| Terme            | À retenir                                                     |
| ---------------- | ------------------------------------------------------------- |
| **Conformité**   | 🎯 **Angles** conservés (orientation fidèle)                  |
| **Équidistance** | 📏 **Distances proportionnelles**                             |
| **Équivalence**  | 🟩 **Surfaces égales**                                        |
| **Échelle**      | 📐 "Ce que je vois sur la carte / Ce que je parcours en vrai" |

> 🧠 Astuce visuelle : imagine que tu veux **aplatir une orange** (la Terre). Tu seras obligé de **déchirer ou étirer** la peau : tu ne peux **pas tout conserver**. Il faut choisir ce que tu veux préserver !

---

## Transition vers la leçon suivante

Tu sais maintenant pourquoi les cartes planes déforment la réalité, et quelles propriétés elles peuvent conserver pour rester utiles en navigation. Dans la prochaine leçon, on va voir **comment ces principes s’appliquent concrètement aux cartes aéronautiques**, comme les cartes VFR en **projection Lambert conforme**, et comment y interpréter les **trajectoires réelles : orthodromie et loxodromie**.
