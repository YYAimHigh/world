<template>
  <div class="pinpai">
    <div class="pinpaiBox">
      <router-link :to="{name:'Search',params:{'searchVal':searchVal}}" 
        v-for='(item, index) in img' 
        :key='index'>
      <img :src='item'></router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    searchVal: {
      default: ''
    }
  },
  data () {
    return {
      img: [
        '//img.haimi.com/FgDc_2t_n2s_5y6sJXq_HC52toxk',
        '//img.haimi.com/Fl1dPmAViO5wHlnVKCeX44aqK25X',
        '//img.haimi.com/Fo6aIswHZTuLTpc1zuFQGT59wfOv'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .pinpai{
    clear:both;
    width:100%;
    line-height:0.4rem;
    text-align:center;
    height:2.6rem;
    position:relative;
    img{
      width:100%;
      height:100%;
    }
    a:first-child{
      position: absolute;
      left: 0;
      top:0;
      width:50%;
      height:1.3rem;
    }
    a:nth-child(2){
      position: absolute;
      left: 0;
      top:1.3rem;
      width:50%;
      height:1.3rem;
    }
    a:last-child{
      position: absolute;
      width:50%;
      height: 2.6rem;
      right:0;
    }
  }
</style>

