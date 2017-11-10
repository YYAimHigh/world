import utils from '@/utils/utils.js'
export default{
  inserted (el, binding) {
    const initOffset = {
      top: el.offsetTop,
      height: el.offsetHeight
    }
    document.addEventListener('scroll', function () {
      let scrollTop = window.scrollY
      if (scrollTop >= initOffset.top - binding.value) {
        utils.css(el, {
          'position': 'fixed',
          'top': binding.value
        })
        utils.css(el.parentNode, {
          'padding-top': initOffset.height
        })
      } else {
        utils.css(el, {
          'position': 'relative',
          'top': 0
        })
        utils.css(el.parentNode, {
          'padding-top': 0
        })
      }
    }, false)
  },
  update () {
  },
  componentUpdated () {
  },
  unbind () {
  }
}
