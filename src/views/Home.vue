<template>
<div class="carousel">
<section id="sec1"><Carousel/></section>
<ParaagraphOne/>
<section id="sec2"><BodyDA/></section>
<section id="sec3"><HealthTest/></section>
<section id="sec4"><Example/></section>
<section id="sec5"><WeekProject/></section>
<section id="sec6"></section>
<section id="sec7"></section>
<section id="sec8"></section>
<section id="sec9"></section>
</div>

</template>

<script>
import Carousel from '../components/Carousel'
import BodyDA from '../components/BodyDA'
import ParaagraphOne from '../components/ParaagraphOne'
import HealthTest from '../components/HealthTest'
import WeekProject from '../components/WeekProject'
import Example from '../components/Example'

export default {
  name: 'carousel',
  components: {
    Carousel, BodyDA, ParaagraphOne, HealthTest, WeekProject, Example
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

</style>
