---
title: "Les vitesses limites et l’anémomètre EFIS"
subtitle: "Interpréter les arcs colorés et les affichages numériques"
theme: "Les instruments de bord"
category: "Phase 1"
duration: "15 min"
level: "Débutant"
imageUrl: "/images/anemometre-efis.jpg"
objectives:
  - Identifier les vitesses limites sur un anémomètre classique
  - Comprendre la signification des arcs de couleur
  - Savoir lire un anémomètre numérique (EFIS)
memo: "Les couleurs de l’anémomètre indiquent les vitesses à respecter selon la phase de vol. La VNE (trait rouge) ne doit jamais être dépassée."
qcm:
  - question: "Que signifie l’arc jaune sur l’anémomètre ?"
    answers:
      - label: "Zone de turbulence forte"
        correct: false
      - label: "Zone de vol déconseillée sauf en air calme"
        correct: true
      - label: "Zone d’utilisation normale"
        correct: false
  - question: "Que représente la VNE ?"
    answers:
      - label: "Vitesse recommandée en croisière"
        correct: false
      - label: "Vitesse maximale en air calme"
        correct: false
      - label: "Vitesse à ne jamais dépasser"
        correct: true
  - question: "Quel arc correspond à la configuration d’atterrissage ?"
    answers:
      - label: "Arc vert"
        correct: false
      - label: "Arc jaune"
        correct: false
      - label: "Arc blanc"
        correct: true
  - question: "VLO est :"
    answers:
      - label: "La vitesse max d’utilisation des volets"
        correct: false
      - label: "La vitesse max de manœuvre du train"
        correct: true
      - label: "La vitesse à ne jamais dépasser"
        correct: false
---

## Résumé express

Les arcs colorés de l’anémomètre indiquent les vitesses limites à respecter en fonction de la configuration de vol. Chaque plage correspond à une situation précise (décrochage, atterrissage, turbulence, etc.). Les EFIS modernes reprennent ces codes en format numérique, avec parfois une projection anticipée (bande magenta).

---

## Leçon complète

### 🟢 Les arcs de couleur de l’anémomètre

#### ✅ Arc vert : zone de vol normale

- Volets et train **rentrés**
- De **VS1** (décrochage sans volets) à **VNO** (max recommandée en air agité)

#### ⬜ Arc blanc : phase atterrissage

- Volets **sortis**
- De **VS0** (décrochage avec volets) à **VFE** (vitesse max volets)

#### 🟡 Arc jaune : prudence

- Entre **VNO** et **VNE**
- À utiliser **seulement en air calme**
- ⚠️ En turbulence, risque de **dommages structurels**

#### 🔴 Trait rouge : VNE

- **Vitesse à ne jamais dépasser**
- Même en air calme ou en ligne droite
- Tout excès = danger pour la cellule

---

### 🧾 Autres vitesses à connaître

| Code    | Signification                     |
| ------- | --------------------------------- |
| **VLO** | Max pour manœuvrer le **train**   |
| **VLE** | Max autorisée **train sorti**     |
| **VFO** | Max pour manœuvrer les **volets** |

> 📘 Ces vitesses figurent dans le manuel de vol et parfois sur le cadran.

---

### 🧭 L’anémomètre EFIS (écran numérique)

L’EFIS (Electronic Flight Instrument System) affiche la vitesse en bande verticale à gauche du PFD.

#### Il montre :

- Les mêmes **codes couleurs**
- Des **valeurs numériques précises** (ex. : 112 kt)
- Des infos complémentaires :
  - **GS** (Ground Speed)
  - **TAS** (True Air Speed)
  - **VX / VY**
  - **Finesse max**

#### ✅ Bande magenta

- Anticipation : indique la vitesse projetée si tu maintiens ta trajectoire
- Permet d’**éviter un dépassement** ou une **perte de vitesse** à venir

> 🧠 L’EFIS facilite la lecture, la prévision et la sécurité.

---

## Moyens mnémotechniques

- 🟢 Vert = vol normal (VS1 à VNO)
- ⬜ Blanc = volets sortis (VS0 à VFE)
- 🟡 Jaune = prudence (VNO à VNE)
- 🔴 Rouge = danger (VNE)
- 🛬 VLO = manœuvre du train
- ✈️ VLE = train sorti
- ⚙️ VFO = volets en action

---

## Transition vers la prochaine leçon

Mais comment être sûr que toutes ces indications sont **fiables** ? Que se passe-t-il si un circuit est **bouché** ?  
👉 C’est ce qu’on va voir maintenant, avec le **contrôle du bon fonctionnement de l’anémomètre**.
