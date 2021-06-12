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
            v-model="actName"
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
          v-model="actPwd"
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
          v-model="actConfirmPwd"
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
    <b-tab title="會員中心">
      <div class="container">
      <ValidationObserver  ref="detailForm">
      <form @submit.prevent="detailAnswer()">
        <div class="row">
          <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3 account-sty">
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
                <input type="text" v-model="userName" :class="classes" placeholder="請輸入您的名字" />
                <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
              <div class="word-row mail-length">
                <h5>信箱</h5>
                <p>(必填)</p>
                <ValidationProvider name="信箱" rules="required|mail" v-slot="{errors, classes }">
                <input type="text" v-model="userMail" :class="classes" placeholder="請輸入您的信箱" />
                <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
              <div class="word-row">
                <h5>出生日/月/年</h5>
                <p>(必填)</p>
                <ValidationProvider name="生日" rules="required|birthday" v-slot="{errors, classes }">
                <div class="dateSty">
                  <date-dropdown default="1988-11-10" min="1950" max="2007" :class="classes"  v-model="selectedDate" />
                  <span style="color:red">{{errors[0]}}</span>
                </div>
                </ValidationProvider>
              </div>
              <div class="word-row">
                <h5>地址</h5>
                <p>(必填)</p>
                <div class="twSty">
                  <h6>縣市</h6>
                  <ValidationProvider name="縣市" rules="required|county" v-slot="{errors, classes }">
                    <TwCounty :class="classes"/>
                    <span style="color:red">{{errors[0]}}</span>
                  </ValidationProvider>
                  <h6>區域</h6>
                  <ValidationProvider name="區域" rules="required|city" v-slot="{errors, classes }">
                    <TwCity :class="classes"
                    id="zipCity"
                    @input="ZipcodeFn()"
                     ></TwCity>
                    <span style="color:red">{{errors[0]}}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="address-row">
                <Twzipcode text-template=":id" v-model="twCountyCity" disabled></Twzipcode>
                <h6>地址</h6>
                <ValidationProvider name="地址" rules="required|address" v-slot="{errors, classes }">
                <input type="text" v-model="userAddress" :class="classes" name="" id="" placeholder="請輸入地址" />
                <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
              </div>

              <ValidationProvider name="電話" rules="required|phone" v-slot="{errors, classes }">
              <div class="word-row">
                <h5>電話</h5>
                <p>(必填)</p>
                <input type="text" :class="classes"/>
                <h6> - </h6>
                <input type="text" v-model="userPhone" :class="classes" name="" id="" placeholder="請輸入電話" />
                <span style="color:red">{{errors[0]}}</span>
              </div>
              </ValidationProvider>
              <ValidationProvider name="手機" rules="required|mobile" v-slot="{errors, classes }">
              <div class="word-row">
                <h5>手機</h5>
                <p>(必填)</p>
                <input type="text" v-model="userMobile" :class="classes" name="" id="" placeholder="請輸入手機"/>
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
              <button type="submit" class="baseBtn" value="送出" @click="accoutRegister">
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
import axios from 'axios'
import { County, Zipcode, ZipcodeGroupby } from 'twzipcode-vue'
import DateDropdown from 'vue-date-dropdown'

export default {
  data () {
    return {
      actName: '',
      actPwd: '',
      actConfirmPwd: '',
      userName: '',
      userMail: '',
      // userBirthday: '',
      userAddress: '',
      userPhone: '',
      userMobile: '',
      // 台灣縣市
      twCountyCity: '',
      // 生日
      selectedDate: ''
    }
  },
  methods: {
    // 驗證會員帳密
    async accountAnswer () {
      const success = await this.$refs.accountForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      }
    },
    async detailAnswer () {
      // 驗證會員資料
      const success = await this.$refs.detailForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      }
    },
    async accoutRegister () {
      // 使用axios像後台發起登陸請求
      await axios.post('register', {
        userName: this.userName,
        userMail: this.userMail,
        userBirthday: this.selectedDate,
        userAddress: this.userAddress,
        userPhone: this.userPhone,
        userMobile: this.userMobile
      })

      this.$router.push('/login')
    },
    ZipcodeFn () {
      var e = document.getElementById('zipCity')
      var value = e.options[e.selectedIndex].value
      console.log('所選縣市、區域:' + value)
      this.twCountyCity = value
      return this.twCountyCity
    }
  },
  components: {

    // 縣市
    TwCounty: County,
    // 區域
    TwCity: ZipcodeGroupby,
    // 所有郵遞區號
    Twzipcode: Zipcode,
    // 生日
    DateDropdown

  }
}
</script>

<style lang="scss">
@import "../../scss/accountCenter.scss";
.nav-account{
  margin-top: 20px;
}
</style>
