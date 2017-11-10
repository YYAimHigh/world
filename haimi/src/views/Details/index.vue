<template>
  <div>
    <img :src='$route.params.img'>
    这是详情页详情页
  </div>
</template>
<script>
export default {
}
</script>
<style scoped lang='less'>
  img{
    width:100%;
  }
</style>