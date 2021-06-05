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
    return /^[1-9]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
})

// 3.性別
extend('genderOptions', {
  validate: value => {
    console.log(' genderOptions:' + value)
    return true
  },
  message: '請勾選 {_field_}'
})

// 4.年齡
extend('ageFat', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
})

// 5.體脂數
extend('bodyFat', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
})

// 6.膽固醇脂數
extend('choleValue', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
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

// ============ 會員中心 ============
// 1.名字
extend('name', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入 {_field_}'
})

// 2.信箱
extend('mail', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
})

// 3.生日
extend('birthday', {
  validate: value => {
    return true
  },
  message: '請選擇 {_field_}'
})

// 4.縣市
extend('city', {
  validate: value => {
    return true
  },
  message: '請選擇 {_field_}'
})

// 5.address
extend('address', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
})

// 6.phone
extend('phone', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
})

// 7.mobile
extend('mobile', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
})
