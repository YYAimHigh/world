<template>
  <div class="loading-box" v-if='isLoading'>
    <span class="loading">
      <i></i>
      <b>正在加载中...</b>
    </span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    show () {
      this.isLoading = true
    },
    hide () {
      this.isLoading = false
    }
  }
}
</script>
<style lang='less' scoped>
  .loading-box{
    z-index:999;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom:0;
    background:rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items:center;
    .loading{
      display:block;
      text-align:center;
      i{
        width:20px;
        height: 20px;
        background: #ffffff;
        display:block;
        margin:0 auto;
        margin-bottom:0.1rem;
        -webkit-animation:rotateLoading 1s linear infinite;
      }
      b{
        display: block;
        color:#fff;
      }
    }
  }
  @-webkit-keyframes rotateLoading {
    from {
      -webkit-transform: rotate(0deg)
    }
    to {
      -webkit-transform: rotate(360deg)
    }
  }
</style>
