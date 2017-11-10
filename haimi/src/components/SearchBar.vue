<template>
  <div class="search-bar" :class='[theme]'>
    <div class="search">
      <input type="text" placeholder="搜索宝贝" v-model='searchVal'>
      <span class="clearBtn" v-show='setSearch' @click="clearText">×</span>
    </div>
    <router-link class="searchBtn" :to="{name:'Search',params:{'searchVal':searchVal}}">搜索</router-link>
    <!--<router-link :to="'/search/'+searchVal" class="searchBtn">搜索</router-link>-->
    <!--<span class="searchBtn" @click="searchFn">搜索</span>-->
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  props: {
    theme: {
      default: 'black'
    },
    defaultVal: {
      default: ''
    }
  },
  data () {
    return {
      searchVal: this.defaultVal
    }
  },
  computed: {
    setSearch () {
      return this.searchVal.length >= 1
    }
  },
  methods: {
    clearText () {
      this.searchVal = ''
    }
  }
}
</script>
<style scoped lang = "less">
.search-bar {
  width: 100%;
  height: 0.45rem;
  background: #1a1a1a;
  display: flex;
  padding: 0.1rem;
  box-sizing:border-box;
  .search {
    flex: 1;
    display: flex;
    position: relative;
  }
  input {
    flex: 1;
    outline: none;
    border: none;
    padding-left: 0.15rem;
    color: #fff;
    font-size: 0.16rem;
    border-radius: 10px;
  }
  .clearBtn {
    background: #ccc;
    width: 0.2rem;
    height: 0.2rem;
    color: #fff;
    text-align: center;
    line-height: 0.14rem;
    text-align: center;
    border-radius: 50%;
    font-size: 0.2rem;
    position: absolute;
    right: 0;
    top:0.02rem;
  }
  .searchBtn {
    width: 0.6rem;
    text-align: center;
    padding-right: 0.1rem;
    color: #fff;
    font-size: 0.16rem;
    position: absolute;
    right:0.1rem;
    top:0.15rem;
  }
}

.black {
  background: #1a1a1a;
  input {
    background: #1a1a1a;
    color: #fff;
  }
}

.white {
  background: #fff;
  border-bottom: 1px solid #ccc;
  input {
    background: #eeeeee;
    color: #666;
  }
  .searchBtn {
    color: #666;
  }
}
</style>

