<template>
<div class="container">
  <div class="row">
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-8 col-lg-6  login-box">
      <div class="col-md-12 col-lg-12 login-logo">
        <img src="/public/images/company/logo-color-1.png" alt="">
        <div class="login-title">忘記密碼</div>
      </div>
      <div class="col-md-12 col-lg-12 login-form">
        <ValidationObserver  ref="forgetForm">
        <form @submit.prevent="forgetAnswer()">
          <div class="account-group">
            <!-- 帳號 -->
            <h4>帳號: </h4>
            <input type="text" class="form-control" v-model="actName" placeholder="請輸入帳號">
          </div>
          <ValidationProvider name="新密碼" rules="required|newPwd" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 新密碼 -->
            <h4>新密碼: </h4>
            <input type="text" :class="classes" class="form-control" v-model="actPwd" placeholder="請輸入新密碼">
          </div>
            <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider name="確認新密碼" rules="required|chkPwd" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 確認新密碼 -->
            <h4>確認新密碼: </h4>
            <input type="password" :class="classes" class="form-control"
            v-model="actConfirmPwd"
            @input="chkPwd()"
            placeholder="請輸入新密碼">
          </div>
            <span v-if="isShow"></span>
            <span v-else style="color:red" >{{pwdError.word}}</span>
            <label class="pwdSame">*上下密碼需一致</label>
          <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
          <div class="col-md-12 col-lg-12 login-button">
            <button type="submit" class="btn btn-login">登入</button>
          </div>
        </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss">@import "../../scss/login.scss";
.pwdSame {
    color: rgb(231, 139, 33);
}

.account-group{
  h4{
    width: 200px;
  }
}

.login-form{
  span{
    padding-left: 120px;
  }
}

</style>
<script>
import axios from 'axios'
export default {
  name: 'ForgetPwd',
  data () {
    return {
      actName: '',
      actPwd: '',
      actConfirmPwd: '',
      isShow: 'false',
      pwdError: {
        word: '兩個密碼須一致，請重新輸入'
      }
    }
  },
  methods: {
    async forgetAnswer () {
      const success = await this.$refs.forgetForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      } else {
        axios.get('http://localhost:3000/login', {
          params: {
            // eslint-disable-next-line no-undef
            actName: this.actName
          }
        }).then((response) => {
          if (response.data.length !== 0) {
            var id = response.data[0].id
            console.log('確認login是否有:' + response.data.length + '忘記密碼的 id:' + id)
            // put
            axios.put(`http://localhost:3000/login/${id}`, {
              actName: this.actName,
              actPwd: this.actPwd,
              actConfirmPwd: this.actConfirmPwd
            }).then((res) => {
              console.table(res.data)
            }).catch((error) => { console.error(error) })
          } else {
            alert('你還不是會員，請前往註冊!')
          }
        }).catch((error) => { console.error(error) })
        return true
      }
    },
    chkPwd () {
      if (this.actPwd !== this.actConfirmPwd) {
        this.isShow = !this.isShow
        return this.pwdError
      }
      console.log('密碼:' + this.actPwd + '再次確認密碼:' + this.actConfirmPwd)
    }
  }
}
</script>
