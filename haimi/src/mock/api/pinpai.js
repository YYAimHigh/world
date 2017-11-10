import mock from 'mockjs'
let Pinpai = []
for (let i = 0; i < 30; i++) {
  Pinpai.push({
    id: i,
    img: mock.Random.dataImage('375x375'),
    title: mock.Random.ctitle(),
    text: mock.Random.csentence(5)
  })
}
export default Pinpai
