<template>
<div class="container nav-account">
  <b-tabs content-class="mt-3"
   active-nav-item-class="font-weight-bold text-uppercase text-success">
    <b-tab title="帳號設定" active>
      <ValidationObserver  ref="accountForm">
      <form @submit.prevent="accountAnswer()">
      <div class="acontainer">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 account-setting">
        <ValidationProvider name="帳號" rules="required|account" v-slot="{errors, classes }">
        <div class="form-group accoutSty">
        <!-- 帳號 -->
          <h4>帳號 :</h4>
          <input
            type="text"
            :class="classes"
            class="form-control"
            placeholder="請輸入帳號"/>
          <span style="color:red">{{errors[0]}}</span>
        </div>
        </ValidationProvider>
        <ValidationProvider name="密碼" rules="required|password" v-slot="{errors, classes }">
        <div class="form-group accoutSty">
        <!-- 密碼 -->
          <h4>密碼 :</h4>
          <input
          type="password"
          :class="classes"
          class="form-control"
          placeholder="請輸入密碼" />
          <span style="color:red">{{errors[0]}}</span>
        </div>
        </ValidationProvider>
        <ValidationProvider name="確認密碼" rules="required|chkPwd" v-slot="{errors, classes }">
        <div class="form-group accoutSty">
        <!-- 確認密碼 -->
          <h4>確認密碼 :</h4>
          <input
          type="password"
          :class="classes"
          class="form-control"
          placeholder="請再確認密碼" />
          <span style="color:red">{{errors[0]}}</span>
        </div>
        </ValidationProvider>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <input type="submit" class="baseBtn" value="儲存">
      </div>
      </div>
      </div>
      </form>
      </ValidationObserver>
    </b-tab>
    <b-tab title="會員中心" class="account-center">
      <div class="container">
      <ValidationObserver  ref="detailForm">
      <form @submit.prevent="detailAnswer()">
        <div class="row">
          <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
            <div class="account-photo">
             <div><font-awesome-icon icon="user-circle"/></div>
             <h5>大頭貼照片</h5>
             <input type="button" value="選擇檔案" class="baseBtn" />
            </div>
          </div>
          <div class="col-xs-6 col-sm-9 col-md-9 col-lg-9">
            <div class="account-detail">
              <div class="word-row">
                <h5>您的名字/稱謂</h5>
                <p>(必填)</p>
                <ValidationProvider name="名字" rules="required|name" v-slot="{errors, classes }">
                <input type="text" :class="classes" value="請輸入您的名字" />
                <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
              <div class="word-row mail-length">
                <h5>信箱</h5>
                <p>(必填)</p>
                <ValidationProvider name="信箱" rules="required|mail" v-slot="{errors, classes }">
                <input type="text" :class="classes" value="請輸入您的信箱" />
                <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
              <div class="word-row">
                <h5>出生年月日</h5>
                <p>(必填)</p>
                <ValidationProvider name="生日" rules="required|birthday" v-slot="{errors, classes }">
                <div class="dateSty">
                  <h6>民國</h6>
                  <select :class="classes" name="" id=""></select>
                  <h6>年</h6>
                  <select :class="classes" name="" id=""></select>
                  <h6>月</h6>
                  <select :class="classes" name="" id=""></select>
                  <h6>日</h6>
                  <span style="color:red">{{errors[0]}}</span>
                </div>
                </ValidationProvider>
              </div>
              <div class="word-row">
                <h5>地址</h5>
                <p>(必填)</p>
                <ValidationProvider name="縣市" rules="required|city" v-slot="{errors, classes }">
                <div class="dateSty">
                  <h6>郵遞區號</h6>
                  <input type="text" name="" id="" disabled/>
                  <select :class="classes" name="" id=""></select>
                  <h6>縣市</h6>
                  <span style="color:red">{{errors[0]}}</span>
                </div>
                </ValidationProvider>
              </div>
              <ValidationProvider name="地址" rules="required|address" v-slot="{errors, classes }">
              <div class="address-row">
                <h6>地址</h6>
                <input type="text" :class="classes" name="" id="" value="請輸入地址" />
                <span style="color:red">{{errors[0]}}</span>
              </div>
              </ValidationProvider>
              <ValidationProvider name="電話" rules="required|phone" v-slot="{errors, classes }">
              <div class="word-row">
                <h5>電話</h5>
                <p>(必填)</p>
                <input type="text" :class="classes" name="" id="" disabled/>
                <h6> - </h6>
                <input type="text" :class="classes" name="" id="" value="請輸入電話" />
                <span style="color:red">{{errors[0]}}</span>
              </div>
              </ValidationProvider>
              <ValidationProvider name="手機" rules="required|mobile" v-slot="{errors, classes }">
              <div class="word-row">
                <h5>手機</h5>
                <p>(必填)</p>
                <input type="text" :class="classes" name="" id="" value="請輸入手機"/>
                <span style="color:red">{{errors[0]}}</span>
              </div>
              </ValidationProvider>
              <hr/>
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
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="submit" class="baseBtn" value="送出">
                <p>儲存</p>
              </button>
            </div>
          </div>
        </div>
      </form>
      </ValidationObserver>
      </div>
    </b-tab>
  </b-tabs>
</div>
</template>

<script>
export default {
  methods: {
    async accountAnswer () {
      const success = await this.$refs.accountForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      }
    },
    async detailAnswer () {
      const success = await this.$refs.detailForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      }
    }
  }
}
</script>

<style lang="scss">
@import "../scss/accountCenter.scss";
.nav-account{
  margin-top: 20px;
}
</style>
