<template>
  <div id="app" class="wrap">
    <main class="main">
      <router-view></router-view>
      <div id="loading-box"></div>
    </main>
  </div>
</template>

<script>
import './static/less/reset.css'
import 'swiper/dist/css/swiper.css'
import './utils/http'
import Loading from '@/components/Loading'
export default {
  name: 'app',
  components: {
    Loading
  }
}
</script>
<style scoped lang="less">
  .wrap{
    width:100%;
    height:100%;
    padding-bottom:0.45rem;
    box-sizing:border-box;
  }
  
</style>
