---
title: "L’horizon artificiel sur EFIS"
subtitle: "Du gyroscope mécanique à l’AHRS moderne"
theme: "Les instruments de bord"
category: "Phase 1 - Connaissance de l’avion"
duration: "15 min"
level: "Débutant"
imageUrl: "/images/horizon-efis.jpg"
objectives:
  - Comprendre comment l’EFIS affiche l’attitude
  - Différencier le gyroscope mécanique de l’AHRS
  - Identifier les fonctions de l’horizon artificiel numérique
memo: "Sur EFIS, ce n’est plus un gyroscope, mais l’AHRS qui donne l’attitude !"
qcm:
  - question: "Quel système remplace les gyroscopes mécaniques dans un EFIS ?"
    answers:
      - label: "Le conservateur de cap"
        correct: false
      - label: "L’AHRS (Attitude and Heading Reference System)"
        correct: true
      - label: "Le variomètre"
        correct: false
  - question: "Que se passe-t-il si l’AHRS tombe en panne ?"
    answers:
      - label: "On perd l’horizon artificiel"
        correct: true
      - label: "L’altimètre devient faux"
        correct: false
      - label: "Le moteur s’arrête"
        correct: false
---

## Résumé express

Sur un **EFIS**, l’horizon artificiel ne repose plus sur un gyroscope mécanique, mais sur un **système électronique : l’AHRS**. Ce dernier intègre des capteurs (gyromètres, accéléromètres, capteurs magnétiques) pour afficher l’**attitude**, le **cap** et parfois une **vision synthétique** du relief. En cas de panne de l’AHRS, l’attitude disparaît et un message **ATTITUDE FAIL** s’affiche à l’écran.

---

## Leçon complète

### ⚙️ Le gyroscope mécanique (ancien système)

- Utilisé dans les avions classiques
- Dépend d’une **pompe à vide** pour tourner
- Sensible aux pannes de pression → perte d’attitude

---

### 🔁 Passage au numérique : l’AHRS

L’**Attitude and Heading Reference System** remplace les instruments mécaniques. Il regroupe :

| Capteur               | Fonction principale                         |
|-----------------------|---------------------------------------------|
| 🌀 Gyromètres          | Vitesse de rotation (tangage, roulis…)       |
| 📐 Accéléromètres      | Inclinaison, vitesse verticale               |
| 🧲 Capteurs magnétiques | Orientation par rapport au nord magnétique   |

> 🧠 Comme dans un smartphone, ces capteurs permettent de reconstituer l’orientation spatiale de l’avion.

---

### 🖥️ Affichage sur EFIS (PFD)

L’AHRS alimente le **Primary Flight Display** avec :

- L’**attitude** (assiette + inclinaison)
- Le **cap magnétique**
- L’**horizon artificiel** numérique (avec couleurs, symboles, vecteur vitesse, etc.)

---

### 🚨 En cas de panne : ATTITUDE FAIL

Si l’AHRS tombe en panne :

- L’horizon artificiel disparaît
- Un message **"ATTITUDE FAIL"** s’affiche
- Tu perds l’indicateur principal en vol sans visibilité

#### Réflexes du pilote :

- Stabiliser l’avion
- Se référer aux autres instruments (altimètre, compas, conservateur…)
- Prévenir la tour

---

### ➡️ Et maintenant ?

Tu vas découvrir un outil complémentaire affiché sur certains EFIS : la **vision synthétique**, ainsi que l’**indicateur bille-aiguille**, indispensable pour piloter en virage.

---

## Moyens mnémotechniques

- 🧠 **AHRS = cerveau électronique du vol**
- 🚨 **ATTITUDE FAIL** = calme, stabilise, préviens
- 🌀 **Tout numérique** → adieu les gyros mécaniques
- 🎮 Capteurs intégrés comme dans ton smartphone