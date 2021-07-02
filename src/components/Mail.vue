<template>
<div class="container">
  <div class="row mail-content">
  <div class="front">
   <ValidationObserver  ref="mailForm">
    <form @submit.prevent="mailAnswer()">
     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="mail-left">
      <h1>填寫資料:</h1>
      <h6>謝謝您提供寶貴意見，我們將於收信後7個工作天回覆給您。</h6>
        <div class="mail-word">
          <h5>您的名字/稱謂</h5>
          <p>(必填)</p>
          <ValidationProvider name="名字" rules="required|name" v-slot="{errors, classes}">
          <input type="text" v-model="userName" :class="classes" placeholder="請輸入您的名字" />
          <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
        </div>
        <div class="mail-word">
          <h5>電子郵件</h5>
          <p>(必填)</p>
          <ValidationProvider name="信箱" rules="required|email" v-slot="{errors}">
          <input type="email" v-model="userMail" placeholder="請輸入您的信箱" />
          <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
        </div>
        <div class="mail-word">
          <h5>主旨</h5>
          <p>(必填)</p>
          <ValidationProvider name="信件主旨" rules="required|min:2" v-slot="{errors, classes }">
          <input type="text" :class="classes" v-model="mailSubject" placeholder="請輸入信件主旨" />
          <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
        </div>
        <div class="mail-word">
          <h5>內文</h5>
        </div>
    </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mail-site">
          <textarea type="text" placeholder="請輸入信件內文" v-model="mailMessage"/>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="mail-send">
          <button type="submit">
            <p>送出</p>
          </button>
        </div>
      </div>
    </div>
    </div>
    </form>
   </ValidationObserver>
  </div>
  <!--信件寄信成功 -->
  <div v-show="display =='block'? true:false" class="back">
    <div class="mail-success">
      <img src="../../public/images/company/logo-small.png">
      <h3>謝謝您的寶貴意見，我們會盡快回信!!</h3>
    </div>
  </div>
</div>
</div>
</template>

<script>
import '@/utils/validate.js' // 驗證相關
import emailjs from 'emailjs-com'// 寄送 mail
export default {
  name: 'Mail',
  data () {
    return {
      display: 'none',
      userName: '',
      userMail: '',
      mailSubject: '',
      mailMessage: ''
    }
  },
  methods: {
    async mailAnswer () {
      const success = await this.$refs.mailForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      } else {
        const templateParams = {
          userName: this.userName,
          userMail: this.userMail,
          mailSubject: this.mailSubject,
          mailMessage: this.mailMessage
        }
        console.log('userName:' + this.userName + ' ,userMail:' + this.userMail +
                       ' ,mailSubject:' + this.mailSubject + ' ,mailMessage: ' + this.mailMessage)
        console.log('名字:' + templateParams.userName)
        // 寄信
        emailjs.send('kate19881110', 'natureLifeLatte_2021', templateParams, 'user_5cqoS4St5OyBFPyzDlCJb')
          .then((result) => {
            console.log('寄件成功!', result.status, result.text)
          }, (error) => {
            console.log('寄件失敗!', error)
          })
        this.display = 'block'
      }
    }
  }
}
</script>

<style lang="scss">
@import "../scss/mail.scss";
</style>
