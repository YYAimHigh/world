<template>
  <nav class="navbar">
    <a 
      href="javascript:;" 
      v-for='(item,index) in navlist' 
      :key='index' 
      :class='{active: indexActive == index}'
      @click='clickFn(index,item.id)'
      >{{item.text}}</a>
  </nav>
</template>
<script>
export default {
  props: {
    navlist: {
      default: []
    }
  },
  data () {
    return {
      indexActive: 0,
      tabList: [
        'Page1', 'Page2'
      ]
    }
  },
  methods: {
    clickFn (index, num) {
      this.indexActive = num
      let tabStr = this.tabList[index]
      this.$emit('tabFnpp', tabStr, num)
    }
  }
}
</script>
<style scoped lang="less">
  .navbar{
    width:100%;
    text-align:center;
    height: 0.4rem;
    line-height:0.4rem;
    a{
      display: inline-block;
      padding:0 0.1rem;
      position:relative;
      &.active::after{
        content:'';
        position:absolute;
        bottom:0;
        left: 0;
        width:100%;
        height: 0.01rem;
        background:#000;
      }
    }
  }
</style>

