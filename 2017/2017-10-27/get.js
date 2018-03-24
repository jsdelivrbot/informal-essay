/*
 * @Author: zhen chen
 * @Date: 2017-10-27 10:08:29
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-10-27 10:22:21
 * @description 从简书内获取所有的收藏文章信息
 */

// 获取收藏文档信息
// 第一步打开收藏页面第一页
// 
var infoList = document.getElementsByClassName('note-list')[0].getElementsByClassName('title')
var infoObj = []
for (var i = 0; i < infoList.length;i++) {
  infoObj.push({
    title: infoList[i].innerHTML,
    href: 'http://www.jianshu.com' + infoList[i].getAttribute('href')
  })
}
console.log(JSON.stringify(infoObj))