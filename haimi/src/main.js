// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins/dialog.js'
import './utils/http'
import './mock'
import loading from '@/plugins/loading'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import directive from './directive'

Vue.config.productionTip = false

Vue.use(plugins, {
  name: '二二'
})
Vue.use(loading)

Vue.use(VueAwesomeSwiper)
for (var item in directive) {
  Vue.directive(item, directive[item])
}
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
export default vm
