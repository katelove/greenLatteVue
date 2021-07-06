<template>
<div class="carousel">
<section id="sec1"><Carousel/></section>
<!-- <ParaagraphOne/> -->
<section id="sec2"><BodyDA/></section>
<!-- <div class="site"></div> -->
<section id="sec3"><HealthTest/></section>
<!-- <div class="site"></div> -->
<section id="sec4"><GreenLatte/></section>
<!-- <div class="site"></div> -->
<section id="sec5"><Market/></section>
<!-- <div class="site"></div> -->
<section id="sec6"><ProductShop/></section>
<!-- <div class="site"></div> -->
<section id="sec7"><DiyGreen/></section>
<!-- <div class="site"></div> -->
<section id="sec8"><DatePlan/></section>
<section id="sec9"><TableProject/></section>
<section id="sec10">
  <footer class="footer-style">
    Copyright © 2021 TopStyle Watch Web | 建議使用 Chrome 瀏覽器 | Maintain by Kate <br />
    (網站設計模擬練習用,相關影像資訊來自連結介紹的各網站,如有侵權請告知即刻處理)
  </footer>
</section>
</div>

</template>

<script>
import Carousel from '../../components/Carousel'
import BodyDA from '../../components/BodyDA'
// import ParaagraphOne from '../../components/ParaagraphOne'
import HealthTest from '../../components/HealthTest'
import TableProject from '../../components/TableProject.vue'
import GreenLatte from '../../components/GreenLatte'
import Market from '../../components/Market'
import ProductShop from '../../components/ProductShop.vue'
import DiyGreen from '../../components/DiyGreen'
import DatePlan from '../../components/DatePlan'

export default {
  name: 'greenLatte',
  components: {
    Carousel,
    BodyDA,
    // ParaagraphOne,
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
   font-family: "微軟正黑體";
  }
html,body {
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
// .site{
//   height: 80px;
// }

#sec2,#sec3,#sec4,#sec5,#sec6,#sec7,#sec8{
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-style{
  background-color: #2f5a28;
  color:white;
}

@media (min-width: 1140px) {
  #sec2,#sec3,#sec5,#sec6,#sec8{
    padding: 0px;
    height: 1000px;
  }
  #sec4,#sec7{
    height: 800px;
    }
  }
</style>
