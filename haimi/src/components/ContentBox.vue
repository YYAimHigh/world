<template>
  <div class="content-box">
    <h2 class="title" v-if='title'>{{title}}</h2>
    <slot></slot>
  </div> 
</template>
<script>
export default {
  props: {
    title: {
      default: ''
    }
  }
}
</script>
<style scoped lang="less">
.content-box{
  clear:both;
  width:100%;
  background: #ffffff;
  margin-top:10px;
  .title{
    height: 0.4rem;
    line-height:0.4rem;
    text-align:center;
  }
}
</style>

