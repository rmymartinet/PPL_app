---
title: "Traînée induite, effet de sol et facteurs de portance"
subtitle: "Optimiser la performance aérodynamique"
theme: "connaissance-avion"
category: "Phase 1"
duration: "30 min"
level: "Intermédiaire"
imageUrl: "/images/trainée-portance-prandtl.jpg"
objectives:
  - Comprendre l’origine de la traînée induite
  - Savoir comment l’effet de sol améliore la portance
  - Identifier les facteurs qui influencent portance et traînée
memo: "Tourbillon = traînée. Près du sol = portance bonus. Portance = ½ ρV²SCz"
qcm:
  - question: "Pourquoi le tourbillon de Prandtl crée-t-il une traînée ?"
    answers:
      - label: "Parce qu’il aspire l’avion vers le bas"
        correct: false
      - label: "Parce qu’il met de l’air en mouvement, ce qui demande de l’énergie"
        correct: true
      - label: "Parce qu’il augmente la pression sous l’aile"
        correct: false
  - question: "L’effet de sol a pour effet de :"
    answers:
      - label: "Augmenter la traînée induite"
        correct: false
      - label: "Réduire la traînée induite"
        correct: true
      - label: "Augmenter la portance par le moteur"
        correct: false
  - question: "Le coefficient de portance Cz dépend de :"
    answers:
      - label: "La densité de l’air"
        correct: false
      - label: "La forme de l’aile et de l’incidence"
        correct: true
      - label: "Le poids de l’avion"
        correct: false
---

# Résumé express

Le **tourbillon de Prandtl** engendre une **traînée induite**, qui freine l’avion.  
Cette traînée peut être **réduite par la proximité du sol** (effet de sol) ou par des **améliorations de l’aile** (winglets, allongement).  
La **portance réelle** dépend de plusieurs paramètres : densité de l’air, vitesse, surface alaire, **incidence**, et **Cz**.

# Leçon complète

## 🌪️ Tourbillon de Prandtl = traînée induite

- En bout d’aile, la différence de pression crée un **vortex**.
- Ce vortex consomme de l’énergie ➝ **traînée induite**

> À faible vitesse ou en montée, cette traînée augmente car la portance demandée est plus grande.

---

## 🚧 Comment réduire cette traînée ?

| Méthode           | Effet                               |
| ----------------- | ----------------------------------- |
| **Ailes longues** | Moins de vortex, meilleure finesse  |
| **Winglets**      | Canalise le flux, réduit la traînée |

> Ce sont des améliorations **aérodynamiques passives** très efficaces.

---

## 🌍 L’effet de sol

Quand l’avion vole **proche du sol** (décollage, atterrissage) :

- Le sol empêche la formation complète du tourbillon
- Résultat : **moins de traînée**, **plus de portance**

| Position de l’aile | Effet de sol |
| ------------------ | ------------ |
| Aile basse         | Très marqué  |
| Aile haute         | Réduit       |

> L’avion semble “flotter” : on parle de “coussin d’air”.

---

## 📊 Portance réelle – les facteurs

> Formule : **Za = ½ × ρ × V² × S × Cz**

| Paramètre            | Influence                        |
| -------------------- | -------------------------------- |
| **ρ** (densité)      | Plus dense ➝ plus de portance    |
| **V** (vitesse)      | Plus rapide ➝ plus de portance   |
| **S** (surface)      | Plus grande ➝ plus d’air déplacé |
| **Cz** (coefficient) | Dépend de la forme + incidence   |

---

## 🧪 Exemple concret

| Paramètre        | Symbole | Valeur    |
| ---------------- | ------- | --------- |
| Densité de l’air | ρ       | 1,2 kg/m³ |
| Vitesse          | V       | 60 m/s    |
| Surface alaire   | S       | 15 m²     |
| Cz               | Cz      | 1,1       |

**Portance :**  
Za = 0,5 × 1,2 × 60² × 15 × 1,1 = **35 640 N**  
→ Masse supportée ≈ 3 600 kg

**Traînée (Cx = 0,03) :**  
Xa = 0,5 × 1,2 × 60² × 15 × 0,03 = **972 N**

---

## 🎛️ Ce que contrôle le pilote

| Contrôlé par le pilote | Subi de l’environnement |
| ---------------------- | ----------------------- |
| Vitesse, incidence     | Densité, vent           |

---

## 🧩 Bonus : surface alaire & allongement

- **Surface alaire (S)** = totalité des ailes
- **Allongement** = envergure ÷ corde moyenne

> Plus l’allongement est grand ➝ moins de tourbillons ➝ meilleure finesse

---

# Récapitulatif final

✅ Portance = ½ ρ V² S Cz  
✅ Tourbillon = traînée induite  
✅ Effet de sol = portance “bonus”  
✅ Winglets = réduisent la traînée  
✅ Incidence + Cz = leviers du pilote
