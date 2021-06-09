<template>
<div class="container">
  <div class="row">
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-8 col-lg-6  login-box">
      <div class="col-md-12 col-lg-12 login-logo">
        <img src="../../public/images/company/logo-color-1.png" alt="">
        <div class="login-title">會員登入</div>
      </div>
      <div class="col-md-12 col-lg-12 login-form">
        <ValidationObserver  ref="loginForm">
        <form @submit.prevent="loginAnswer()" method="post">
          <ValidationProvider name="帳號" rules="required|accountLogin" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 帳號 -->
            <div><font-awesome-icon icon="user-circle"/></div>
            <input type="text" v-model="loginData.userName" :class="classes" class="account-sty" placeholder="請輸入帳號">
          </div>
            <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider name="密碼" rules="required|accountPwd" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 密碼 -->
            <div><font-awesome-icon icon="key"/></div>
            <input type="password" v-model="loginData.userPwd" :class="classes" class="account-sty" placeholder="請輸入密碼">
          </div>
          <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
            <!-- remember account and password -->
          <div class="remAccount">
            <input type="checkbox" name="rememberDetail" id="rememberDetail">
            <label for="rememberDetail">記住我</label>
          </div>
          <div class="col-md-12 col-lg-12 login-button">
            <button @click="login" type="submit" class="btn btn-login">登入</button>
          </div>
        </form>
        </ValidationObserver>
      </div>
    </div>
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-8 col-lg-6 account-btn">
      <div class="col-md-4 col-lg-3">
        <router-link to="/accountCenter"><h5>註冊</h5></router-link>
      </div>
      <div class="col-md-4 col-lg-3">
        <router-link to="/forgetPwd"><h5>忘記密碼</h5></router-link>
      </div>
    </div>
    <div class="col-md-2 col-lg-3 "></div>
  </div>
</div>
</template>

<style lang="scss">@import "../scss/login.scss";</style>
<script>
// 引入js-cookie
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      loginData: {
        userName: '',
        userPwd: '',
        token: ''
      }

    }
  },
  methods: {
    login () {
      const token = 'asds32adsavrAS3Fadf5567' // token本身就是加密過的字串，隨意
      const userName = this.loginData.userName
      const userPwd = this.loginData.userPwd
      // 1)帳密需驗證，不為空
      if (userName !== '' && userPwd !== '') {
        this.loginData.token = token
      } else {
        // 告知使用者請重新輸入，1)帳號對，密碼錯 2)沒有此帳密
      }
      // 2)將cookie 設置在login
      Cookies.set('login', JSON.stringify(this.loginData), { expires: 1 })
      console.log('cookies login data:' + this.loginData)

      // 3)chk cookie當中有 token
      if (Cookies.get('login') && this.loginData.token) {
        // 4)改變路由
        this.$router.push({
          name: 'Dashboard'
        })
      }
    },
    async loginAnswer () {
      // login 表單驗證
      const success = await this.$refs.loginForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      }
    }
  }
}
</script>
