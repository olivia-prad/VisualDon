# Scraping

Décrivez avec vos propres mots comment j'ai procédé pour télécharger ces deux jeux de données

**Chaussettes sur Galaxus**

- Aller sur la page web où se trouve les données que l'on souhaite
- Ouvrir l'inspecteur du navigateur et aller dans l'onglet Network
- Chercher les requêtes qui retournent du JSON, les ovserver afin de trouver laquelle contient ce qui nous intéresse. **Astuce:** Commecer avec celles qui renvoient le plus de données
- Une fois la requête trouvée, faire un clic droit dessus et `Copy < Copy as cURL`
- Coller ce cURL dans le terminal, dans le dossier sohaité et y ajouter `> nomFichier.json` afin d'enregistrer le fichier avec ce nom souhaité.
    - Il est également possible de changer des paramêtres dans la partie data ce ce cURL
- Créer un fichier script `prepare.js`
- Charger le fichier JSON récemment créé ainsi que ramda
- Chercher les données utiles pour ce que nous cherchons avec un path de ramda
- Faire une fonction afin de garder uniquement les datas dont nous avons besoin, par exemple le prix, le nom, la marque et les tailles.

    `const getProductData = R.pipe(
  R.pick(['id', 'name', 'brandName', 'nameProperties', 'pricing']),
  d => ({ ...d, price: R.path(['price', 'amountIncl'], d.pricing) }),
  R.omit(['pricing'])
)`
- Sauver le résultat 
 `console.log(
  JSON.stringify(
    products.map(getProductData)
  )
)``
- Créer le fichier final `data.json` où les résultats souhaités seront gardés. `node prepare > data.json`

**Titres du 19h30 de la RTS**

- Aller sur la page web où se trouve les données que l'on souhaite
- Ouvrir l'inspecteur du navigateur et aller dans l'onglet Network
- Chercher la requête qui nous intéresse. Cette fois-ci, c'est une URL `https://www.rts.ch/play/tv/show/6454706/latestEpisodes?maxDate=ALL`
- Ouvrir l'URL dans un nouvel onglet
- Observer ce que ça nous donne. Dans ce cas, les infos des 10 jours précédents la date `masData` dans l'url
- Télécharger les données en Créant un scripte `scrape.js` qui va chercher les dix derniers épisodes en remontant le temps jusqu'à l'an 2000. Le résultat est le fichier `scraped.ndjson` où chaque ligne est un json contenant dix épisodes:
    - Installer la librairie dayjs afin de manipuler des dates
    - Créer un fonction afin de manipuler les dates de maxDate 
    - Installer node fetch
    - Prendre les donnes du l'url avec comme parametre `maxDate``
    - Sauver les données dans `scraped.ndjson` (new line delimited json). C'est à dire un fichier où chaque ligne représente un objet json
    - Utiliser la fonction `createWriteScrpt` afin d'ajouter une ligne à la fois au fichier
    - Comme nous réalisons ceci plusieurs fois avec des dates différents, créer un boucle afin d'automatiser le processus
- Extraire les épisodes en créant un scripte `extractEpisodes.js` pour extraire les épisodes de `scraped.ndjson`, faire quelques transformations et créer le fichier `episodes.ndjson`:
    - Utiliser readLine afin de lire le fichier ligne par ligne
    - Trier les infos afin de garder uniquement ce qui nous intéresse et le mettre au bon format (par exemple chaine de caracteres avec JSON.stringify)
    - Avec la commande `nnode scriptes/extractEpisodes < scraped.ndjson > example_episodes.ndjson`on passe le fichier ndjson à la console qui le lira ligne par ligne avec le scripte `extractEpisodes` et donc passe chaque épisode à la console qui ensuite les passe au fichier `example_episodes.ndjson`.
    - Créer un fichier `extractSegment.js`  ou tous les sujets de chaque épisode seront traités. Pour se faire, nous utilisons la commande `node scriptes/extractSegments < episodes.ndjson > segments.ndjson` afin de faire tourner ce scripte