<template>
<div class="carousel">
<section id="sec1"><Carousel/></section>
<ParaagraphOne/>
<section id="sec2"><BodyDA/></section>
<div class="site"></div>
<section id="sec3"><HealthTest/></section>
<div class="site"></div>
<section id="sec4"><GreenLatte/></section>
<div class="site"></div>
<section id="sec5"><Market/></section>
<div class="site"></div>
<section id="sec6"><ProductShop/></section>
<div class="site"></div>
<section id="sec7"><DiyGreen/></section>
<div class="site"></div>
<section id="sec8"><DatePlan/></section>
<section id="sec9"><TableProject/></section>
</div>

</template>

<script>
import Carousel from '../../components/Carousel'
import BodyDA from '../../components/BodyDA'
import ParaagraphOne from '../../components/ParaagraphOne'
import HealthTest from '../../components/HealthTest'
// import WeekProject from '../../components/WeekProject'
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
    ParaagraphOne,
    HealthTest,
    // WeekProject,
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
.site{
  height: 80px;
}
</style>
