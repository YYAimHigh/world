<template>
  <div class="home-page">
    <searchBar></searchBar>
    <NavBar :navList='navList' @setTemplate="setTemplate" v-pin='0'></NavBar>
    <!--加动画-->
    <transition name="slide-fade">
      <component :is="isTemplate" :pageId='pageId'></component>
    </transition>
    <FootBar></FootBar>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'

import NavBar from './components/NavBar'
import HotPage from './children/Hot/index.vue'
import LabelPage from './children/Label/index.vue'

import FootBar from '@/components/Footer.vue'

export default {
  data () {
    return {
      navList: [],
      isTemplate: 'HotPage',
      pageId: 0
    }
  },
  methods: {
    setTemplate (changeId, changePage) {
      this.isTemplate = changePage
      this.pageId = changeId
    }
  },
  created () {
    this.$http.get('/api/homenav').then(res => {
      this.navList = res.data
    }, error => {
      console.log(error)
    })
  },
  components: {
    SearchBar,
    NavBar,
    HotPage,
    LabelPage,
    FootBar
  }
}
</script>
<style>
  .home-page{
    height:1000px;
    background:#f7f7f7;
  }
  .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>