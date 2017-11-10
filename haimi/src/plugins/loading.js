import Loading from '@/components/Loading'
export default {
  install (Vue, options) {
    let LoadingComponent = Vue.extend(Loading)
    let LoadingVm = ''
    Vue.prototype.$loading = {
      show () {
        if (!LoadingVm) {
          LoadingVm = new LoadingComponent()
          LoadingVm.$mount('#loading-box')
        }
        LoadingVm.show()
      },
      hide () {
        LoadingVm.hide()
      }
    }
  }
}
