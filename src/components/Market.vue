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

    <!-- 產品說明 -->
    <b-modal ref="my-modal" size="xl" hide-footer="false">
      <div class="d-block text-center">
        <ProductDetail
        v-bind="vgDetail[vgNum]"
        ></ProductDetail>
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
    proDetail: proInfo.vgImg,
    // 產品說明卡
    vgDetail: proInfo.vgImg.vegetablesPro,
    // 產品參數
    vgNum: '0'
  }),

  methods: {
    // for modal
    showModal (index) {
      console.log('目前showModal index:' + index)
      this.vgNum = index
      console.log('目前產品 index:' + this.vgNum)
      this.$refs['my-modal'].show(index)
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    toggleModal () {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
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
  },
  name: 'MyComponent',
  components: { VueSlickCarousel, ProductDetail }

}

</script>

<style lang="scss">@import "../scss/market.scss";
@import "../scss/productDetail.scss";
</style>
