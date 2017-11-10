<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for='item in bannerList' :key='item.img'><img :src="item.img" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>

export default {
  props: {
    bannerList: {
      default: ''
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3500
      }
    }
  }
}
</script>
<style scoped lang="less">
img{
  width:100%;
}
</style>
