<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 market-title">
        <h1>歡迎《綠生活》菜市場</h1>
      </div>
    </div>
    <!-- 蔬果類 -->
    <div class="row">
      <div class="green-title">
        <h4>蔬菜類</h4>
      </div>
        <div class="items">
          <VueSlickCarousel v-bind="settings">
            <div><img src="../../public/images/carousel/v_01.png" ></div>
            <div><img src="../../public/images/carousel/v_02.png" ></div>
            <div><img src="../../public/images/carousel/v_03.png" /></div>
            <div><img src="../../public/images/carousel/v_04.png" /></div>
          </VueSlickCarousel>
        </div>
    </div>
     <!-- 水果類 -->
    <div class="row">
      <div class="green-title">
        <h4>水果類</h4>
      </div>
      <div class="items">
        <VueSlickCarousel v-bind="settings">
          <div><img src="../../public/images/carousel/fruit1.png"/></div>
          <div><img src="../../public/images/carousel/fruit2.png"/></div>
          <div><img src="../../public/images/carousel/fruit3.png"/></div>
          <div><img src="../../public/images/carousel/fruit4.png"/></div>
        </VueSlickCarousel>
      </div>
    </div>
    <!-- DIY -->
    <div class="row">
      <h6>*把已選取蔬果移到收藏框即可。</h6>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="choice-diy">
            <a href="">DIY</a>
          </div>
        </div>
    </div>
</div>

</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  data: () => ({
    settings: {
      arrows: false,
      dots: true, // 顯示下方小圓點
      infinite: true, // 滑到最後一張，是否要同向循環
      slidesToShow: 3, // 一次主要顯現幾個slides
      slidesToScroll: 3,
      autoplay: true,
      speed: 2000, // 播放速度
      autoplaySpeed: 2000,
      cssEase: 'linear',

      responsive: [
        {
          breakpoint: 1024, // 螢幕尺寸
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  }),
  name: 'MyComponent',
  components: { VueSlickCarousel }

}
</script>

<style lang="scss">@import "../scss/market.scss"; </style>
