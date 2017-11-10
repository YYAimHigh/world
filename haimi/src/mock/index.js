import axios from '../utils/http'
import MockAdapter from 'axios-mock-adapter'
import HomeNav from './api/homeNav'
import BannerList from './api/bannerList'
import Product from './api/product'
import Pinpai from './api/Pinpai'
import FenleiData from './api/fenlei'
var mock = new MockAdapter(axios, { delayResponse: 1000 })
mock.onGet('/api/homenav').reply(config => {
  return [200, HomeNav]
})
mock.onGet('/api/bannerlist').reply(config => {
  return [200, BannerList]
})
mock.onGet('/api/product').reply(config => {
  let { type, page, pageSize } = config.params
  let i = 0
  let newData = Product.filter((item, index) => {
    if (item.type === type) {
      item.index = i++
    }
    return item.type === type
  })
  return [200, newData.splice(pageSize * page, pageSize)]
})
mock.onGet('/api/pinpai').reply(config => {
  return [200, Pinpai]
})
mock.onGet('/api/fenlei').reply(config => {
  return [200, FenleiData]
})
