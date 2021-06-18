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
            <div v-for="(item,index) in proDetail" :key="index">
              <img :src="item.proImg" @click="showModal(index)">
            </div>
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
            <div v-for="(item,index) in fruitPhoto" :key="index">
              <img :src="item.proImg" @click="showFModal(index)">
            </div>
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

    <!-- 蔬菜產品說明 -->
    <b-modal ref="vg-modal" size="xl" hide-footer="false">
      <div class="d-block text-center">
        <ProductDetail
        v-bind="vgDetail[proNum]"
        ></ProductDetail>
      </div>
    </b-modal>

    <!-- 水果產品說明 -->
    <b-modal ref="fruit-modal" size="xl" hide-footer="false">
      <div class="d-block text-center">
        <FruitDetail
        v-bind="fruitDetail[proNum]"
        ></FruitDetail>
      </div>
    </b-modal>

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
import FruitDetail from './FruitDetail.vue'

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
    proDetail: proInfo.vgImg,
    vgDetail: proInfo.vegetablesPro,
    // 水果產品圖片&說明卡
    fruitPhoto: proInfo.fruitImg,
    fruitDetail: proInfo.fruitPro,
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
    },
    showFModal (index) {
      this.proNum = index
      this.$refs['fruit-modal'].show(index)
    },
    hideFModal () {
      this.$refs['fruit-modal'].hide()
    }

  },
  mounted () {
    axios.get('http://localhost:3000/vgImg')
      .then(response => {
        this.proDetail = response.data
      })
    axios.get('http://localhost:3000/vegetablesPro')
      .then(response => {
        this.vgDetail = response.data
      })
    axios.get('http://localhost:3000/fruitImg')
      .then(response => {
        this.fruitPhoto = response.data
      })
    axios.get('http://localhost:3000/fruitPro')
      .then(response => {
        this.fruitDetail = response.data
      })
  },
  name: 'MyComponent',
  components: { VueSlickCarousel, ProductDetail, FruitDetail }

}

</script>

<style lang="scss">@import "../scss/market.scss";
@import "../scss/productDetail.scss";
</style>
