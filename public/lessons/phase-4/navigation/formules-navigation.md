---
title: "Aide-mémoire et formules pratiques de navigation"
subtitle: "Les raccourcis intelligents du pilote efficace"
theme: "navigation"
category: "Phase 4 : Navigation"
duration: "20 min"
level: "Intermédiaire"
imageUrl: "/images/formules-navigation.jpg"
objectives:
  - Mémoriser les abréviations essentielles en navigation
  - Comprendre les relations entre cap, route, dérive, déclinaison et déviation
  - Utiliser les formules pratiques de temps de vol avec ou sans vent
  - Calculer la dérive maximale et le vent effectif
memo: "60/VP pour le facteur de base, dérive = sinus, vent effectif = cosinus !"
qcm:
  - question: "Quelle est la formule du temps sans vent ?"
    answers:
      - label: "60 / VS x D"
        correct: false
      - label: "60 / VP x D"
        correct: true
      - label: "60 / Fb x D"
        correct: false
  - question: "Quelle relation est correcte ?"
    answers:
      - label: "Cv = Rv + X"
        correct: false
      - label: "Cm = Cv - Dm"
        correct: true
      - label: "Rv = Cv - X"
        correct: false
  - question: "Que signifie une dérive positive ?"
    answers:
      - label: "L'avion part à gauche"
        correct: false
      - label: "L'avion reste sur la route"
        correct: false
      - label: "L'avion part à droite"
        correct: true
  - question: "La formule du vent effectif est :"
    answers:
      - label: "Vent x sin(angle)"
        correct: false
      - label: "Vent x cos(angle)"
        correct: true
      - label: "Vent / angle"
        correct: false
  - question: "Le facteur de base (Fb) est :"
    answers:
      - label: "60 / D"
        correct: false
      - label: "60 / VS"
        correct: false
      - label: "60 / VP"
        correct: true
---

## Résumé express

Naviguer avec rigueur, c’est aussi **mémoriser les abréviations clés** et **maîtriser les formules de base** :

- Les **caps** (vrai, magnétique, compas) se déduisent les uns des autres avec la **déclinaison** et la **déviation**
- Le **temps de vol** dépend du **vent** et s’ajuste grâce au **vent effectif**
- La **dérive maximale** se corrige par la formule de base **Fb = 60 / VP**

---

## Leçon complète

### 🧠 Aide-mémoire des abréviations

| Élément                | Abréviation |
| ---------------------- | ----------- |
| Nord vrai              | Nv          |
| Nord magnétique        | Nm          |
| Nord compas            | Nc          |
| Route vraie            | Rv          |
| Route magnétique       | Rm          |
| Cap vrai               | Cv          |
| Cap magnétique         | Cm          |
| Cap compas             | Cc          |
| Dérive                 | X           |
| Déclinaison magnétique | Dm          |
| Déviation compas       | d           |

---

### 🔁 Relations fondamentales

> ℹ️ Pour passer de l’un à l’autre :

- `Rv - X = Cv`
- `Cv - Dm = Cm`
- `Cm - d = Cc`

Et dans l’autre sens :

- `Cc + d = Cm`
- `Cm + Dm = Cv`
- `Cv + X = Rv`

> 💡 **X > 0** : vent venant de la **gauche** → l’avion dérive **vers la droite**

---

## 📏 Formules pratiques de navigation

### ⏱ Temps sans vent (Tsv)

```text
Tsv = (60 / VP) × D
     = Fb × D

•	VP = vitesse propre (kt)
•	D = distance (NM)
•	Fb = facteur de base : 60 ÷ VP
```

### 💨 Temps avec vent (Tav)

Plusieurs formules possibles :

```text
Tav = (60 / VS) × D
Tav = (VP / VS) × Tsv
Tav = Tsv + Tsv × (Vent effectif / VP)

•	VS = vitesse sol
•	Vent effectif = composante du vent dans le sens de la route
•	Tsv = temps sans vent
```

### 🧭 Dérive maximale

```text
Xmax = Vent × Fb

```

### 🎯 Dérive en fonction de l’angle au vent

```text
Dérive = Xmax × sin(α)
```

### 💡 Vent effectif

```text

Vent effectif = Vent × cos(α)
```
