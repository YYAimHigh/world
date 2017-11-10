<template>
  <footer class="footer">
    <router-link v-for='(item,index) in footList' :to='item.path' active-class='active' :key='index'>{{item.text}}</router-link>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      footList: [
        {
          icon: '',
          activeIcon: '',
          text: '首页',
          path: 'home'
        },
        {
          icon: '',
          activeIcon: '',
          text: '分类',
          path: 'classify'
        },
        {
          icon: '',
          activeIcon: '',
          text: '购物车',
          path: 'shop'
        },
        {
          icon: '',
          activeIcon: '',
          text: '我的',
          path: 'my'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .footer{
    width:100%;
    height:0.45rem;
    position: fixed;
    left: 0;
    bottom:0;
    display: flex;
    border-top:1px solid #ccc;
    background:#fff;
    a{
      flex:1;
      text-align:center;
      line-height:0.45rem;
      &.active {
        color:red;
      }
    }
  }
</style>


