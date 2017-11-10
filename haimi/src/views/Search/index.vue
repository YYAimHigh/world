<template>
  <div>
    <SearchBar theme = "white" :defaultVal = "$route.params.searchVal"></SearchBar>
    <contentBox title='大家都在买'>
      <HotBox :HotData='HotData'></HotBox>
    </contentBox>
  </div>
</template>
<script>
import SearchBar from '@/components/SearchBar'
import HotBox from '@/components/HotBox.vue'
import contentBox from '@/components/ContentBox.vue'
export default {
  data () {
    return {
      dataVal: this.$route.params.searchVal,
      HotData: []
    }
  },
  watch: {
    $route: function () {
      this.getData()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      if (this.$route.params.searchVal !== this.dataVal) {
        console.log('获取数据' + this.pageId)
        this.$http.get('/api/product', {
          params: {
            type: this.$route.params.searchVal * 1,
            page: 1,
            pageSize: 10
          }
        }).then(res => {
          this.HotData = res.data
          console.log(res.data)
        }, error => {
          console.log(error)
        })
      }
    }
  },
  components: {
    SearchBar,
    HotBox,
    contentBox
  }
}
</script>
<style>

</style>


