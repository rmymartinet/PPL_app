---
title: "Profil d’aile et forces agissant sur un profil"
subtitle: "Structure du profil, types et effet Bernoulli"
theme: "connaissance-avion"
category: "Phase 1"
duration: "20 min"
level: "Débutant"
imageUrl: "/images/profil-aile.jpg"
objectives:
  - Comprendre les différentes parties d’un profil d’aile
  - Connaître les différents types de profils d’aile
  - Expliquer la relation entre vitesse et pression (effet Venturi / Bernoulli)
memo: "Portance = différence de pression. Vitesse ↑ → Pression ↓. Extrados = aspiration."
qcm:
  - question: "La corde du profil relie :"
    answers:
      - label: "L’extrados à l’intrados"
        correct: false
      - label: "Le bord d’attaque au bord de fuite"
        correct: true
      - label: "La partie avant au centre de gravité"
        correct: false
  - question: "Le profil biconvexe symétrique est utilisé pour :"
    answers:
      - label: "Les vols lents"
        correct: false
      - label: "Les empennages et la voltige"
        correct: true
      - label: "Les avions de transport"
        correct: false
  - question: "Que se passe-t-il quand la vitesse augmente dans un tube de courant ?"
    answers:
      - label: "La pression statique augmente"
        correct: false
      - label: "La pression statique diminue"
        correct: true
      - label: "Rien ne change"
        correct: false
---

# Résumé express

Un profil d’aile possède une **corde**, une **ligne moyenne**, une **épaisseur**, un **extrados** et un **intrados**.  
L’air s’écoule plus vite sur l’extrados, ce qui provoque une baisse de pression.  
Cette différence de pression entre le dessus et le dessous crée une force : **la portance**.  
Les profils sont symétriques ou dissymétriques, selon le type de vol.

# Leçon complète

## Les parties d’un profil d’aile

| Élément           | Description                                   |
| ----------------- | --------------------------------------------- |
| **Corde**         | Ligne droite entre bord d’attaque et de fuite |
| **Ligne moyenne** | Ligne médiane entre extrados et intrados      |
| **Épaisseur**     | Distance entre extrados et intrados           |
| **Extrados**      | Face supérieure du profil                     |
| **Intrados**      | Face inférieure du profil                     |

> Visualise l’aile comme une goutte aplatie : la corde est sa colonne vertébrale.

---

## Les types de profils d’aile

### Biconvexe dissymétrique

- Ligne moyenne courbe
- Extrados + intrados convexes
- Optimisé pour la portance à basse vitesse (avions légers)

### Biconvexe symétrique

- Ligne moyenne droite
- Utilisé pour :
  - Les empennages
  - Les avions de voltige

### Plan convexe

- Intrados plat, extrados arrondi
- Bon rendement à haute vitesse

### Profil supercritique

- Extrados aplati, intrados arrondi
- Utilisé sur avions de ligne pour optimiser l’écoulement en croisière

---

## Vitesse et pression – Effet Venturi / Bernoulli

### Principe physique

Quand un fluide accélère, sa pression diminue.  
C’est le principe de Bernoulli (ou Venturi dans un conduit).

| Zone           | Vitesse | Pression |
| -------------- | ------- | -------- |
| Partie étroite | ↑       | ↓        |
| Partie large   | ↓       | ↑        |

---

### Application au profil d’aile

- L’air accélère au-dessus (extrados) → pression diminue
- L’air ralentit en dessous (intrados) → pression augmente

| Partie de l’aile | Forme  | Vitesse | Pression |
| ---------------- | ------ | ------- | -------- |
| **Extrados**     | Courbé | ↑↑      | ↓↓       |
| **Intrados**     | Plat   | ↓       | ↑        |

➡️ Cette différence crée une **force vers le haut** : la **portance**

> On verra dans la prochaine leçon comment cette portance dépend aussi de l’**incidence** de l’aile et de phénomènes induits comme le **tourbillon de Prandtl**.
