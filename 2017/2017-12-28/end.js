// 生成最新的文件
var x = require('./comm_new.js')
var obj = require('./comm_obj.js')
var fs = require('fs')
var new_com = {}
for (var i of obj) {
  new_com[i.name] = x.splice(0, i.length)
}
fs.writeFileSync('./end_data.js', JSON.stringify(new_com))
