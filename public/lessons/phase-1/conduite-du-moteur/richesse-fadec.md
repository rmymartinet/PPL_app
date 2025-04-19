---
title: "Richesse et FADEC"
subtitle: "Optimisation du mélange et conduite moteur assistée"
theme: "moteur-et-propulsion"
category: "Phase 1 - Connaissance de l'avion"
duration: "8 min"
level: "Avancé"
imageUrl: "/images/richesse-fadec.png"
objectives:
  - Comprendre le rôle de l'EGT dans le réglage de la richesse
  - Savoir exploiter RPM, PA et Fuel Flow pour une gestion moteur optimale
  - Appliquer la procédure d'enrichissement avant descente
  - Identifier le fonctionnement d’un moteur FADEC et ses implications
memo: >
  EGT = appauvris jusqu’au pic 🔥 → enrichis un peu pour refroidir ❄️  
  FADEC = mono-manette + optimisation automatique
qcm:
  - question: "Pourquoi faut-il enrichir le mélange avant une descente ?"
    answers:
      - label: "Pour augmenter la vitesse de descente"
        correct: false
      - label: "Pour éviter une surchauffe moteur en cas de remise de gaz"
        correct: true
      - label: "Pour démarrer le chauffage cabine"
        correct: false
  - question: "Que signifie FADEC ?"
    answers:
      - label: "Full Automatic Data Engine Calibration"
        correct: false
      - label: "Full Authority Digital Engine Control"
        correct: true
      - label: "Fixed Air Density Engine Calibration"
        correct: false
  - question: "Lors d’un réglage avec EGT, où placer l’index rouge ?"
    answers:
      - label: "En bas de l’échelle"
        correct: false
      - label: "Sur la valeur EGT maximale observée"
        correct: true
      - label: "Sur la valeur EGT au décollage"
        correct: false
  - question: "Quel est le gain en consommation estimé avec un système FADEC ?"
    answers:
      - label: "5 %"
        correct: false
      - label: "10 %"
        correct: false
      - label: "15 à 20 %"
        correct: true
---

## Résumé express

- En croisière, on appauvrit jusqu’au **pic EGT**, puis on enrichit légèrement pour rester dans une **zone sécurisée**.
- Il est crucial de **ré-enrichir avant une descente** pour prévenir tout risque en cas de remise de gaz.
- Le **FADEC** automatise la gestion moteur : une seule manette, calculateur intégré (ECU), gestion optimale sans intervention du pilote.

---

## Instruments pour le réglage précis

| Paramètre                 | Instrument              | Unité      |
| ------------------------- | ----------------------- | ---------- |
| Régime moteur             | Tachymètre (RPM)        | tr/min     |
| Pression d’admission      | Manifold Pressure Gauge | inHg       |
| Débit carburant           | Fuel Flow Indicator     | l/h ou GPH |
| Température d’échappement | EGT Gauge               | °C ou °F   |

---

## Réglage de richesse avec l’EGT

### Étapes :

1. **Appauvrir progressivement** → EGT augmente
2. Identifier le **pic EGT** (température max)
3. Placer l’**index rouge** comme repère
4. **Enrichir légèrement** (2-3 crans)
5. Tu es dans la **zone optimale**

⚠️ Éviter de voler **pile au pic** → risque de surchauffe des culasses et soupapes

---

## Variante plus conservatrice

- Commencer **plein riche**, puis **appauvrir doucement**
- S’arrêter 2-3 crans **avant** le pic EGT

---

## Avant la descente

- **Toujours ré-enrichir** avant de réduire la puissance
- Cela évite une **remise de gaz brutale** avec mélange trop pauvre

---

## FADEC – gestion intelligente du moteur

### Fonctionnement

- Système **automatisé** géré par une **ECU**
- Une seule manette ➜ le FADEC règle :
  - Le débit carburant
  - Le régime
  - Le pas d’hélice (si applicable)

### Avantages

| Bénéfice               | Détail                             |
| ---------------------- | ---------------------------------- |
| Gain de consommation   | Environ **15 à 20 %**              |
| Simplicité de conduite | Aucune gestion manuelle du mélange |
| Sécurité               | Réduction du risque d'erreur       |

> Le FADEC nécessite une **qualification SLPC** (Single Lever Power Control)

---

## 🧠 Moyens mnémotechniques

- **EGT** = Enrichis Gauche Température 🌡️
- **PA + RPM + Fuel Flow** = trio gagnant
- **Avant descente ➜ enrichis !**
- **FADEC = Fini les réglages manuels**

---
