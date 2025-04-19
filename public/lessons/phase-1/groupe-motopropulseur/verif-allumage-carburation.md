---
title: "Vérification du circuit d’allumage et introduction à la carburation"
subtitle: "Comprendre la vérification des magnétos et les bases du mélange air-essence"
theme: "moteur-et-propulsion"
category: "Phase 1 - Connaissance de l'avion"
duration: "20 min"
level: "Débutant"
imageUrl: "/images/verif-allumage-carbu.jpg"
objectives:
  - Savoir vérifier les magnétos avant le vol
  - Comprendre la différence entre allumage mécanique et électronique
  - Connaître les principes de base de la carburation
memo: "RPM x10 = lecture indirecte : chute de 0,5 = 50 tr/min. Absence de chute = magnéto défectueuse !"
qcm:
  - question: "Quelle est la cause probable si l’on observe une absence de chute de régime lors de la vérification des magnétos ?"
    answers:
      - label: "Bougie sale"
        correct: false
      - label: "Circuit de coupure défectueux"
        correct: true
      - label: "Température extérieure"
        correct: false
  - question: "Le système d’allumage électronique est utilisé principalement :"
    answers:
      - label: "À basse altitude"
        correct: false
      - label: "Sur moteurs à faible régime"
        correct: false
      - label: "Sur moteurs à régime élevé"
        correct: true
  - question: "Dans un carburateur, l’essence est aspirée grâce à :"
    answers:
      - label: "Une pompe électrique"
        correct: false
      - label: "L’effet Venturi"
        correct: true
      - label: "La pression des cylindres"
        correct: false
  - question: "Une détonation mal contrôlée peut provoquer :"
    answers:
      - label: "Une baisse de température"
        correct: false
      - label: "Un bruit sourd sans conséquences"
        correct: false
      - label: "Une rupture du piston"
        correct: true
---

## Résumé express

Avant chaque vol, il faut tester les magnétos séparément pour vérifier leur bon fonctionnement. Une **chute de régime normale** est attendue. Une absence de chute peut signaler une **panne du fil de coupure**, un **risque majeur**.  
L’**allumage électronique**, utilisé sur les moteurs modernes, est plus précis et stable.  
La **carburation** prépare le mélange air-essence. Si elle est mal réglée, elle peut provoquer **cliquetis** ou **casse moteur**.

---

## Leçon complète

### ✅ Vérification du circuit d’allumage

> 🔄 Tu sais maintenant comment fonctionne le système à magnétos. Voyons comment **le tester avant chaque vol.**

La vérification permet de :

- S'assurer que **chaque magnéto fonctionne individuellement**
- Détecter tout **écart anormal de régime**
- Garantir un **allumage fiable** dès le décollage

**Procédure standard :**

1. Sélectionner **G (magnéto gauche)** → chute légère de régime
2. Puis **D (magnéto droite)** → chute similaire
3. Revenir en **BOTH (G + D)**

| Situation                  | Interprétation                       |
| -------------------------- | ------------------------------------ |
| Chute modérée (~50 tr/min) | Fonctionnement normal                |
| Chute forte (>75 tr/min)   | Défaut probable sur la magnéto       |
| **Aucune chute observée**  | ⚠️ **Circuit de coupure défectueux** |

> ⚠️ En cas d’anomalie → **annuler le vol immédiatement**

---

### ⚡ Allumage électronique

> ❓Pourquoi certains moteurs modernes abandonnent les magnétos ?

À **haut régime**, les magnétos montrent leurs limites.  
L’**allumage électronique** est :

- Plus **stable** et **précis**
- Moins soumis à l’usure mécanique
- Capable de **moduler l’avance à l’allumage automatiquement**

**Composants :**

- **Boîtier électronique**
- **Capteurs** de position, température, régime
- **Bobine haute tension**

> 💡 Résultat : combustion plus propre, meilleures performances, moins d’entretien

---

### 🔍 Comparatif rapide

| Critère          | Magnéto (mécanique)   | Allumage électronique               |
| ---------------- | --------------------- | ----------------------------------- |
| Source d’énergie | Moteur (autonome)     | Capteurs + électronique             |
| Précision        | Moyenne (avance fixe) | Haute (avance variable)             |
| Fiabilité        | Très robuste          | Dépend de l’alimentation électrique |
| Entretien        | Régulier              | Faible                              |

---

## 🔬 Introduction à la carburation

> 🔁 L’étincelle seule ne suffit pas : encore faut-il un bon **mélange air-essence**.

Le **carburateur** a pour rôle :

- De **préparer** ce mélange
- De **l’ajuster** selon la densité de l’air (altitude, température)
- De **l’envoyer** dans le moteur sous forme pulvérisée

---

### 🍽️ Fonctionnement du carburateur

| Élément               | Fonction                                          |
| --------------------- | ------------------------------------------------- |
| **Venturi**           | Crée une dépression qui aspire l’essence          |
| **Cuve à flotteur**   | Maintient un niveau stable de carburant           |
| **Gicleur**           | Pulvérise le carburant dans le flux d’air         |
| **Papillon**          | Règle le débit total d’air (lié à la manette gaz) |
| **Commande richesse** | Ajuste le ratio air/essence manuellement          |

> ⚠️ Un carburateur mal réglé peut provoquer :

- **Détonation violente**
- **Cliquetis dangereux**
- **Casse moteur (piston, soupapes, etc.)**

---

## Mémo visuel & astuces

- 📉 **Lecture du compte-tours x10** : une chute de 0,5 = 50 tr/min
- 🔌 **Pas de chute de régime ?** ➜ circuit de coupure défectueux
- 🌪️ **Venturi** : effet gorge → dépression = aspiration
- 🔥 **Détonation** = explosion incontrôlée ➜ casse assurée
- 💻 **Allumage électronique** : pas d’usure, pas de calage manuel

---

👉 Tu connais maintenant les principes de la carburation et le rôle du carburateur dans le mélange air-essence. Il est temps d’explorer le carburateur à flotteur en détail, et de comprendre un risque bien réel en vol : le givrage du carburateur.
