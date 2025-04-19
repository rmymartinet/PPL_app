---
title: "Les EFIS et leurs fonctions avancées"
subtitle: "Cockpit numérique et informations intégrées"
theme: "cellule-avion"
category: "Phase 1"
duration: "20 min"
level: "Débutant à intermédiaire"
imageUrl: "/images/efis-avance.jpg"
objectives:
  - Comprendre les composants des EFIS modernes (PFD, MFD, AHRS, ADC)
  - Connaître les fonctions d’un système EFIS/MFD/EMS
  - Identifier les instruments affichés par le ND (Navigation Display)
memo: "PFD = infos de vol primaires, MFD = fonctions étendues, AHRS = attitude + cap, EMS = paramètres moteur."
qcm:
  - question: "Que signifie l'acronyme AHRS ?"
    answers:
      - label: "Altitude and Heading Radar System"
        correct: false
      - label: "Attitude and Heading Reference System"
        correct: true
      - label: "Air and Horizontal Radar System"
        correct: false
  - question: "Quelle est la différence entre un PFD et un MFD ?"
    answers:
      - label: "Le PFD affiche les données moteurs, le MFD les instruments primaires"
        correct: false
      - label: "Le PFD est une carte, le MFD donne l'attitude"
        correct: false
      - label: "Le PFD affiche les infos de vol principales, le MFD affiche des fonctions supplémentaires"
        correct: true
  - question: "Quel système affiche les données moteurs ?"
    answers:
      - label: "ND"
        correct: false
      - label: "EMS"
        correct: true
      - label: "GPS"
        correct: false
  - question: "Le ND est l’évolution de quels instruments analogiques ?"
    answers:
      - label: "L’anémomètre et l’altimètre"
        correct: false
      - label: "Le conservateur de cap et le compas"
        correct: false
      - label: "Le HSI et le RMI"
        correct: true
---

## Résumé express

Les EFIS modernes regroupent toutes les infos de vol sur des écrans numériques. Le PFD affiche les données essentielles grâce à l’AHRS (attitude et cap) et à l’ADC (données de pression : vitesse, altitude, vario). Le MFD affiche les fonctions secondaires comme les cartes, alertes ou moteurs (EMS). Le ND remplace le HSI/RMI. Tous ces éléments reposent sur des capteurs physiques que tu découvriras dans la prochaine leçon.

---

## Leçon complète

### 🎯 Le PFD – Primary Flight Display

Affiche :

- 🧭 Cap
- 📐 Attitude (assiette)
- 📏 Altitude
- 🌀 Vitesse air
- 📈 Variomètre
- 🔄 Taux de virage / bille

---

### 🧠 AHRS et ADC

- **AHRS** (_Attitude and Heading Reference System_)  
  ➝ Fournit l’attitude et le cap en remplaçant les gyros mécaniques.

- **ADC** (_Air Data Computer_)  
  ➝ Traite les données de pression (vitesse, altitude, vario) issues du **circuit anémométrique** (Pitot/statique).

> 🔄 Le PFD **n’affiche pas les mesures brutes**, mais des **données traitées** et intégrées.

---

### 📺 Le MFD – Multi Function Display

Complémentaire du PFD :

- 🔧 Paramètres moteurs (**EMS**)
- 🛢️ Carburant, systèmes électriques
- 📋 Checklists, messages d’alerte
- 🗺️ Cartes de navigation

---

### 🌍 ND – Navigation Display

Carte dynamique affichée sur le MFD :

- Cap, vitesse sol, ETA
- Waypoints, espaces aériens
- Remplace HSI et RMI

> ⚠️ Base GPS à jour obligatoire (cycle de 28 jours)

---

### 🛠️ EMS – Engine Monitoring System

- 🌡️ Température
- ⚙️ Pression
- 🔁 RPM
- ⛽ Carburant

---

## Moyens mnémotechniques

- **PFD** ➝ Pilot Flight Data
- **MFD** ➝ Multi Fonctions Diverses
- **AHRS** ➝ Attitude + Cap sans gyro
- **ADC** ➝ Pressions converties en données de vol
- **ND** ➝ Navigation Dynamique (remplace HSI/RMI)
- **EMS** ➝ État du Moteur en Surveillance

---

## 📝 Transition pédagogique

> Tu sais maintenant comment les écrans du cockpit numérique affichent toutes les données de vol. Mais **d’où viennent réellement ces infos ?** Dans la prochaine leçon, on remonte à la source : les capteurs de pression d’air, le tube de Pitot, la prise statique… tout ce qui alimente l’ADC et le circuit anémométrique.