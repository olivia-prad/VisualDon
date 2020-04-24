const cheerio = require('cheerio')
const fs = require('fs')

const page = fs.readFileSync('../20200424/page.html', 'utf-8')

const $ = cheerio.load(page)

let result = [];
// l'élément qui contienttous les produits est un div de la classe row
const row = $('body > div.wrapper > div.container.test-site > div > div.col-md-9 > div')

// l'élément qui contient les informations qui nous interesse est un div de classe caption
const elements = $('div.caption', row)


elements.each((index, element) => {
      result.push({
        nom: $('h4:nth-child(2) > a', element).attr('title'),
        prix: $('h4:nth-child(1)', element).text()
      })
  })
  

  console.log(
    JSON.stringify(
      result,
      null,
      2
    )
)

