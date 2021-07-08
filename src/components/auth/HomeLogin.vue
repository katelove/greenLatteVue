<template>
<div class="carousel">
<section id="sec1"><Carousel/></section>
<ParaagraphOne/>
<section id="sec2"><BodyDA/></section>
<div class="site"></div>

</div>

</template>

<script>
import Carousel from '../../components/Carousel'
import BodyDA from '../../components/BodyDA'
import ParaagraphOne from '../../components/ParaagraphOne'

export default {
  name: 'HomeLogin',
  components: {
    Carousel,
    BodyDA,
    ParaagraphOne
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
