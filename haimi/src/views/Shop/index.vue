<template>
  <div>
    <div class="shop-box">
      <i class="iconfont icon-gouwuche1"></i>
      <span>您的购物车空空如也</span>
      <router-link to='home'>去首页逛逛</router-link>
    </div>
    <ContentBox title='大家都在买的宝贝'>
      <HotBox :HotData='HotData'></HotBox>
    </ContentBox>
    <FootBar></FootBar>
  </div>
</template>
<script>
import '@/static/font/iconfont.css'
import FootBar from '@/components/Footer.vue'
import HotBox from '@/components/HotBox'
import ContentBox from '@/components/ContentBox'
export default {
  data () {
    return {
      HotData: [
        {
          img: '//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/Fo_3KRGu8XdoqcQ6DbPIJ33aYN3I',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/Fi35P_akILkjZbVQPEv9EV2IIiZm',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/FofqVnbyUfMblFYalgoLBGfmFasN',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/Fuqtzw_4g62P_RqlbPzKrSH9ZNZ1',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/FscqPdPEAwBojaXc36dx2ps7HD2c',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/FgL9AMUlqLrQSbSJuUnzq8wyq4BE',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/Fvz0rLJIVjZ1R5yjJ3jJ07vGi5V5',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/FscqPdPEAwBojaXc36dx2ps7HD2c',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/FgL9AMUlqLrQSbSJuUnzq8wyq4BE',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        },
        {
          img: '//img.haimi.com/Fvz0rLJIVjZ1R5yjJ3jJ07vGi5V5',
          title: '日默瓦',
          text: '复古知名顽疾潮牌'
        }
      ]
    }
  },
  components: {
    FootBar,
    HotBox,
    ContentBox
  }
}
</script>
<style lang='less' scoped>
  .shop-box{
    width:100%;
    height: 3rem;
    background:#f7f7f7;
    text-align:center;
    color:#ccc;
    padding-top:1.5rem;
    box-sizing:border-box;
    line-height:0.3rem;
    span{
      display: block;
    }
    a{
      display: inline-block;
      padding:0.01rem 0.1rem;
      border:1px solid #ccc;
    }
    i{
      font-size:0.4rem;
    }
  }
</style>