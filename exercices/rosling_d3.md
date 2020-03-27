#Rosling – Créer le graphique avec d3

**1.    Comment et pourquoi le code est t-il divisé en plusieurs fichier?**

- **Comment**

    - 'index.html' : page html, squelette et constitution de la page
    - 'index.css' : css de la page. Couleur, marges, taille des éléments, esthétique,...
    - 'index.js' : point de départ du scripte
        - 'config.js' : regroupe les dimension du graphique
        - 'scales.js' : echelles pour les 3 dimensions
            - Axe X ( PNB/ habitant)
            - Axe Y (espérance de vie)
            - Rayon de chaque bulle (polulation)
            Contient également la couleur de la bulle selon la région
        - 'elements.js' : éléments pour que le lecteur comprenne le graphique
            - Année
            - Légende des axes
            - Nom des pays (lors d'un hover sur la bulle)

- **Pourquoi**

Pour ne pas tout écrire dans le même scripte, nous allons diviser le code en plusieurs fichiers pour après les importer dans 'index.js'.
Permet de mettre le code au propre, de regroupper les éléments afin de les retrouver plus facilement

**2.    Comment le nom du pays est t-il afficher quand la souris passe sur une bulle?**

..