<template>
  <div class="tuijian">
    <ul>
      <router-link 
        :to="{name:'Details',params:{
          'img':item.img
        }}"
        tag='li' 
        v-for='(item,index) in imgList' 
        :key='index'><img :src='item.img'></router-link>
    </ul>
  </div>

</template>
<script>
export default {
  data () {
    return {
      imgList: [
        {
          img: '//img.haimi.com/FoITI-pBFngg5WMnfs-g5D_eGx7w'
        },
        {
          img: '//img.haimi.com/FuWX5x4IxMNvPWDhtFy16Cixnm_P'
        },
        {
          img: '//img.haimi.com/FnMGXi5SqpNGwunxy9KQAzG4fD1o'
        },
        {
          img: '//img.haimi.com/FvIiZyy9v7fJng1tY-11tHXRD7ZU'
        },
        {
          img: '//img.haimi.com/FiYaccwV02QtUfFVTHuJ3L8sWKdu'
        },
        {
          img: '//img.haimi.com/FiYaccwV02QtUfFVTHuJ3L8sWKdu'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .tuijian{
    clear:both;
    width:100%;
    text-align:center;
    line-height:0.4rem;
    ul{
      width:100%;
      display: flex;
      flex-wrap:wrap;
      li{
        width:50%;
        img{
          width:100%;
          height:100%;
        }
      }
    }
  }
</style>

