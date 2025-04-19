---
title: "Contrôle du fonctionnement de l’anémomètre"
subtitle: "Détecter les pannes liées au tube de Pitot et aux pressions statiques"
theme: "instruments-de-bord"
category: "Phase 1 - Connaissance de l'avion"
duration: "15 min"
level: "Débutant"
imageUrl: "/images/controle-anemometre.jpg"
objectives:
  - Identifier les pannes liées au tube de Pitot et au circuit statique
  - Réagir correctement en cas de mauvaise indication de vitesse
  - Comprendre les effets sur les instruments du bord
  - Appliquer les vérifications avant le vol
memo: "Cache-Pitot oublié = pas de Badin → Interruption immédiate !"
qcm:
  - question: "Que signifie un anémomètre qui n’indique rien au décollage ?"
    answers:
      - label: "L’altitude est trop basse"
        correct: false
      - label: "Le variomètre est bloqué"
        correct: false
      - label: "Le cache-Pitot n’a pas été retiré"
        correct: true
  - question: "Que se passe-t-il si la prise de pression statique est bouchée en montée ?"
    answers:
      - label: "L’anémomètre surestime la vitesse"
        correct: false
      - label: "L’anémomètre sous-estime la vitesse"
        correct: true
      - label: "L’anémomètre indique 0"
        correct: false
  - question: "Quel est le risque si le circuit Pitot est bouché en descente ?"
    answers:
      - label: "Indication de vitesse correcte"
        correct: false
      - label: "Sous-estimation de la vitesse"
        correct: false
      - label: "Surestimation de la vitesse"
        correct: true
  - question: "Pourquoi l’anémomètre peut-il surestimer la vitesse ?"
    answers:
      - label: "Ps baisse et Pt reste bloqué"
        correct: true
      - label: "Ps augmente et Pt baisse"
        correct: false
      - label: "Pt et Ps augmentent"
        correct: false
---

## Résumé express

Un anémomètre fiable est essentiel. Si le **tube de Pitot** ou la **prise statique** sont bouchés, l’indication de vitesse devient fausse. Cela peut conduire à un **décollage dangereux** ou à une **mauvaise lecture en vol**. La **vérification avant vol** est donc indispensable. Ces blocages peuvent également affecter l’altimètre et le variomètre.

---

## Leçon complète

### 🛫 Vérification avant vol

> ❓ Que vérifier impérativement avant de rouler ?

- ✅ **Tube de Pitot débouché**
- ✅ **Prises statiques dégagées**
- ✅ **Cache-Pitot bien retiré**

> ⚠️ Si tu vois que le **Badin n’est pas actif**, **interromps immédiatement le décollage.**

---

### 🧯 Pannes du tube de Pitot (pression totale)

| Situation                           | Effet sur l’anémomètre                                                |
| ----------------------------------- | --------------------------------------------------------------------- |
| **Cache-Pitot oublié**              | Anémomètre reste à **0 kt** au décollage                              |
| **Orifice bouché, drain libre**     | L’indicateur reste à **0 kt** (pression statique uniquement)          |
| **Orifice rétréci**                 | Indication lente ou imprécise                                         |
| **Blocage total (orifice + drain)** | Montée → vitesse **surestimée** / Descente → vitesse **sous-estimée** |

---

### 💨 Pannes du circuit statique

> ❓ Quels instruments sont concernés ?

- 🌀 **Anémomètre**
- 📏 **Altimètre**
- 📈 **Variomètre**

#### Blocage en montée :

- Ps reste constante → Vitesse **sous-estimée**, altimètre et variomètre **figés**

#### Blocage en descente :

- Ps reste basse → Vitesse **surestimée**

> 💡 Une **prise statique de secours** en cabine peut compenser en cas de panne externe.

---

### ❄️ Blocage complet : Pitot + Statique

> Givrage possible si chauffage inopérant

Conséquences :

- Anémomètre = bloqué sur la dernière valeur
- Altimètre = figé
- Variomètre = **0 ft/min**

---

### Transition

👉 Dans la prochaine leçon, tu verras **comment utiliser efficacement l’altimètre et le variomètre** pendant la montée et la descente, avec l’aide de l’EFIS et la fameuse **règle du 1/10e** pour anticiper parfaitement ton altitude cible.

---

## Moyens mnémotechniques

- **Badin à 0 = Pitot bouché**
- **Bloc statique = 3 instruments figés**
- **Montée → vitesse surestimée si Pitot bloqué**
- **Check “Badin actif ?” avant le décollage**
- **Prise statique de secours = ton plan B intérieur**
