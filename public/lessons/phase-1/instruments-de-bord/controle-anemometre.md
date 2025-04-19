---
title: "Contrôle du fonctionnement de l’anémomètre"
subtitle: "Identifier les pannes liées aux circuits Pitot et statique"
theme: "Les instruments de bord"
category: "Phase 1"
duration: "15 min"
level: "Débutant"
imageUrl: "/images/controle-anemometre.jpg"
objectives:
  - Savoir vérifier les prises de pression avant le vol
  - Identifier les signes d’un dysfonctionnement du tube de Pitot ou du circuit statique
  - Comprendre les conséquences sur les instruments
memo: "Avant chaque vol : vérifier le cache-Pitot et les prises statiques pour garantir un badin fiable."
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

Avant le vol, il est essentiel de s’assurer que le **tube de Pitot** (pression totale) et les **prises statiques** ne sont pas bouchés. Un dysfonctionnement sur l’un de ces circuits fausse les indications de vitesse, mettant en péril la sécurité du vol.

---

## Leçon complète

### 🔍 Vérification avant le vol

Le circuit de l’anémomètre repose sur deux sources de pression :

- Le **tube de Pitot** (Pt)
- Les **prises statiques** (Ps)

> ⚠️ Obstruction = données **fausses, figées ou incohérentes**

---

### 🚨 Dysfonctionnements du circuit Pitot

| Problème                              | Symptôme                                                   |
| ------------------------------------- | ---------------------------------------------------------- |
| Cache oublié                          | Anémomètre reste à **0 kt** au décollage                   |
| Orifice bouché, drain libre           | Anémomètre reste à **0 kt**                                |
| Orifice rétréci                       | Réaction lente, lecture imprécise                          |
| Bouché complètement (orifice + drain) | **Surestimation ou sous-estimation** selon la phase de vol |

#### Blocage total :

| Phase    | Conséquence sur l’anémomètre                      |
| -------- | ------------------------------------------------- |
| Montée   | Pt bloqué, Ps baisse → **vitesse surestimée**     |
| Descente | Pt bloqué, Ps augmente → **vitesse sous-estimée** |

> 🧠 Le calcul de la pression dynamique devient faux → le badin est trompeur.

---

### 🧯 Pannes du circuit statique

Le circuit statique alimente **plusieurs instruments** : l’anémomètre, l’altimètre et le variomètre.

| Phase    | Ps bloquée → effet sur l’anémomètre            |
| -------- | ---------------------------------------------- |
| Montée   | Ps figée, Pt baisse → **vitesse sous-estimée** |
| Descente | Ps figée, Pt augmente → **vitesse surestimée** |

> ⚠️ Les autres instruments alimentés par Ps peuvent également être affectés.  
> 👉 Nous verrons cela en détail dans la prochaine leçon, dédiée à l’**altimètre**.

---

### ❄️ Blocage combiné Pitot + statique

Situation rare mais dangereuse (ex : givrage simultané).

#### Symptômes :

- Anémomètre figé sur la dernière valeur
- Autres instruments figés également

> 🚨 Aucun indicateur ne réagit = **risque majeur d’illusion ou d’erreur de pilotage**

---

## Moyens mnémotechniques

- 🛑 **Badin à 0 au décollage** ➜ pense **cache-Pitot**
- 📉 **Montée + Ps bloquée** ➜ vitesse **sous-estimée**
- 📈 **Descente + Ps bloquée** ➜ vitesse **surestimée**
- ❄️ **Blocage total** ➜ **tout est figé**
- 🔎 Pas de pression ➜ **pas d’information fiable**
