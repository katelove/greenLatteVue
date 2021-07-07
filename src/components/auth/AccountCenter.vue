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
        <ValidationProvider name="密碼" rules="required|pwd" v-slot="{errors, classes }">
        <div class="form-group accoutSty">
        <!-- 密碼 -->
          <h4>密碼 :</h4>
          <input
          type="text"
          v-model="actPwd"
          :class="classes"
          class="form-control"
          placeholder="請輸入密碼" />
          <span style="color:red">{{errors[0]}}</span>
        </div>
        </ValidationProvider>
        <div class="form-group accoutSty">
        <!-- 確認密碼 -->
          <h4>確認密碼 :</h4>
          <input
          type="password"
          v-model="actConfirmPwd"
          @input="chkPwd()"
          class="form-control"
          placeholder="請再確認密碼" />
          <span v-if="isShow"></span>
          <span v-else style="color:red" >{{pwdError.word}}</span>
        </div>
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
             <div>
               <img v-if="image" :src="image"/>
             </div>
             <h5>大頭貼照片</h5>
             <input type="file" value="選擇檔案"  @change="fileSelected"/>
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
                <ValidationProvider name="信箱" rules="required|email" v-slot="{errors}">
                <input type="text" v-model="userMail"  placeholder="請輸入您的信箱" />
                <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
              <div class="word-row">
                <h5>出生日/月/年</h5>
                <p>(必填)</p>
                <div class="dateSty">
                  <date-dropdown :value="selectedDate" min="1959" max="2007" v-model="selectedDate"/>
                </div>
              </div>
              <div class="word-row">
                <h5>地址</h5>
                <p>(必填)</p>
                <div class="twSty">
                  <h6>縣市</h6>
                  <TwCounty v-model="myCounty"/>
                  <h6>區域</h6>
                  <Twzipcode text-template=":id"
                  :filter-by-county="myCounty"
                  class="areaSty"
                  v-model="cityValue"
                  ></Twzipcode>
                </div>
              </div>
              <div class="address-row">
               <h6>地址</h6>
                <ValidationProvider name="地址" rules="required|address" v-slot="{errors, classes }">
                <input type="text" v-model="userAddress" :class="classes" name="" id="" placeholder="請輸入地址" />
                <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
              <div class="word-row">
                <h5>家裡電話</h5>
                <p>(必填)</p>
                <ValidationProvider name="電話區碼" rules="required|numeric|phoneNum" v-slot="{errors, classes }">
                <input type="text" v-model="userPhoneNum" :class="classes" class="phoneNum" placeholder="請輸入區碼"/>
                <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
                <h6> - </h6>
                <ValidationProvider name="電話" rules="required|digits:8|numeric" v-slot="{errors, classes }">
                <input type="text" v-model="userPhone" :class="classes" placeholder="請輸入電話" />
                <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
              </div>
              <ValidationProvider name="手機" rules="required|mobile|numeric" v-slot="{errors, classes }">
              <div class="word-row">
                <h5>手機</h5>
                <p>(必填)</p>
                <input type="text" v-model="userMobile" class="mobilePhone" :class="classes" placeholder="請輸入手機"/>
                <span style="color:red">{{errors[0]}}</span>
              </div>
              </ValidationProvider>
              <hr/>
              <!-- <div class="ourself-check">
                <input type="radio" name="" id="" />自我檢視健康
              </div>
              <div class="ourself-check">
                <input type="radio" name="" id="" />綠拿鐵ＤＩＹ
              </div>
              <div class="ourself-check">
                <input type="radio" name="" id="" />綠拿鐵三餐規劃
              </div> -->
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
import axios from 'axios'
import { County, Zipcode } from 'twzipcode-vue'
import DateDropdown from 'vue-date-dropdown'

