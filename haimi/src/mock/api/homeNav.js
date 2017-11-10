import mock from 'mockjs'
let HomeNav = []

for (let i = 0; i < 13; i++) {
  HomeNav.push({
    type: i === 0 ? 1 : 2,
    id: i,
    text: mock.Random.ctitle(2)
  })
}
export default HomeNav
