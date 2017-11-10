<template>
  <div class="box">
    <ContBox>
      <div v-for='(item,index) in listData' :key='index'>
        <a href="javascript:;" class="img"><img :src='item.img'></a>
        <p>
          <router-link v-for='(k,ind) in item.arr' :key='ind' :to="{name:'Search',params:{'searchVal':k}}">{{k}}</router-link>
        </p>
      </div>
    </ContBox>
  </div>
</template>
<script>
import ContBox from '@/components/ContentBox'
export default {
  props: {
    listData: {
      default: []
    }
  },
  components: {
    ContBox
  }
}
</script>
<style scoped lang='less'>
  .box{
    width:100%;
    .img{
      display: block;
      width:100%;
      img{
        width:100%;
      }
    }
  }
  p{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    a{
      padding:0.1rem 0.2rem;
      border:1px solid #000;
      margin:0.05rem;
    }
  }
</style>


