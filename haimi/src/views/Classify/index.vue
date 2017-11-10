<template>
  <div class="cont">
    <navBar :navlist='navlist' @tabFnpp='tabFn'></navBar>
    <component :is='isTab'></component>
    <FootBar></FootBar>
  </div>
</template>
<script>
import navBar from './components/navBar'
import Page1 from './children/Page1'
import Page2 from './children/Page2'
import FootBar from '@/components/Footer.vue'
export default {
  data () {
    return {
      isTab: 'Page1',
      isId: 0,
      navlist: [
        {
          text: '分类',
          type: 1,
          id: 0
        },
        {
          text: '品牌',
          type: 2,
          id: 1
        }
      ]
    }
  },
  methods: {
    tabFn (pageStr, idStr) {
      this.isTab = pageStr
      this.isId = idStr
    }
  },
  components: {
    navBar,
    Page1,
    Page2,
    FootBar
  }
}
</script>
<style lang='less'>
  .cont{
    background: #fff;
    padding-bottom:0.45rem;
  }
</style>
