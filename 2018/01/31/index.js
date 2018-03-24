/*
 * @Author: zhen chen
 * @Date: 2018-01-31 14:52:20
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-01-31 15:10:13
 * @description 二阶贝塞尔曲线javascript 实现方式
 */


let P0 = [0,0]
let P1 = [4,5]
let P2 = [10,0]

/**
 * 
 * @param {*} startPoint 起始点
 * @param {*} controlPoint 控制点
 * @param {*} endPoint 终止点
 */
let initBessel = (startPoint, controlPoint,endPoint, _interval) => {
  // 将颗粒度为0.01生成贝塞尔曲线上边的点

  let points = []
  let interval = _interval || 0.01
  let i = 0
  while(i <= 1) {
    points.push(getPoint(startPoint, controlPoint,endPoint, i))
    i += interval
  }
  console.log(points)
}

let getPoint = (startPoint, controlPoint, endPoint, time) => {
  return [
    formula(startPoint[0], controlPoint[0], endPoint[0], time),
    formula(startPoint[1], controlPoint[1], endPoint[1], time)
  ]
}

let formula = (p0, p1, p2, t) => {
  // (1−t)2P0+2t(1−t)P1+t2P2,tin[0,1] 
  return Math.pow((1 - t),2) * p0 + 2 * t * (1 - t) * p1 + Math.pow(t, 2) * p2
}

initBessel(P0, P1, P2)