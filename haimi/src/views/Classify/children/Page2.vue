<template>
  <div>
    <Pin :data='data'></Pin>
  </div>
</template>
<script>
import Pin from './components/Pin'
export default {
  data () {
    return {
      data: []
    }
  },
  created () {
    this.$http.get('/api/pinpai').then(res => {
      this.data = res.data
      console.log(res.data)
    }, error => {
      console.log(error)
    })
  },
  components: {
    Pin
  }
}
</script>
<style scoped lang='less'>

</style>