var array = ['xin_jiang', 'xi_zang','nei_meng_gu','qing_hai','si_chuan','hei_long_jiang','gan_su','yun_nan','guang_xi','hu_nan','shan_xi_1','guang_dong','ji_lin','he_bei','hu_bei','gui_zhou','shan_dong','jiang_xi','he_nan','liao_ning','shan_xi_2','an_hui','fu_jian','zhe_jiang','jiang_su','chong_qing','ning_xia','hai_nan','tai_wan','bei_jing','tian_jin','shang_hai','xiang_gang','ao_men'];

// console.log(Math.random())
let _array = []
for (let id of array) {
  _array.push({
    id: id,
    height: parseFloat((Math.random() * 100 * 0.5).toFixed(2))
  })
}
console.log(_array)