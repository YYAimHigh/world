import mock from 'mockjs'
let HotBanner = []

for (let i = 0; i < 5; i++) {
  HotBanner.push({
    img: mock.Random.dataImage('750x392')
  })
}
export default HotBanner
