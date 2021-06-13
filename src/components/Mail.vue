<template>
<div class="container">
  <div class="row mail-content">
   <ValidationObserver  ref="mailForm">
    <form @submit.prevent="mailAnswer()">
     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="mail-left">
      <h1>填寫資料:</h1>
      <h6>謝謝您提供寶貴意見，我們將於收信後7個工作天回覆給您。</h6>
        <div class="mail-word">
          <h5>您的名字/稱謂</h5>
          <p>(必填)</p>
          <ValidationProvider name="名字" rules="required|name" v-slot="{errors, classes }">
          <input type="text" :class="classes"  placeholder="請輸入您的名字"/>
          <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
        </div>
        <div class="mail-word">
          <h5>電子郵件</h5>
          <p>(必填)</p>
          <ValidationProvider name="信箱" rules="required|email" v-slot="{errors, classes }">
          <input type="email" :class="classes" placeholder="請輸入您的信箱"/>
          <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
        </div>
        <div class="mail-word">
          <h5>主旨</h5>
          <p>(必填)</p>
          <ValidationProvider name="信件主旨" rules="required|min:2" v-slot="{errors, classes }">
          <input type="text" :class="classes" v-model="mailSubject" placeholder="請輸入信件主旨"/>
          <span style="color:red">{{errors[0]}}</span>
          </ValidationProvider>
        </div>
        <div class="mail-word">
          <h5>內文</h5>
        </div>
    </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mail-site">
          <textarea type="text" name="" id="" placeholder="請輸入信件內文"/>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 mail-file">
          <h5>附加檔案</h5>
          <input type="file" name="" id="">
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

</div>
</template>

<script>
import '@/utils/validate.js' // 驗證相關
export default {
  data () {
    return {
      mailSubject: ''
    }
  },
  methods: {
    async mailAnswer () {
      const success = await this.$refs.mailForm.validate()
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
@import "../scss/mail.scss";
</style>
