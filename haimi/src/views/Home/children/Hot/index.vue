<template>
  <div class="cont">
    <contentBox>
      <Banner :bannerList='bannerList'></Banner>
    </contentBox>

    <contentBox>
      <Navbar></Navbar>
    </contentBox>

    <contentBox>
      <ImgBox :srcList='srcList'></ImgBox>
    </contentBox>
    
    <contentBox title='严选品牌'>
      <Yanxuan></Yanxuan>
    </contentBox>

    <contentBox title='推荐好物'>
      <Tuijian></Tuijian>
    </contentBox>
    
    <contentBox title='大家都在买'>
      <HotBox :HotData='HotData'></HotBox>
    </contentBox>

  </div>
</template>
<script>
import Banner from './components/Banner.vue'
import Navbar from './components/NavBar.vue'
import contentBox from '@/components/ContentBox.vue'
import ImgBox from '@/components/ImgBox.vue'
import Yanxuan from './components/Yanxuan'
import Tuijian from './components/Tuijian'
import HotBox from '@/components/HotBox.vue'

export default {
  data () {
    return {
      msg: 'dangqian页面',
      HotData: [],
      srcList: [
        '//img.haimi.com/Fpt1eouzu2Tmc5C3JMoeN49-4CLe',
        '//img.haimi.com/FsSof6YcsmmFomdszaRVSy8eqDNO'
      ],
      bannerList: []
    }
  },
  created () {
    this.$http.get('/api/bannerlist').then(res => {
      this.bannerList = res.data
    }, error => {
      console.log(error)
    })
    this.$http.get('/api/product', {
      params: {
        type: 0,
        page: 1,
        pageSize: 10
      }
    }).then(res => {
      this.HotData = res.data
      console.log(res.data)
    }, error => {
      console.log(error)
    })
  },
  components: {
    Banner,
    Navbar,
    contentBox,
    ImgBox,
    Yanxuan,
    Tuijian,
    HotBox
  }
}
</script>
<style scoped lang="less">
  .cont{
    padding-bottom:0.45rem;
  }
</style>