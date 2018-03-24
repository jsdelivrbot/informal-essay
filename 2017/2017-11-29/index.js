var X = require('./d.js')
// var x1 = X
// var x2 = X
// console.log(x1.getX())
// console.log(x2.getX())
// x1.setX(20)
// console.log(x1.getX())
// console.log(x2.getX())
var x1 = X()
var x2 = X()
console.log(JSON.stringify(x1))
console.log(JSON.stringify(x2))
console.log(x1 === x2)