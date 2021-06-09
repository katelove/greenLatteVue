<template>
<div class="container">
  <div class="row">
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-8 col-lg-6  login-box">
      <div class="col-md-12 col-lg-12 login-logo">
        <img src="../../public/images/company/logo-color-1.png" alt="">
        <div class="login-title">忘記密碼</div>
      </div>
      <div class="col-md-12 col-lg-12 login-form">
        <ValidationObserver  ref="forgetForm">
        <form @submit.prevent="forgetAnswer()">
          <div class="account-group">
            <!-- 帳號 -->
            <h4>帳號: </h4>
            <input type="text" class="form-control" placeholder="顯示帳號">
          </div>
          <ValidationProvider name="新密碼" rules="required|newPwd" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 新密碼 -->
            <h4>新密碼: </h4>
            <input type="text" :class="classes" class="form-control" placeholder="請輸入新密碼">
          </div>
            <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider name="確認新密碼" rules="required|chkPwd" v-slot="{errors, classes }">
          <div class="account-group">
              <!-- 確認新密碼 -->
            <h4>確認新密碼: </h4>
            <input type="password" :class="classes" class="form-control" placeholder="請輸入新密碼">
          </div>
          <div class="pwdSame">
            <label>*上下密碼需一致</label>
          </div>
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

<style lang="scss">@import "../scss/login.scss";
.pwdSame {
  label{
    color: rgb(231, 139, 33);
    padding-left: 120px;
  }
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
export default {
  methods: {
    async forgetAnswer () {
      const success = await this.$refs.forgetForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      }
    }
  }
}
</script>
