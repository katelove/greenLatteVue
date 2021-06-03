import Vue from 'vue'
import { ValidationProvider, extend, localize } from 'vee-validate' // 1. 匯入localize模組函式
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
Vue.component('ValidationProvider', ValidationProvider)

// 1.身高
extend('heigh', {
  validate: value => {
    return /^[1-2]+(.[0-9])?$/.test(value)
  },
  message: '請輸入正確 {_field_}'
})
