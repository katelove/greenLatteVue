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
        <form>
          <div class="form-group">
              <!-- 帳號 -->
            <div><font-awesome-icon icon="user-circle"/></div>
            <input type="text" class="form-control" placeholder="請輸入帳號">
          </div>
          <div class="form-group">
              <!-- 密碼 -->
            <div><font-awesome-icon icon="key"/></div>
            <input type="password" class="form-control" placeholder="請輸入密碼">
          </div>
            <!-- remember account and password -->
          <div class="remAccount">
            <input type="checkbox" name="rememberDetail" id="rememberDetail">
            <label for="rememberDetail">記住我</label>
          </div>
          <div class="col-md-12 col-lg-12 login-button">
            <button type="submit" class="btn btn-login">登入</button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-2 col-lg-3 "></div>
    <div class="col-md-8 col-lg-6 account-btn">
      <div class="col-md-4 col-lg-3">
        <h5>註冊</h5>
      </div>
      <div class="col-md-4 col-lg-3">
        <h5>忘記密碼</h5>
      </div>
    </div>
    <div class="col-md-2 col-lg-3 "></div>
  </div>
</div>
</template>

<style lang="scss">@import "../scss/login.scss";</style>
