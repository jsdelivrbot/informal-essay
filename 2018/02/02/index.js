/**
 * Ax + By + C = 0
 */

let start = [116.46790666666666, 40.02021666666667]
let end = [116.46965833333334, 40.04170333333333]
let c = [116.46790666666666, 40.02021666666667]
// start = [1, 3]
// end = [5, 5]

let diffX = end[0] - start[0]
let diffY = end[1] - start[1]

let A = diffY / diffX
let B = -1
let C = start[1] - A * start[0]

console.log(`A${A}`)
console.log(`B${B}`)
console.log(`C${C}`)
// console.log(start[0] * A + B * start[1] + C)
// console.log(end[0] * A + B * end[1] + C)

let getDistance = (A, B, C, point) => {
  // return Math.abs((A * point[0] + B * point[1] + C) / (Math.sqrt(A * A + B * B)))
  let _A = -(1 / A)
  let _B = -1
  let _C = point[1] - _A * point[0]

  console.log(`_A${_A}`)
  console.log(`_B${_B}`)
  console.log(`_C${_C}`)
  let _point = []
  _point[0] = (B * _C - C * _B) / (A * _B - B * _A)
  _point[1] = (A * _C - _A * C) / (_A * B - A * _B)

  console.log(_point)
}

getDistance(A, B, C, c)