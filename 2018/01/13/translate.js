var fs = require('fs')
const fileName = 'hlxq'
var t = fs.readFileSync(`./${fileName}.json`, {encoding:'utf-8'})

var json = JSON.parse(t)

var obj = {
  type: 'FeatureCollection',
  features: []
}

for (let geometry of json.geometries) {
  obj.features.push({
    type: 'Feature',
    geometry,
    properties: {}
  })
}

fs.writeFile(`./${fileName}-translate.json`, JSON.stringify(obj))