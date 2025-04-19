---
title: "Principes généraux de la propagation des ondes"
subtitle: "Comprendre la portée et l’usage des ondes radioélectriques en aviation"
theme: "Les instruments de bord"
category: "Phase 4 - Environnement de vol"
duration: "20 min"
level: "Débutant"
imageUrl: "/images/propagation-ondes.jpg"
objectives:
  - Comprendre ce qu’est une onde radioélectrique et sa portée
  - Identifier les différentes gammes de fréquences utilisées en aviation
  - Distinguer les types de propagation selon les conditions
  - Connaitre la formule de portée optique et son application pratique
memo: "VHF = portée optique → D = 1,23 × √Z | HF/MF = ondes longues avec réflexion ionosphérique"
qcm:
  - question: "Quelle est la formule simplifiée pour calculer la portée optique en VHF ?"
    answers:
      - label: "D = 1,23 × (Z₁ + Z₂)"
        correct: false
      - label: "D = √Z / 1,23"
        correct: false
      - label: "D = 1,23 × √Z"
        correct: true
  - question: "Quelle bande de fréquence est la plus utilisée pour la radiotéléphonie aéronautique ?"
    answers:
      - label: "HF"
        correct: false
      - label: "VHF"
        correct: true
      - label: "UHF"
        correct: false
  - question: "Quelle est la portée max recommandée pour une station ATIS ?"
    answers:
      - label: "16 NM"
        correct: false
      - label: "25 NM"
        correct: false
      - label: "60 NM"
        correct: true
  - question: "Quelle onde est la plus sensible aux orages et perturbations ?"
    answers:
      - label: "HF"
        correct: false
      - label: "MF"
        correct: true
      - label: "VHF"
        correct: false
  - question: "Quelle technologie permet d'envoyer des données via satellite aux contrôleurs aériens ?"
    answers:
      - label: "VOR"
        correct: false
      - label: "CPDLC"
        correct: true
      - label: "NDB"
        correct: false
---

### Résumé express

Les ondes radioélectriques assurent la transmission des communications et des aides à la navigation. En aviation, la VHF est privilégiée car elle est stable et moins perturbée. Elle fonctionne par **portée optique** : si un obstacle bloque la vue, la communication est impossible. La portée dépend donc de l’altitude et s’estime avec une formule simple.

---

### Leçon complète

## 🌐 Qu’est-ce qu’une onde radioélectrique ?

C’est une **onde électromagnétique** qui transporte des données entre un **émetteur** et un **récepteur**. Sa portée dépend de :

- sa **fréquence** (en Hertz),
- sa **longueur d’onde** (en mètres),
- les **conditions atmosphériques**.

---

## 📡 Les gammes utilisées en aéronautique

| Gamme   | Fréquence        | Longueur d’onde | Utilisation                    |
| ------- | ---------------- | --------------- | ------------------------------ |
| **UHF** | 300 MHz à 3 GHz  | 10 cm à 1 m     | GPS, DME, SSR                  |
| **VHF** | 30 MHz à 300 MHz | 1 à 10 m        | Radiotéléphonie, VOR           |
| **HF**  | 3 MHz à 30 MHz   | 10 à 100 m      | Communications longue distance |
| **MF**  | 300 kHz à 3 MHz  | 100 m à 1 km    | NDB                            |

---

## 🌍 Types de propagation

- **Effet de sol** : l’onde suit la surface terrestre.
- **Effet ionosphérique** : l’onde est réfléchie par l’ionosphère (HF surtout).
- **Effet de nuit** : les ondes longues (HF/MF) portent mieux la nuit.

---

## 🔭 La VHF et la portée optique

La **VHF** fonctionne uniquement **en ligne directe**, sans obstacle. La portée est limitée à ce que le pilote voit.

### Formule simplifiée :

> **D (NM) = 1,23 × √Z**

Z = altitude de l’avion en pieds

| Altitude (ft) | Portée (NM) |
| ------------- | ----------- |
| 1000 ft       | 35 NM       |
| 4000 ft       | 75 NM       |

### Formule complète si on connaît aussi l’altitude de l’émetteur :

> **D = 1,23 × (√Z₁ + √Z₂)**

---

## ✈️ Portées opérationnelles recommandées

| Service ATS | Portée max                  |
| ----------- | --------------------------- |
| AFIS / A/A  | 16 NM – jusqu’à 3000 ft AAL |
| TWR         | 25 NM – jusqu’à 4000 ft AAL |
| APP         | 25 à 50 NM jusqu’à FL250    |
| ATIS        | 60 NM jusqu’à FL200         |

---

## 🛰️ Satcom et liaisons longue distance

Pour les **vols au long cours**, les avions utilisent des **liaisons satellites** :

- Réseaux : **Inmarsat**, **Iridium**
- Système **CPDLC** (Controller Pilot Data Link Communications) :
  - Communication **sans voix**, par messages de position, météo, instructions…

---

### Moyens mnémotechniques

- **VHF = Vue directe** (optique)
- **D = 1,23 × √Z** (en NM)
- **HF/MF** : ondes longues → réfléchies par l’ionosphère
- **CPDLC = message DATA sans voix**
