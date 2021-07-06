<template>
<div class="carousel">
<section id="sec1"><Carousel/></section>
<!-- <ParaagraphOne/> -->
<section id="sec2"><BodyDA/></section>
<!-- <div class="site"></div> -->
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

export default {
  name: 'greenLatte',
  components: {
    Carousel,
    BodyDA
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
#sec2{
  padding: 20px;
}
.footer-style{
  background-color: #2f5a28;
  color:white;
}
</style>
