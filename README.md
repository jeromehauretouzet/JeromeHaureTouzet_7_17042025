# Projet Kasa - Application Web de Location Immobilière

Ce projet Kasa est une application web de location d'appartements entre particuliers. Elle a été développée avec React, Vite, React Router et Sass.

## Aperçu

L'application permet aux utilisateurs de visualiser des annonces de logements, de voir les détails de chaque logement (description, équipements, hôte, notation), et de naviguer entre une page d'accueil, une page "À Propos", et les fiches de logement individuelles. Une page d'erreur 404 est également implémentée.

## Prérequis

Avant de commencer, installer: Node.js

## Installation

Pour installer et lancer le projet en local, suivez ces étapes :

1.  **Cloner le dépôt :**
    ```bash
    git clone https://github.com/jeromehauretouzet/JeromeHaureTouzet_7_17042025.git
    cd JeromeHaureTouzet_7_17042025
    ```

2.  **Naviguer dans le dossier du projet :**
    Rendez vous dans le dossier principal: `kasa-app`:
    ```bash
    cd kasa-app
    ```

3.  **Installer les dépendances du projet :**
    ```bash
    npm install
    ```

## Lancement du Projet en Mode Développement

Lancer le serveur de développement local :

1.  **Démarrer le serveur Vite :**
    ```bash
    npm run dev
    ```
2.  **Ouvrir l'application dans le navigateur :**
    Ouvrir l'application dans le navigateur à cette adresse: `http://localhost:5173/`

## Structure de l'application web

*   **`assets/`** : Contient les images,logos, icônes SVG etc..
*   **`components/`** : Contient les composants Header, MainContainer et Footer ainsi que Banner, Card, Collapse, Gallery (le carrousel)
*   **`data/`** : Contient les fichiers JSON de données (logements, et la page "À Propos")
*   **`pages/`** : Contient les composants pour les 4 pages: Home, About, Lodging, Error404
*   **`router/`** : Contient le routage de l'application
*   **`styles/`** : Contient les fichiers Sass globaux (variables, styles de base, reset)
*   **`main.jsx`** : Le point de départ de l'exécution de l'application