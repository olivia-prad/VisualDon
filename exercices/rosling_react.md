# Rosling – Difference entre d3.select et react

**1.    Comment les bulles sont-elles créées dans cette version?**

En utilisant select de d3

Il y a un groupe de bulle `bubblesGroup` dans lequel on ajoute le groupe `bubbles`

La composante `bubble`est une seule bulle, on y ajoute comme en svg, les données necessaires, donc data et xearIndex
La composante `bubbles` genere les `bubble` et retourne uhe bulle pour chaque donnée

**2.    Comment les données sont elles jointes aux éléments DOM avec react?**

Avec la fonction render de react DOM les données sont directement inscrite dans les attributs de balises html (par exemple div)

Il faut donc récupérer la balise html dans laquelle le graphique ira, gréer la variable et finalement la joindre au Dom via la fonction `render`
On parametre la bulle comme un élément  SVG 
