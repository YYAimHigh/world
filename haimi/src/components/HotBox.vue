<template>
  <div class="hotBox">
    <div class="contBox">
      <dl v-for='(item,index) in HotData' :key='index'>
        <dt>
          <router-link 
            :to="{name:'Details',params:{
              'img':item.img,
              'text':item.text,
              'money':item.text
            }}">
            <img :src='item.img'>
          </router-link>
        </dt>
        <dd>
          <p>{{item.index}}{{item.text}}</p>
          <p>{{item.money}}￥</p>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    HotData: {
      default: []
    }
  }
}
</script>
<style lang='less' scoped>
  .hotBox{
    width:100%;
    overflow: hidden;
    h2{
      width:100%;
      height: 0.4rem;
      text-align:center;
      line-height:0.4rem;
    }
    .contBox{
      width:100%;
      display: flex;
      flex-wrap:wrap;
      padding-left:0.1rem;
      dl{
        width:46%;
        padding-right:0.1rem;
        dt{
          width:100%;
          img{
            width:100%;
          }
        }
        dd{
          line-height:0.3rem;
          padding-left:0.1rem;
        }
      }
    }
  }
</style>

