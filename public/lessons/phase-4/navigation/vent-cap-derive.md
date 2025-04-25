---
title: "Vent d'angle quelconque, cap et dérive"
subtitle: "Utiliser les composantes du vent pour rester sur la route"
theme: "navigation"
category: "Phase 4 : Navigation"
duration: "15 min"
level: "Intermédiaire"
imageUrl: "/images/vent-angle-cap-derive.jpg"
objectives:
  - Comprendre l'effet d'un vent d'une direction quelconque
  - Apprendre à décomposer le vent en vent effectif et vent traversier
  - Utiliser les valeurs de sinus et cosinus pour estimer ces composantes
  - Distinguer cap et route suivie
  - Visualiser et expliquer la dérive générée par le vent traversier
memo: "Traversier = sinus, Effectif = cosinus… et le vent de travers fait dériver !"
qcm:
  - question: "Que définit l'angle au vent ?"
    answers:
      - label: "L'angle entre le cap et le nord"
        correct: false
      - label: "L'angle entre la direction du vent et la route suivie"
        correct: true
      - label: "L'angle entre deux avions"
        correct: false
  - question: "Comment calcule-t-on la composante traversière du vent ?"
    answers:
      - label: "Vent x cos(α)"
        correct: false
      - label: "Vent x sin(α)"
        correct: true
      - label: "Vent x tan(α)"
        correct: false
  - question: "Quel effet a le vent traversier sur le vol ?"
    answers:
      - label: "Il diminue la vitesse propre"
        correct: false
      - label: "Il génère une dérive"
        correct: true
      - label: "Il augmente la portance"
        correct: false
  - question: "Quelle est la valeur de cos(60°) ?"
    answers:
      - label: "0.5"
        correct: true
      - label: "0.7"
        correct: false
      - label: "0.8"
        correct: false
  - question: "La dérive est plus importante quand :"
    answers:
      - label: "Le vent est fort et bien aligné avec la route"
        correct: false
      - label: "Le vent est faible et perpendiculaire"
        correct: false
      - label: "Le vent est fort et traversier"
        correct: true
---

## Résumé express

Quand un **vent souffle en biais** par rapport à la route, il est décomposé en deux composantes :

- le **vent traversier**, obtenu avec le **sinus** de l'angle au vent, provoque une **dérive**,
- le **vent effectif**, obtenu avec le **cosinus**, agit sur la **vitesse sol**.

Plus l’**angle entre le vent et la route** est grand, plus la **dérive augmente**. Le pilote doit alors **modifier son cap** pour rester sur la trajectoire prévue.

---

## Leçon complète

### 🌀 Vent d'angle quelconque

Quand le vent ne vient ni directement de face ni directement de côté, on dit qu’il vient sous un **angle quelconque** par rapport à la route. Cet **angle au vent (α)** permet de calculer deux composantes :

| Composante          | Formule           | Effet sur…            |
| ------------------- | ----------------- | --------------------- |
| **Vent traversier** | Vent × **sin(α)** | Déviation de la route |
| **Vent effectif**   | Vent × **cos(α)** | Vitesse sol           |

> ℹ️ L’**angle au vent** est l’angle entre la **direction du vent** et la **route à suivre**

---

### 🧮 Astuce de calcul : les valeurs à retenir

| Angle (°) | sin(α) | cos(α) |
| --------- | ------ | ------ |
| 30°       | 0.5    | 0.8    |
| 45°       | 0.7    | 0.7    |
| 60°       | 0.8    | 0.5    |

> 💡 En vol, on **arrondit l'angle au vent** à 30°, 45° ou 60° pour simplifier le calcul mental.

---

### 🧭 Cap, route et dérive

- **Cap** : direction que **pointe le nez de l’avion**
- **Route suivie** : trajectoire réelle au sol
- **Dérive** : angle entre le cap et la route

#### Pourquoi y a-t-il dérive ?

> Le **vent traversier pousse l’avion de côté**.  
> Le pilote doit **corriger** en prenant un cap **"en crabe"** vers le vent, pour maintenir la route.

---

### 🧠 Image mentale

> 🧠 Imagine un crabe qui avance en diagonale : son corps pointe vers le vent, mais sa trajectoire reste droite. L’avion fait pareil quand il y a du vent traversier !

---

## Moyens mnémotechniques

- **"Sinus = Traversier"** ➝ provoque la **dérive**
- **"Cosinus = Effectif"** ➝ modifie la **vitesse sol**
- **"Cap ≠ route si vent de travers"** ➝ il faut **craber**

---

---

## ➕ Et après ?

Tu sais maintenant **décomposer le vent** selon son angle et comprendre **comment il provoque une dérive** qu’il faut corriger en crabe.

🎯 Dans la prochaine leçon, tu vas apprendre à **représenter cette situation avec un triangle** : c’est l’outil graphique essentiel pour **visualiser le cap, le vent et la route**.

👉 Rendez-vous dans **“Cap, dérive et triangle des vitesses”** pour mettre tout ça en image !

---
