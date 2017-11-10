<template>
  <div class="nav-bar">
    <ul>
      <li v-for="item in menuData"><span><img :src="item.icon"></span><b>{{item.text}}</b></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuData: [
        {
          text: '新人大礼包',
          icon: '//img.haimi.com/FuPMz-_M6cc-EKholObO_ec5niTe'
        },
        {
          text: '领取积分',
          icon: '//img.haimi.com/Fvxjun-u3MAa7vGJnbSiCXlFtepB'
        },
        {
          text: '邀请有礼',
          icon: '//img.haimi.com/Fi2HlhU6SOQ0GqagPJ1whoJAzg57'
        },
        {
          text: '每周新品',
          icon: '//img.haimi.com/Ft0Vx786oXJADIPEamFGp5vew5KY'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .nav-bar{
    width:100%;
    background:#fff;
    ul{
      width:100%;
      display: flex;
      text-align: center;
      border-bottom:1px solid #ccc;
      li{
        flex:1;
        font-size:0.14rem;
        padding-bottom:0.2rem;
        span{
          display: block;
          width:0.5rem;
          height: 0.5rem;
          background:green;
          margin:0 auto;
          img{
            width:100%;
            height:100%;
          }
        }
        b{
          display: inline-block;
          padding-top:0.05rem;
        }
      }
    }
  }
</style>


