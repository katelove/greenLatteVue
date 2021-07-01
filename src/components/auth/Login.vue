<template>
<div class="container">
  <div class="row">
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-8 col-lg-6  login-box">
      <div class="col-md-12 col-lg-12 login-logo">
        <img src="../../../public/images/company/logo-color-1.png" alt="">
        <div class="login-title">會員登入</div>
      </div>
      <div class="col-md-12 col-lg-12 login-form">
        <ValidationObserver  ref="loginForm">
        <form @submit.prevent="loginAnswer">
          <ValidationProvider name="帳號" rules="required|accountLogin" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 帳號 -->
            <div><font-awesome-icon icon="user-circle"/></div>
            <input type="text" v-model="actName" :class="classes" class="account-sty" placeholder="請輸入帳號">
          </div>
            <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider name="密碼" rules="required|accountPwd" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 密碼 -->
            <div><font-awesome-icon icon="key"/></div>
            <input type="password" v-model="actPwd" :class="classes" class="account-sty" placeholder="請輸入密碼">
          </div>
          <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
            <!-- remember account and password -->
          <div class="remAccount">
            <input type="checkbox" name="rememberDetail" id="rememberDetail">
            <label for="rememberDetail">記住我</label>
          </div>
          <div class="col-md-12 col-lg-12 login-button">
            <button type="submit" class="btn btn-login">登入</button>
          </div>
        </form>
        </ValidationObserver>
      </div>
    </div>
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-8 col-lg-6 account-btn">
      <div class="col-md-4 col-lg-3">
        <router-link to="/register"><h5>註冊</h5></router-link>
      </div>
      <div class="col-md-4 col-lg-3">
        <router-link to="/forgetPwd"><h5>忘記密碼</h5></router-link>
      </div>
    </div>
    <div class="col-md-2 col-lg-3 "></div>
  </div>
</div>
</template>

<style lang="scss">@import "../../scss/login.scss";</style>
<script>
// 引入js-cookie
// import Cookies from 'js-cookie'
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      actName: '',
      actPwd: ''
    }
  },
  methods: {
    async loginAnswer () {
      // login 表單驗證
      const success = await this.$refs.loginForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      } else {
        axios.get('http://localhost:3000/login', {
          // URL参數放在params屬性裏面
          params: {
            actName: this.actName
          }
        }).then((response) => {
          if (response.data[0] === undefined) {
            // eslint-disable-next-line quotes
            alert("你還不是會員，請前往註冊!!")
            this.$router.push('/register')
          } else {
            // chk get會員資料與json資料相符合
            console.log('account:' + response.data[0].actName +
              ' ,this.account:' + this.actName +
              ' ,password:' + response.data[0].actPwd +
              ' ,this.password:' + this.actPwd)
            if (response.data[0].actName === this.actName &&
               response.data[0].actPwd === this.actPwd) {
              axios.get('http://localhost:3000/register', {
              // URL参數放在params屬性裏面
                params: {
                  actName: this.actName
                }
              }).then((response) => {
                console.log('register actName data:' + response.data[0])
                if (response.data[0] === undefined) {
                  alert('你的會員資料尚未填寫完成!!')
                  this.$store.dispatch('login', {
                  // 1)login 資料 帶入 register帳號設定
                    actName: this.actName,
                    actPwd: this.actPwd
                  }).then(() => {
                    this.$router.push('/register')
                  })
                }
              }).catch((error) => console.log('regiaster error:' + error))
              this.$router.push('/home')
            } else if (response.data[0].actName === this.actName &&
               response.data[0].actPwd !== this.actPwd) {
              alert('你的密碼填寫錯誤，請重新填寫')
            }
          }
        }).catch((error) => console.log('login error:' + error))

        // this.$store.dispatch('register', {
        //   userName: this.userName,
        //   userPwd: this.userPwd
        // })
        //   .then(() => {
        //     this.$router.push('/home')
        //   }, (err) => {
        //     this.$store.dispatch('pushError', err.response.data.error)
        //   })
        //   .catch(err => {
        //     this.$store.dispatch('pushError', err.response.data.error)
        //   })
        return true
      }
    }
  }
}
</script>
