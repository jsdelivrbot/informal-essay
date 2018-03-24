// var a = {
//   i: 1,
//   toString: function() {
//     return a.i++
//   }
// }
// console.log(a ==1 && a == 2 && a==3)

// var a = {
//   i: 1,
//   valueOf: function() {
//     console.log('触发valueOf')
//     return a.i
//   },
//   toString: function() {
//     console.log('触发toString')
//     return a.i
//   }
// }
// console.log(a === 1)

str="A";
code = str.charCodeAt(); 
str2 = String.fromCharCode(code);
str3 = String.fromCharCode(0x60+26);

console.log(code)
console.log(str2)
console.log(str3)
