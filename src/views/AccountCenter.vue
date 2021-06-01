<template>
<div class="container nav-account">
   <b-tabs content-class="mt-3">
    <b-tab title="帳號設定" active>
      <div class="form-group">
        <!-- 帳號 -->
        <h4>帳號 :</h4>
          <input
            type="text"
            class="form-control"
            placeholder="請輸入帳號"
          />
      </div>
      <div class="form-group">
        <!-- 密碼 -->
        <h4>密碼 :</h4>
        <input
          type="password"
          class="form-control"
          placeholder="請輸入密碼"
        />
      </div>
      <div class="form-group">
        <!-- 確認密碼 -->
        <h4>確認密碼 :</h4>
        <input
          type="password"
          class="form-control"
          placeholder="請再確認密碼"
        />
      </div>
    </b-tab>
    <b-tab title="會員中心" class="account-center">
      <div class="account-photo">
        <div><font-awesome-icon icon="user-circle"/></div>
        <h5>大頭貼照片</h5>
        <input type="button" value="選擇檔案" />
      </div>
      <div class="account-detail">
        <div class="word-row">
          <h5>您的名字/稱謂</h5>
          <p>(必填)</p>
          <input type="text" value="請輸入您的名字" />
        </div>
        <div class="word-row">
          <h5>性別</h5>
          <p>(必填)</p>
          <input type="checkbox" name="" id="" />男性
          <input type="checkbox" name="" id="" />女性
        </div>
        <div class="word-row">
          <h5>出生年月日</h5>
          <p>(必填)</p>
          <h6>民國</h6>
          <select name="" id=""></select>
          <h6>年</h6>
          <select name="" id=""></select>
          <h6>月</h6>
          <select name="" id=""></select>
          <h6>日</h6>
        </div>
        <div class="word-row">
          <h5>地址</h5>
          <p>(必填)</p>
          <h6>郵遞區號</h6>
          <input type="text" name="" id="" />
          <h6>縣市</h6>
          <select name="" id=""></select>
          <h6>地址</h6>
          <input type="text" name="" id="" />
        </div>
        <div class="word-row">
          <h5>電話</h5>
          <p>(必填)</p>
          <input type="text" name="" id="" />
          <h6>-</h6>
          <input type="text" name="" id="" />
        </div>
        <div class="word-row">
          <h5>手機</h5>
          <p>(必填)</p>
           <input type="text" name="" id="" />
        </div>
        <hr />
        <div class="ourself-check">
          <input type="radio" name="" id="" />自我檢視健康
        </div>
        <div class="ourself-check">
           <input type="radio" name="" id="" />綠拿鐵ＤＩＹ
        </div>
        <div class="ourself-check">
           <input type="radio" name="" id="" />綠拿鐵三餐規劃
        </div>
      </div>

    </b-tab>
  </b-tabs>

</div>
</template>

<style lang="scss">
@import "../scss/accountCenter.scss";
.nav-account{
  margin-top: 20px;
}
</style>
