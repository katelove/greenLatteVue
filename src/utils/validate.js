import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate' // 1. 匯入localize模組函式
import zhTW from 'vee-validate/dist/locale/zh_CN' // 2.匯入要使用的語言

Validator.localize('zh_TW', zhTW)
const config = {
  locale: 'zhTW', // 物件成員簡易賦值
  fieldsBagName: 'fieldBags'
}
Vue.use(VeeValidate, config)

// 自定義 validate
const dictionary = {
  zh_TW: {
    messages: {
      required: (field) => '請輸入' + field,
      number: (field) => field + '必須為數字'
    },
    attributes: {
      heighV: '輸入正確身高',
      userName: '输入用户昵称',
      mobile: '输入手机号码',
      emailAdd: '输入邮件地址',
      authCode: '输入您收到的验证码',
      loginPwd: '输入登录密码（6~18位',
      traderpwd: '输入交易密码（6~18位',
      npwdLog: '输入新的登录密码',
      qrwdLog: '输入确认登录密码'
    }
  }
}
Validator.updateDictionary(dictionary)

// 1.身高
Validator.extend('heighV', {
  messages: {
    zhTW: field => '請輸入正確的身高'

  },
  validate: value => {
    if (value === ' ') {
      return '必填欄位'
    } else {
      return /^[1-2]+(.[0-9])?$/.test(value)
    }
  }
})
