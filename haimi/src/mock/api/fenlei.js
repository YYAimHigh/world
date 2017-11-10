import mock from 'mockjs'
let fenleiData = []
var brr = []
for (let i = 0; i < 6; i++) {
  brr.push(mock.Random.ctitle())
  fenleiData.push({
    id: i,
    img: mock.Random.dataImage('750x280'),
    arr: brr
  })
}
export default fenleiData
