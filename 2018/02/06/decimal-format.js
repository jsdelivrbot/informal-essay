/*
 * @Author: zhen chen
 * @Date: 2018-02-06 10:16:59
 * @Last Modified by: zhen chen
 * @Last Modified time: 2018-02-06 11:36:28
 * @description 一个用于对小数或者整数进行格式化的方法
 */

/**
 * @description
 * 如果存在'.'则存在小数部分
 */
class DecimalFormat {
  constructor(template) {
    // 模版
    this.template = template || '00000.00'
    this.integerTemplate = this.template.match(/[\w\W]*(?=\.)/)
    this.integerTemplate == null ? this.integerTemplate = '*' : null

    this.decimalTemplate = null
    // 是否存在小数
    this.hasDecimal = template.match(/\./).length !== 0
    if (this.hasDecimal === true) {
      this.decimalTemplate = this.template.match(/\.([\w\W]*)/)[1]
    } 
  }
  /**
   * 默认格式化方法
   * 仅能处理当整数或者小数过场的时候进行截取的操作
   * @params {Number||String} num
   */
  format(_num) {
    let num = this._tidyupNum(_num)
    if (this.hasDecimal === true) {
      num.decimal = this._disposeDecimal(num.decimal)
    }
    num.integer = this._disposeInteger(num.integer)
    return num
  }
  /**
   * 重新进行格式化
   * @param {Number||String} num 
   */
  _tidyupNum(num) {
    if (!num) {
      return false
    }
    num = parseFloat(num)
    
    let n = {
      i: [],
      d: []
    }
    for(let i of Math.floor(num).toString()) { 
      n.i.push(i)
    }
    for(let i of (num % 1).toString().replace(/0./, '')) { 
      n.d.push(i)
    }
    return n
  }
  /**
   * 进行处理小数部分
   */
  _disposeDecimal() {
    // 
  }
  /**
   * 进行处理整数部分
   */
  _disposeInteger(numStr) {
    if (this.integerTemplate.match(/\*/) !== null) {
      return numStr.reduce((a,b) => a+b)
    } else {
      let i = 0
      while( i < this.integerTemplate.length) {
        if (this.integerTemplate[this.integerTemplate.length - 1 - i] === '0') {
          let y = numStr[numStr.length - 1 - i]
          y === undefined ? 
        }
        i ++
      }
    }
  }
}

export default Decimal
