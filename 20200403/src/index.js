import { geoPath, geoMercator, select } from 'd3'

// importer les fichiers GeoJSON
import eau from '../eau.json'
import rues from '../rues.json'
import jardins from '../jardins.json'
import parc from '../parc.json'

// la taille de la carte
const WIDTH = 1200
const HEIGHT = 600

// la projection
const projection = geoMercator()
  .fitExtent([[0, 40], [WIDTH, HEIGHT]], parc) // centrer la carte sur les rues

// le constructeur d'attribut "d" pour les éléments <path>
const pathCreator = geoPath().projection(projection)

// le svg
const svg = select('#carte').append('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT)

  // un groupe pour le parc
const groupeParc = svg.append('g')

groupeParc.selectAll('path')
  .data(parc.features)
  .enter()
  .append('path')
  .attr('d', pathCreator)
  .attr('fill', 'lightgreen')
  .attr('stroke', 'black')
  .attr('stroke-width', 0.5)

// un groupe pour les rues
const groupeRues = svg.append('g')

// un <path> par rue
groupeRues.selectAll('path')
  .data(rues.features)
  .enter()
  .append('path')
  .attr('d', pathCreator)
  .attr('fill', 'none')
  .attr('stroke', 'lightgray')
  .attr('stroke-width', 3)

// un groupe pour le plans d eau
const groupeEau = svg.append('g')

groupeEau.selectAll('path')
  .data(eau.features)
  .enter()
  .append('path')
  .attr('d', pathCreator)
  .attr('fill', 'LightSkyBlue')

// un groupe pour les jardins
const groupeJardin = svg.append('g')

groupeJardin.selectAll('path')
  .data(jardins.features)
  .enter()
  .append('path')
  .attr('d', pathCreator)
  .attr('fill', 'YellowGreen')




/*
 * un <circle> par arbre
 * 
 * Pour les points nous ne pouvons pas utiliser "pathCreator",
 * nous utilisons directement la projection sur les coordonnées
 * 
 * projection prends un point du système de coordonnées, [x, y]
 * et retourne un point sur le svg au même format
 * 
*/
