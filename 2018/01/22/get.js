const fs = require('fs')
fs.readFile('./info.json', {encoding: 'utf-8'}, (err, info) => {
  let dataList = JSON.parse(info).data.data
  let objList = []
  dataList.forEach(element => {
    let obj = JSON.parse(element)
    objList.push(obj)
  })
  fs.writeFile('./info-out.json', JSON.stringify(objList))
})