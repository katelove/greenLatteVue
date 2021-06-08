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
        <form @submit.prevent="loginAnswer()">
          <ValidationProvider name="帳號" rules="required|accountLogin" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 帳號 -->
            <div><font-awesome-icon icon="user-circle"/></div>
            <input type="text" v-model="userAccout" :class="classes" class="account-sty" placeholder="請輸入帳號">
          </div>
            <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider name="密碼" rules="required|accountPwd" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 密碼 -->
            <div><font-awesome-icon icon="key"/></div>
            <input type="password" v-model="userPwd" :class="classes" class="account-sty" placeholder="請輸入密碼">
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
export default {
  data () {
    return {
      userAccout: '',
      userPwd: ''
    }
  },
  methods: {
    login () {
      if (this.userAccout !== ' ' && this.userPwd !== '') {
      // 1. 建立 XMLHttpRequest物件
        var xhr = new XMLHttpRequest()
        console.log(xhr)
        // 2.建立連線
        xhr.open('get',
          'http://172.20.10.3:8085', true
        )
        xhr.send()
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var result = xhr.responseText
            var obj = JSON.parse(result)
            if (obj.code === 1) {
              window.location.href = 'list.html'
            } else {
              alert(obj.msg)
            }
          }
        }
      }
    },
    async loginAnswer () {
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
