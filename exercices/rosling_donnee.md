#Hans Rosling –  Préparer les données

**1.    Expliquez la procédure en quelques points**

- Télécharger les données avec la commade **curl**
- Convertir toutes les données en un même format (csv) de manière automatique avec une librairie **xlsx** et un script **xlsxToCsv.js** utilisé pour les 4 fichiers
- Convertir les 4 fichiers CSV en JSON à l'aide de 3 scripts différents
- Joindre les 4 JSON en un seul **joinData.js**
- Creer un scipt **donnee.sh** qui permet de simplifier tous les script en ne devant utiliser qu'une seule commande pour lancer toutes les commandes des autres scripts et ainsi créer le fichier de donnes final **data.json**

**2.    Quel est l'interet d'avoir des scriptes pour manipuler des données?**

Afin d'automatiser la procédure. ça permet d'éviter de répéter les même actions plusieurs fois et également d'éviter les erreurs manuelles

**3.    Comment avons nous joint les quatre jeux de données?**

Pour joindre des fichiers il faut un identifiant commun tous les fichiers. Dans cet exercice , c'est l'identifiant **geo** qui est présent dans chacun des 4 fichiers.