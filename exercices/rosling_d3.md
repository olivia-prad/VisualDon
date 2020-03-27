# Rosling – Créer le graphique avec d3

**1.    Comment et pourquoi le code est t-il divisé en plusieurs fichier?**

- **Comment**

    - `index.html` : page html, squelette et constitution de la page
    - `index.css` : css de la page. Couleur, marges, taille des éléments, esthétique,...
    - `index.js` : point de départ du scripte
        - `config.js` : regroupe les dimension du graphique
        - `scales.js` : echelles pour les 3 dimensions
            - Axe X ( PNB/ habitant)
            - Axe Y (espérance de vie)
            - Rayon de chaque bulle (polulation)
            Contient également la couleur de la bulle selon la région
        - `elements.js` : éléments pour que le lecteur comprenne le graphique
            - Année
            - Légende des axes
            - Nom des pays (lors d'un hover sur la bulle)

- **Pourquoi**

Pour ne pas tout écrire dans le même scripte, il faut diviser le code en plusieurs fichiers pour après les importer dans `index.js`.
Permet de mettre le code au propre, de regroupper les éléments afin de les retrouver plus facilement

**2.    Comment le nom du pays est t-il afficher quand la souris passe sur une bulle?**

- Dans `elements.js`: élément text `countryDisplay` qui utilise l'élément `BubblesGroup`, détermine la taille de la police ( `font-size`) et la position (`text-anchor`)

- Dans `index.js`: événements
    - `mouseover`:  Ce qui se passe quand on passe sur une bulle avec la souris
    - `mouseout`:   Ce qui se passe quand on enleve la souris de la bulle
    - `mousemove`:  Ce qui se passe quand la souris se balade à l'intérieur d'une bulle