export default {
  name: 'Register',
  data () {
    return {
      actName: '',
      actPwd: '',
      actConfirmPwd: '',
      userName: '',
      userMail: '',
      userAddress: '',
      userPhoneNum: '',
      userPhone: '',
      userMobile: '',
      // 台灣縣市
      myCounty: '',
      cityValue: '',
      // 生日
      selectedDate: '',
      isShow: 'false',
      pwdError: {
        word: '兩個密碼須一致，請重新輸入'
      },
      // 上傳圖片
      image: require('../../../public/images/company/user-ion.png'),
      // 產caseId
      loginID: '',
      caseID: ''
    }
  },
  mounted () {
    var loginUser = localStorage.getItem('user')
    console.log('navLogin user:' + loginUser)
    if (loginUser !== null) {
      this.$router.push('/loginRegister')
    }

    axios.get('http://localhost:3000/login', {
      // URL参數放在params屬性裏面
      params: {
        // eslint-disable-next-line no-undef
        actName: this.$store.getters.getUser.actName
      }
    }).then((response) => {
      console.log('register get login data:' + response.length)
      if (response.data.length !== 0) {
        // 帳號設定顯示資料
        this.actName = response.data[0].actName
        this.actPwd = response.data[0].actPwd
        this.actConfirmPwd = response.data[0].actConfirmPwd
        // 取login ID
        this.loginID = response.data[0].id
        console.log('mount loginID:' + this.loginID)
      }
    }).catch((error) => console.log(error))
    // 2)從db get資料
    axios.get('http://localhost:3000/register', {
      params: {
        // eslint-disable-next-line no-undef
        actName: this.$store.getters.getUser.actName
      }
    }).then((response) => {
      console.log('register get register data:' + response.length)
      if (response.data.length !== 0) {
        // 會員資料顯示資料
        console.table(response.data[0])
        this.userName = response.data[0].userName
        this.userMail = response.data[0].userMail
        // 生日
        this.selectedDate = response.data[0].selectedDate
        console.log('register data birthday:' + this.selectedDate)
        var arr = this.selectedDate.split('.')
        // eslint-disable-next-line no-unused-vars
        document.getElementsByClassName('date-dropdown-select day')[0].value = arr[0].replace(/^0+/, '')
        document.getElementsByClassName('date-dropdown-select month')[0].value = arr[1].replace(/^0+/, '') - 1
        document.getElementsByClassName('date-dropdown-select year')[0].value = arr[2]
        this.myCounty = response.data[0].myCounty
        this.cityValue = response.data[0].cityValue
        this.userAddress = response.data[0].userAddress
        this.userPhoneNum = response.data[0].userPhoneNum
        this.userPhone = response.data[0].userPhone
        this.userMobile = response.data[0].userMobile
        this.image = response.data[0].image
      }
    }).catch((error) => console.log(error))
  },
  methods: {
    // 驗證會員帳密
    async accountAnswer () {
      const success = await this.$refs.accountForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      } else {
        // 1)chk是否有此帳號，
        await axios.get('http://localhost:3000/login', {
          params: {
            // eslint-disable-next-line no-undef
            actName: this.actName
          }
        }).then((response) => {
          console.log('確認帳號是否有人使用' + response.data.length)
          if (response.data.length !== 0) {
            alert('這帳號已有人使用，請重新填寫，謝謝')
          } else {
            axios.post('http://localhost:3000/login', {
              actName: this.actName,
              actPwd: this.actPwd,
              actConfirmPwd: this.actConfirmPwd
            }).then((res) => {
              alert('請登入')
              this.$router.push('/login')
            }).catch((error) => { console.error(error) })
          }
        }).catch((error) => { console.error(error) })

        return true
      }
    },
    async detailAnswer () {
      // 驗證會員資料
      const success = await this.$refs.detailForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      } else {
        // 新會員post data，產會員caseID
        var today = new Date()
        var year = today.getFullYear()
        var month = ('0' + (today.getMonth() + 1)).slice(-2)
        var day = ('0' + today.getDate()).slice(-2)
        console.log('login this.loginID:' + this.loginID)
        this.caseID = year + month + day + '000' + this.loginID
        console.log('this.caseID:' + this.caseID)
        axios.get('http://localhost:3000/register', {
          // URL参數放在params屬性裏面
          params: {
            // eslint-disable-next-line no-undef
            actName: this.$store.state.user[0].actName
          }
        }).then((response) => {
          if (response.data.length !== 0) {
            var id = response.data[0].id
            console.log('register id:' + id)
            // put
            axios.put(`http://localhost:3000/register/${id}`, {
              actName: this.actName,
              userName: this.userName,
              userMail: this.userMail,
              selectedDate: this.selectedDate,
              myCounty: this.myCounty,
              cityValue: this.cityValue,
              userAddress: this.userAddress,
              userPhoneNum: this.userPhoneNum,
              userPhone: this.userPhone,
              userMobile: this.userMobile,
              image: this.image// 用base64字串的方式上傳
            }).then((res) => {
              console.table(res.data)
            }).catch((error) => { console.error(error) })
          } else {
            // post
            axios.post('http://localhost:3000/register', {
              caseId: this.caseID,
              actName: this.actName,
              userName: this.userName,
              userMail: this.userMail,
              selectedDate: this.selectedDate,
              myCounty: this.myCounty,
              cityValue: this.cityValue,
              userAddress: this.userAddress,
              userPhoneNum: this.userPhoneNum,
              userPhone: this.userPhone,
              userMobile: this.userMobile,
              image: this.image// 用base64字串的方式上傳
            }).then((res) => {
              console.table(res.data)
            }).catch((error) => { console.error(error) })
          }
        }).catch((error) => console.log(error))
      }
      return true
    },
    chkPwd () {
      if (this.actPwd !== this.actConfirmPwd) {
        this.isShow = !this.isShow
        return this.pwdError
      }
      console.log('密碼:' + this.actPwd + '再次確認密碼:' + this.actConfirmPwd)
    },
    fileSelected (e) {
      const file = e.target.files.item(0)
      const reader = new FileReader()
      reader.addEventListener('load', this.imageLoaded)
      reader.readAsDataURL(file)
    },
    imageLoaded (e) {
      this.image = e.target.result
    }
  },
  components: {

    // 縣市
    TwCounty: County,
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
