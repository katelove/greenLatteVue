<template>
<div class="carousel">
<section id="sec1"><Carousel/></section>
<ParaagraphOne/>
<section id="sec2"><BodyDA/></section>
<div class="site"></div>
<section id="sec3"><HealthTest/></section>

</div>

</template>

<script>
import Carousel from '../components/Carousel'
import BodyDA from '../components/BodyDA'
import ParaagraphOne from '../components/ParaagraphOne'
import HealthTest from '../components/HealthTest'

export default {
  name: 'greenLatte',
  components: {
    Carousel,
    BodyDA,
    ParaagraphOne,
    HealthTest
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
    background-image: url('../../public/images/company/backGround.png');
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
