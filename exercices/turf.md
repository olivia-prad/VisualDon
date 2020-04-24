# Turf

**Fonction circle**

Elle prend en paramètres un point, un rayon ainsi que l'unité de mesure. Ensuite , la fonction crée un cercle du rayon determiné, autour du point.

**Fonction bounding box (bbox)**

Permet de créer un rectangle et celui-ci sera retourné par l'API overpass. En effet, cet API ne retourne pas de cercles mais des rectagles, nous devons donc créer un rectangle qui contient notre cercle pour palier à ça.


**Fonction bbox polygon**

Permet de mettre en forme la forme obtenue dans la fonction bbox. On transforme la forme en un polygon geojson

**Fonction distance**

Permet de calculer la distance entre 2 points donnés. 
