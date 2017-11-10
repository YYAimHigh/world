<template>
  <div class="box">
    <ContentBox>
      <dl v-for='(k,ind) in data' :key='ind'>
        <dt>
          <router-link :to="{name:'Search'}">
            <img :src='k.img'>
          </router-link>
        </dt>
        <dd>
          <p>{{k.title}}</p>
          <p>{{k.text}}</p>
        </dd>
      </dl>
    </ContentBox>
  </div>
</template>
<script>
import ContentBox from '@/components/ContentBox'
export default {
  props: {
    data: {
      default: []
    }
  },
  components: {
    ContentBox
  }
}
</script>
<style scoped lang='less'>
  .box{
    width:100%;
    dl{
      width:33.3%;
      float:left;
      dt{
        width:100%;
        img{
          width:100%;
        }
      }
      dd{
        p{
          line-height:0.3rem;
          padding-left:0.1rem;
        }
      }
    }
  }
</style>
