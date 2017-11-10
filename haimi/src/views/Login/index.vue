<template>
  <div class="login-page">
    <p>请输入手机号码验证码直接登录</p>
    <input type='text' placeholder='请输入用户名' v-model='phone'></br>
    <input type='password' placeholder='请输入密码' v-model='password'></br>
    <button @click='clickFn'>登录</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    clickFn () {
      if (this.phone === '') {
        alert('不能为空')
      } else {
        window.localStorage.setItem('userInfo', JSON.stringify({
          phone: this.phone
        }))
        this.$router.push(this.$route.query.loginDoCallback)
      }
    }
  }
}
</script>
<style scoped lang='less'>
  .login-page{
    width:100%;
    p{
      line-height:0.45rem;
      background:#fff9f3;
      color:#991f33;
      text-align:center;
    }
    input{
      border:none;
      outline:none;
      border-bottom:1px solid #ccc;
      height: 0.45rem;
      padding-left:0.1rem;
      width:100%;
      font-size:0.16rem;
    }
    button{
      width:100%;
      height: 0.4rem;
      color:#fff;
      background:#991f33;
      margin-top:0.1rem;
      border:none;
      outline:none;
      font-size:0.16rem;
    }
  }
</style>