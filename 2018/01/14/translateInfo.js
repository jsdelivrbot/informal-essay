/*
 * @Author: zhen chen
 * @Date: 2018-01-14 16:11:43
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-14 16:41:22
 * @description 获取bim模型和经纬度的匹配
 */

const fs = require('fs')

var x = fs.readFileSync('./info.txt', {encoding:'utf-8'})

var obj = {}
var array = x.split('#')
for (let one of array) {
  let arr = one.split(',' )
  if (arr[0] !== '') {
    obj[arr[0]] = [parseFloat(arr[1]), parseFloat(arr[2])]
  }
}
fs.writeFileSync('./info2.js',JSON.stringify(obj))