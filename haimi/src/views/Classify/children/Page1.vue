<template>
  <div>
    <List :listData='listData'></List>
  </div>
</template>
<script>
import List from './components/List'
export default {
  data () {
    return {
      listData: []
    }
  },
  created () {
    this.$http.get('/api/fenlei').then(res => {
      this.listData = res.data
      console.log(res.data)
    }, error => {
      console.log(error)
    })
  },
  components: {
    List
  }
}
</script>
<style scoped lang='less'>

</style>

