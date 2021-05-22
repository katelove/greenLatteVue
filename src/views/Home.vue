<template>
<div class="carousel">
<section id="sec1"><Carousel/></section>
<ParaagraphOne/>
<section id="sec2"><BodyDA/></section>
<section id="sec3"></section>
<section id="sec4"></section>
<section id="sec5"></section>
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

export default {
  name: 'carousel',
  components: {
    Carousel, BodyDA, ParaagraphOne
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
