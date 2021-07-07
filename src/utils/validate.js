import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend, localize, configure } from 'vee-validate' // 1. 匯入localize模組函式
import * as rules from 'vee-validate/dist/rules' // 匯入全部的規則
import zhTW from 'vee-validate/dist/locale/zh_TW.json' // 2.匯入要使用的語言

localize({ // 3.對匯入好的語言做註冊
  zhTW // 物件成員簡易賦值
})
localize('zhTW') // 4. 使用具體的語言

// 遍歷、註冊全部的規則
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})
// 將 VeeValidate input 驗證工具載入 作為全域註冊
Vue.component('ValidationProvider', ValidationProvider)
// 將 VeeValidate 完整表單 驗證工具載入 作為全域註冊
Vue.component('ValidationObserver', ValidationObserver)
// 根據驗證狀態改變視覺效果
configure({
  classes: {
    valid: 'valid',
    invalid: 'invalid'
  }
})

// ================基本測量==================
// 1.身高
extend('heigh', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
})

// 2.體重
extend('weightV', {
  validate: value => {
    return /^[1-9]{2}$/.test(value)
  },
  message: '請輸入正確 {_field_},至少輸入兩位數'
})

// 3.性別
extend('genderOptions', {
  validate: value => {
    return true
  },
  message: '請勾選 {_field_}'
})

// 4.年齡
extend('ageFat', {
  validate: value => {
    return /^[1-9]{2}$/.test(value)
  },
  message: '請輸入正確 {_field_},至少輸入兩位數'
})

// 5.體脂數
extend('bodyFat', {
  validate: value => {
    return /^[1-9]{2}$/.test(value)
  },
  message: '請輸入正確 {_field_},至少輸入兩位數'
})

// 6.膽固醇脂數
extend('choleValue', {
  validate: value => {
    return /^[1-9]{3}$/.test(value)
  },
  message: '請輸入正確 {_field_},至少輸入三位數'
})

// ==============久坐族=====================
// 1.坐在椅子
extend('sitChairOptions', {
  validate: value => {
    return true
  },
  message: '請勾選 {_field_}'
})

// 2.上廁所次數
extend('wcGroupOptions', {
  validate: value => {
    return true
  },
  message: '請勾選 {_field_}'
})

// 3.走動分鐘
extend('walkGroupOptions', {
  validate: value => {
    return true
  },
  message: '請勾選 {_field_}'
})
// ==============肉食族=====================
// 1.菜色
extend('meatGroupOptions', {
  validate: value => {
    return true
  },
  message: '請勾選 {_field_}'
})

// 2.蔬菜量
extend('vgGroupOptions', {
  validate: value => {
    return true
  },
  message: '請勾選 {_field_}'
})

// 3.肉量
extend('maPlatGroup', {
  validate: value => {
    return true
  },
  message: '請勾選 {_field_}'
})
// ============ 帳號設定 ============
// 1.帳號
extend('account', {
  validate: value => {
    return /^[0-9a-z]{6,10}$/.test(value)
  },
  message: '{_field_}需為數字外加英文，英文字母必須為小寫，至少6位'
})

// 2.密碼
extend('pwd', {
  validate: value => {
    return /^[0-9a-z]{6,10}$/.test(value)
  },
  message: '{_field_}需為數字外加英文，英文字母必須為小寫，至少6位'
})
// ============ 會員中心 ============
// 1.名字
extend('name', {
  validate: value => {
    return /^([\u4E00-\u9FA5]+|[a-zA-Z]+)$/.test(value)
  },
  message: '請輸入真實 {_field_}，中英文不能同時有，不包含任何符號和數字'
})

// 2.address
extend('address', {
  validate: value => {
    return /^.+(路|街|段|號).+(號|樓)*$/.test(value)
  },
  message: '請輸入正確 {_field_}，須含路名、街號'
})

// 3.phone
extend('phoneNum', {
  validate: value => {
    console.log('電話區碼:' + value)
    return /^[0-9]{2,3}$/.test(value)
  },
  message: '請輸入正確 {_field_}，數字為0開頭、2~3位'
})

// 4.mobile
extend('mobile', {
  validate: value => {
    return /^09\d{8}$/.test(value)
  },
  message: '請輸入為09開頭數字為10位數的 {_field_}'
})

// ============ 會員登入 ============
// 1.帳號
extend('accountLogin', {
  validate: value => {
    return /^[0-9a-z]{6,10}$/.test(value)
  },
  message: '請輸入正確 {_field_}，英文字母都需小寫'
})

// 2.密碼
extend('accountPwd', {
  validate: value => {
    return /^[0-9a-z]{6,10}$/.test(value)
  },
  message: '請輸入正確 {_field_}，英文字母都需小寫'
})

// ============ 忘記密碼 ============
// 1.新密碼
extend('newPwd', {
  validate: value => {
    return /^[0-9a-z]{6,10}$/.test(value)
  },
  message: '請輸入正確 {_field_}，英文字母都需小寫'
})

// 2.確認新密碼
extend('chkPwd', {
  validate: value => {
    return /^[0-9a-z]{6,10}$/.test(value)
  },
  message: '請輸入正確 {_field_}，英文字母都需小寫'
})

//= ==============DatePlan===================
extend('dateTime', {
  validate: value => {
    return true
  },
  message: '請勾選 {_field_}'
})
