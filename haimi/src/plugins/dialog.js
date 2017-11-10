export default {
  install (Vue, option) {
    Vue.directive('pin', {
      inserted (el, binding, vnode, oldVnode) {
      }
    })
    Vue.prototype.$alert = function (str) {
      return alert(str)
    }
  }
}
