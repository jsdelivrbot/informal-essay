/*
 * @Author: zhen chen
 * @Date: 2018-01-14 14:22:57
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-15 05:13:54
 * @description 从一个文件内 提取颜色的格式
 */
const fs = require('fs')

var x = fs.readFileSync('./place-color.txt', {encoding:'utf-8'})

var obj = {}
var array = x.split('\r\n')
for (let one of array) {
  let arr = one.split(' ')
  if (arr[0] !== '') {
    obj[arr[0]] = `${arr[1]}`
  }
}
fs.writeFileSync('./obj.js',JSON.stringify(obj))