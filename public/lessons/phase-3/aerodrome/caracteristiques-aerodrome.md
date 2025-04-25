---
title: "L’aérodrome - services hors contrôle et pannes radio"
subtitle: "Comprendre les services disponibles sur les aérodromes non contrôlés et les procédures en cas de panne radio"
theme: "Les instruments de bord"
category: "Phase 4 - Environnement de vol"
duration: "25 min"
level: "Débutant"
imageUrl: "/images/aerodrome-afis-auto-info.jpg"
objectives:
  - Distinguer aérodromes contrôlés / non contrôlés
  - Connaître les services rendus (ATIS, AFIS, auto-information)
  - Comprendre la différence entre information de vol et information de trafic
  - Savoir quoi faire en cas de panne radio
  - Identifier les fréquences utilisées selon le type d’aérodrome
memo: "ATIS avant TWR, AFIS informe, auto-info partage ; 7600 si panne, 7700 si urgence"
qcm:
  - question: "Quelle est la différence entre une information de trafic et une information de vol ?"
    answers:
      - label: "Aucune"
        correct: false
      - label: "L'information de trafic est nominative, celle de vol est globale"
        correct: true
      - label: "L'information de vol est donnée uniquement en cas d'urgence"
        correct: false
  - question: "Que signifie ATIS ?"
    answers:
      - label: "Assistant Terminal Intercom System"
        correct: false
      - label: "Automatic Terminal Information Service"
        correct: true
      - label: "Advanced Traffic Info Signal"
        correct: false
  - question: "Quelle est la portée typique du service AFIS ?"
    answers:
      - label: "10 NM / 3000 ft"
        correct: false
      - label: "3 NM / 2000 ft"
        correct: true
      - label: "5 NM / 1000 ft"
        correct: false
  - question: "Peut-on utiliser un aérodrome contrôlé sans radio ?"
    answers:
      - label: "Oui, si on suit la bonne piste"
        correct: false
      - label: "Non, sauf en cas d’urgence"
        correct: true
      - label: "Oui, s’il fait beau"
        correct: false
  - question: "Quelle fréquence utilisez-vous par défaut pour l'auto-information sur un altiport ?"
    answers:
      - label: "123,5 MHz"
        correct: false
      - label: "121,5 MHz"
        correct: false
      - label: "130,0 MHz"
        correct: true
---

### Résumé express

Un aérodrome peut être contrôlé ou non contrôlé. Sur les terrains non contrôlés, deux modes de fonctionnement sont possibles : un service AFIS (information de vol globale sans contrôle) ou l’auto-information (les pilotes échangent entre eux). L’ATIS fournit quant à lui une information automatisée. En cas de panne radio, la conduite à tenir dépend du moment de la panne : avant ou après contact. Les fréquences à utiliser varient selon le type de terrain.

---

### Leçon complète

## 1. Services d’information sur un aérodrome

### Aérodrome contrôlé (TWR)

- Présence d’une **tour de contrôle**
- Mouvement soumis à **clairance**
- Le pilote reste responsable de son espacement
- Liaison radio **obligatoire**, sauf urgence

### ATIS – Automatic Terminal Information Service

- Message diffusé en boucle (météo, piste, QNH…)
- Identifié par une **lettre** (ex : Info Alpha)
- À écouter **avant de contacter la TWR**
- Le pilote annonce la lettre reçue à la radio

---

## 2. Aérodrome non contrôlé : AFIS ou auto-information

### a) AFIS – Aerodrome Flight Information Service

- Service assuré depuis la vigie ou un local technique
- Portée typique : **3 NM / 2000 ft AGL**
- Donne une **information de vol globale**, non nominative  
  ➤ Ex : “Trois avions en circuit”
- Ne fournit **aucune séparation** → c’est au pilote de gérer
- Peut s’accompagner d’une **RMZ (Radio Mandatory Zone)** :  
  ➤ Radio obligatoire même sans service actif

> 💡 Différence avec la TWR :
>
> - **TWR** : donne une **information de trafic précise** + autorisations
> - **AFIS** : donne une **information de vol globale**, sans autorité

---

| **Service** | **Qui parle ?**     | **Type d’infos**      | **Autorité ?**               | **Mnémotechnique**                   |
| ----------- | ------------------- | --------------------- | ---------------------------- | ------------------------------------ |
| **ATIS**    | Message enregistré  | Météo, piste, QNH...  | **Aucune**                   | ATIS = automatique, tourne en boucle |
| **AFIS**    | Agent AFIS (humain) | Infos trafic et météo | **Informe, ne contrôle pas** | AFIS = il t’informe, tu décides      |

---

### b) Auto-information

> En l'absence de TWR et d’AFIS, c’est au pilote d’assurer **l’annonce de ses intentions** sur une fréquence commune.

- Le pilote communique :
  - ses **positions** (vent arrière, finale…)
  - ses **intentions** (atterrissage, tour de piste…)
- Aucune séparation assurée → coordination entre pilotes

Fréquences utilisées :

- **123,5 MHz** : aérodromes classiques
- **130,0 MHz** : altiports

> 💡 Toujours utiliser la **première fréquence mentionnée** sur la carte VAC si plusieurs sont indiquées.

---

## 3. En cas de panne radio : deux cas

### Cas 1 : pas encore en contact

- Interdiction d’entrer en zone contrôlée sans contact
- **Quitter la zone immédiatement**
- En cas d’**urgence** :  
  ➤ Transpondeur **7700** et procédure d'atterrissage d'urgence

### Cas 2 : panne après clairance

- Suivre la **clairance reçue**
- Régler le transpondeur sur **7600**
- Observer les **signaux lumineux** de la tour :
  - Vert fixe, rouge fixe, clignotants (signification codifiée)

---

👉🏻 Maintenant que tu sais comment communiquer sur un aérodrome, découvrons comment les pistes sont identifiées, choisies en fonction du vent, et comment les mouvements au sol sont organisés grâce aux différentes aires et fréquences.

### Moyens mnémotechniques

- **ATIS = Info en boucle (Alpha, Bravo...)**
- **AFIS = Informe mais ne contrôle pas**
- **Auto-info = Je parle sur 123,5 ou 130,0**
- **7600** = panne radio
- **7700** = urgence
- **RMZ** = Radio MANDATORY Zone → radio obligatoire
- **TWR → dirige | AFIS → informe | Auto-info → partage**
