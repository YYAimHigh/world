<template>
  <div class="cont">

    <ContentBox>
      <imgBox :srcList='img'></imgBox>
    </ContentBox>

    <ContentBox title='居家'>
      <HotBox :HotData='productData'></HotBox>
    </ContentBox>

  </div>
</template>
<script>
import ContentBox from '@/components/ContentBox.vue'
import ImgBox from '@/components/ImgBox.vue'
import HotBox from '@/components/HotBox.vue'
export default {
  props: ['pageId'],
  data () {
    return {
      msg: '其他页面',
      img: [
        '//img.haimi.com/FsGUYUCWZvDNBZHBEKSfUsDgVKQ2'
      ],
      productData: []
    }
  },
  watch: {
    'pageId': function () {
      this.getData()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log('获取数据' + this.pageId)
      this.$http.get('/api/product', {
        params: {
          type: this.pageId,
          page: 1,
          pageSize: 10
        }
      }).then(res => {
        this.productData = res.data
        console.log(res.data)
      }, error => {
        console.log(error)
      })
    }
  },
  components: {
    ContentBox,
    ImgBox,
    HotBox
  }
}
</script>
<style lang='less' scoped>
  .cont{
    padding-bottom:0.45rem;
  }
</style>

