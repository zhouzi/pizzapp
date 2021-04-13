# pizzapp-server

Ce dépôt accompagne un module de formation sur le déploiement continu et l'intégration continue.
Afin d'aborder ces aspects, il nous faut donc une application dont l'objet est la commande de plats en livraison.
Vous êtes invités à la développer par vos propres moyens.
Ceci dit, ce dépôt peut vous servir de base si vous souhaitez gagner du temps ou que vous souhaitez vous concentrer sur le coeur du module.
Il n'implémente aucun mécanisme de CI ou de CD mais met en place les bases d'un serveur web qui affiche des entrées venant d'une base de donnée.

- [Démo](https://pizzapp-server.herokuapp.com/api/pizzas)

## Comment utiliser ce dépôt

Vous pouvez créer une copie de ce dépôt en cliquant sur le bouton "Use this template" de GitHub.
Il vous faudra ensuite le cloner sur votre machine et l'installer comme décrit ci-après.

## Installation

Pré-requis : Node.js et Docker.

1. Renommer le fichier `.env.model` en `.env`.
2. Installer les dépendances : `npm install`.

## Démarrage

L'application que contient ce dépôt utilise une base de donnée PostgreSQL.
Pour démarrer cette base de donnée via Docker, dans un terminal il faut lancer la commande :

```
docker-compose up
```

Puis dans un autre terminal, il faut initialiser la base de donnée en créant les tables :

```
npm run migrate:latest
```

Enfin, vous pouvez démarrer l'application via la commande :

```
npm run dev
```

Si tout c'est bien passé, vous devriez être en mesure d'accéder à http://localhost:3000/api/pizzas qui affiche un tableau JSON vide.
