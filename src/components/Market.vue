<template>

  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 market-title">
        <h1>歡迎《綠生活》菜市場</h1>
        <h6>*請點擊產品圖片，詳看產品說明卡。</h6>
      </div>
    </div>

   <!-- 蔬果上下輪播圖 -->
   <VueSlickCarousel
   ref="c1"
  :asNavFor="$refs.c2"
  :focusOnSelect="true">
    <ProductDetail
      v-bind="proDetail[proNum]">
    </ProductDetail>
   </VueSlickCarousel>

  <div class="items">
   <VueSlickCarousel
   ref="c2"
  :asNavFor="$refs.c1"
  :focusOnSelect="true"
  v-bind="settings">
   <div v-for="(item,index) in proImg" :key="index">
    <img :src="item.vImg" @click="showModal(index)">
   </div>
   </VueSlickCarousel>
  </div>

    <!-- Btn -->
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
       <div class="workerBtn">
         <a href="">挑選蔬果Go</a>
         </div>
      </div>
    </div>
    <div>
    </div>
</div>

</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import proInfo from '../data/db.json'
import axios from 'axios'
import ProductDetail from './ProductDetail.vue'

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
    },
    // 蔬菜產品圖片&說明卡
    proImg: proInfo.proImg,
    proDetail: proInfo.proDetail,
    // 產品參數
    proNum: '0'
  }),

  methods: {
    // for modal
    showModal (index) {
      this.proNum = index
      this.$refs['vg-modal'].show(index)
    },
    hideModal () {
      this.$refs['vg-modal'].hide()
    }

  },
  mounted () {
    // 傳 db資料
    axios.get('http://localhost:3000/proImg')
      .then(response => {
        this.proImg = response.data
      })
    axios.get('http://localhost:3000/proDetail')
      .then(response => {
        this.proDetail = response.data
      })
  },
  name: 'Market',
  components: { VueSlickCarousel, ProductDetail }

}

</script>

<style lang="scss">
@import "../scss/market.scss";
@import "../scss/productDetail.scss";
</style>
