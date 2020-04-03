# Recherche sur les données du 19h30

**Les 15 premiers titres des épisodes les plus vus**

La commande à entrer dans le terminal est la suivante:
 
ndjson-sort "a.views > b.views ? -1 : 1" < episodes.ndjson \
| head -15 \
| ndjson-map "{ firstTitle: d.segments[0].title, date: d.date, vues: d.views}"

- ndjson-sort "a.views > b.views ? -1 : 1" < episodes.ndjson : Ordonne les épisodes par nombre de vues
- head -15 : Prend les 15 premiers
- ndjson-map "{ firstTitle: d.segments[0].title, date: d.date, vues: d.views}" : Affiche le nom du premier titre, la date et le nombre de vues