<template>
  <div class="carousel">
    <section id="sec1"><Carousel /></section>

    <section id="sec2"><BodyDA /></section>

    <section id="sec3" v-if="$store.getters.getSiteNum >= 1">
      <HealthTest />
    </section>

    <section id="sec4" v-if="$store.getters.getSiteNum >= 2">
      <GreenLatte />
    </section>

    <section id="sec5" v-if="$store.getters.getSiteNum >= 3">
      <Market />
    </section>

    <section id="sec6" v-if="$store.getters.getSiteNum >= 4">
      <ProductShop />
    </section>

    <section id="sec7" v-if="$store.getters.getSiteNum >= 5">
      <DiyGreen />
    </section>

    <section id="sec8" v-if="$store.getters.getSiteNum >= 6">
      <DatePlan />
    </section>
    <section id="sec9" v-if="$store.getters.getSiteNum >= 7">
      <TableProject />
    </section>
    <section id="sec10">
      <footer class="footer-style">
        Copyright © 2021 TopStyle Watch Web | 建議使用 Chrome 瀏覽器 | Maintain
        by Kate <br />
        (網站設計模擬練習用,相關影像資訊來自連結介紹的各網站,如有侵權請告知即刻處理)
      </footer>
    </section>
  </div>
</template>

<script>
import Carousel from '../../components/Carousel'
import BodyDA from '../../components/BodyDA'

import HealthTest from '../../components/HealthTest'
import TableProject from '../../components/TableProject.vue'
import GreenLatte from '../../components/GreenLatte'
import Market from '../../components/Market'
import ProductShop from '../../components/ProductShop.vue'
import DiyGreen from '../../components/DiyGreen'
import DatePlan from '../../components/DatePlan'

export default {
  name: 'Home',
  components: {
    Carousel,
    BodyDA,
    HealthTest,
    TableProject,
    GreenLatte,
    Market,
    ProductShop,
    DiyGreen,
    DatePlan
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微軟正黑體';
}
html,
body {
  height: 100%;
  font-family: sans-serif;
  font-weight: bold;
  background-image: url('../../../public/images/company/backGround.png');
}
section {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#sec2,
#sec3,
#sec4,
#sec5,
#sec6,
#sec7,
#sec8 {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-style {
  background-color: #2f5a28;
  color: white;
  width: 100%;
}

@media (min-width: 1140px) {
  #sec2,
  #sec3,
  #sec5,
  #sec6,
  #sec8 {
    padding: 0px;
    height: 1000px;
  }
  #sec4,
  #sec7 {
    height: 800px;
  }
}
</style>
