<template>
  <div class="container">
  <!-- 檢視健康 -->
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12">
      <div class="chk_Title">
        <img src="../../public/images/company/leaf.png" />
          <div class="chk_all">
            <div class="chk_Word">
            <h2>健康綠生活-檢視自己健康</h2>
            </div>
            <div class="chk_article">
              <h4>健康意識抬頭，</h4>
              <p>改善飲食方式，創造健康的人生!</p>
            </div>
          </div>
        <img src="../../public/images/company/leaf.png" />
      </div>
    </div>
  </div>
  <div class="row">
    <!-- 基本測量 問題篇 -->
    <BaseTest/>
    <!-- 久坐族 -->
    <SitTest/>
    <!-- 肉食族 -->
    <MeatTest/>
  </div>
  <div class="workerBtn diyBtn">
     <a href="#sec4" @click="healthBtn()">下一頁</a>
  </div>
  </div>
</template>

<script>
import '@/utils/validate.js' // 驗證相關
import BaseTest from './BaseTest.vue'
import SitTest from './SitTest.vue'
import MeatTest from './MeatTest.vue'
// import axios from 'axios'
export default {
  methods: {
    healthBtn () {
      // 1)先取caseId
      // axios.get('http://localhost:3000/login', {
      //   params: {
      //   // eslint-disable-next-line no-undef
      //     actName: this.$store.getters.getUser.actName
      //   }
      // }).then((response) => {
      //   // 2) chk基本測量是否有做
      //   axios.get('http://localhost:3000/baseTest', {
      //     params: { caseId: response.data[0].caseId }
      //   }).then((baseTest) => {
      //     axios.get('http://localhost:3000/sitTest', {
      //       params: { caseId: response.data[0].caseId }
      //     }).then((sitTest) => {
      //       axios.get('http://localhost:3000/meatTest', {
      //         params: { caseId: response.data[0].caseId }
      //       }).then((meatTest) => {
      //         console.log('基本測量:' + baseTest.data[0] + ' ,久坐族測量:' + sitTest.data[0] +
      //                     ' ,肉食族測量:' + meatTest.data[0])
      //         if (baseTest.data[0] === undefined) {
      //           if (sitTest.data[0] === undefined) {
      //             if (meatTest.data[0] === undefined) {
      //               alert('請完成身體檢測，才能到下一頁喔~')
      //             } else {
      //               alert('尚未填寫完基本測量、久坐族測驗，無法到下一頁喔~')
      //             }
      //           } else {
      //             if (meatTest.data[0] === undefined) {
      //               alert('尚未填寫完基本測量、肉食族測驗，無法到下一頁喔~')
      //             } else {
      //               alert('尚未填寫完基本測量，無法到下一頁喔~')
      //             }
      //           }
      //         } else {
      //           if (sitTest.data[0] === undefined) {
      //             if (meatTest.data[0] === undefined) {
      //               alert('尚未填寫完久坐族測驗、肉食族測驗，無法到下一頁喔~')
      //             } else {
      //               alert('尚未填寫完久坐族測驗，無法到下一頁喔~')
      //             }
      //           } else {
      //             if (meatTest.data[0] === undefined) {
      //               alert('尚未填寫完肉食族測驗，無法到下一頁喔~')
      //             }
      //           }
      //         }
      //       }).catch((error) => { console.error(error) })
      //     }).catch((error) => { console.error(error) })
      //   }).catch((error) => { console.error(error) })
      // }).catch((error) => { console.error(error) })
      this.$store.dispatch('progressSite', 2)
      return this.$store.getters.getSiteNum
    }
  },
  computed: {
    state () {
      return Boolean(this.selectedGender)
    }
  },
  components: {
    BaseTest, SitTest, MeatTest
  }
}

</script>

<style lang="scss">@import "../scss/healthTest.scss";

</style>
