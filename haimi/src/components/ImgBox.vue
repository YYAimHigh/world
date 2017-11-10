<template>
  <div class="imgBox">
    <router-link 
      v-for='(item,ind) in srcList' 
      :key='ind' 
      :to="{name:'Search',params:{'searchVal':searchVal}}"
      ><img :src="item" alt=""></router-link>
  </div>
</template>
<script>
export default {
  props: {
    srcList: {
      default: []
    },
    searchVal: {
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
  .imgBox{
    width:100%;
    a{
      display: block;
      padding-top:0.1rem;
      img{
        width:100%;
      }
    }
  }
</style>
