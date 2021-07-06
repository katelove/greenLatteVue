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
     <a href="#sec4">下一頁</a>
  </div>
  </div>
</template>

<script>
import '@/utils/validate.js' // 驗證相關
import BaseTest from './BaseTest.vue'
import SitTest from './SitTest.vue'
import MeatTest from './MeatTest.vue'
export default {
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
