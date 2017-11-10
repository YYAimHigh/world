<template>
  <div class="cont">
    <img src='../../static/images/1.png'> 
    <FootBar></FootBar>
  </div>
</template>
<script>
import FootBar from '@/components/Footer.vue'
export default {
  components: {
    FootBar
  }
}
</script>
<style lang='less' scoped>
  .cont{
    padding-top:50px;
  }
  img{
    display: block;
    border-radius:50%;
    width:100px;
    margin:0 auto;
  }
</style>