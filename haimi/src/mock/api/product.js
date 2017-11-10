import mock from 'mockjs'
let product = []
for (let i = 0; i < 500; i++) {
  product.push({
    id: i,
    img: mock.Random.dataImage('375x375'),
    text: mock.Random.ctitle(),
    type: mock.Random.integer(0, 12),
    money: mock.Random.float(60, 10000, 2, 2)
  })
}
export default product
