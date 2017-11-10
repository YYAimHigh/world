<template>
  <div class="navBar">
    <nav class="nav">
      <a 
        href="javascript:;"
        v-for="item in navList"
        :class="{active: indexActive == item.id}"
        :key="item.id"
        @click="showFn(item.id,item.type)"
      >{{item.text}}</a>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      indexActive: 0
    }
  },
  props: {
    navList: {
      default: ''
    }
  },
  methods: {
    showFn (id, page) {
      let pageStr = page === 1 ? 'HotPage' : 'LabelPage'
      this.indexActive = id
      this.$emit('setTemplate', id, pageStr)
    }
  }
}
</script>
<style lang="less" scoped>
  .navBar{
    background:#fff;
    width: 100%;
    z-index: 100;
    overflow:auto;
    nav{
      display:-webkit-box;
    }
    a{
      padding: 0 10px;
      height: 40px;
      line-height:40px;
      color: #000;
      display: block;
      position:relative;
      &.active{
        &::after{
          content: '';
          width: 100%;
          height: 2px;
          background:#000;
          display:block;
          position: absolute;
          bottom:0;
          left:0;
        }
      }
    }
  }
</style>


