/* eslint-disable vue/no-parsing-error */
<template>
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 titleWord">
      <h1>請選購 DIY 綠拿鐵蔬果產品</h1>
    </div>
  </div>
  <!-- 產品卡 -->
  <div class="row">
    <div v-for="(item,index) in proImg" :key="index">
      <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 items">
        <div class="imgShopping">
          <img :src="item.vImg">
          <div class="shoppingItems">
            <h4 @click='addDIY(index)'>Add to DIY</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- DIY 購物籃 -->
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 items">
      <!-- <transition name="diyChoice"> -->
        <div class="diyBgc" id="diyBox">
          <div v-for="(item,index) in cart" :key="index">
            <!-- <h3>{{item}}</h3> -->
            <!-- <img src="../../public/images/carousel/fruit1.png"> -->
            <img :src="item" @click="deletePic(index)">
          </div>
      </div>
      <!-- </transition> -->
    </div>
  </div>
</div>
</template>

<script>
// import { TweenMax } from 'greensock'
import proInfo from '../data/db.json'
import axios from 'axios'

export default {
  data () {
    return {
      proImg: proInfo.proImg,
      cart: []

    }
  },
  mounted () {
    axios.get('http://localhost:3000/proImg')
      .then(response => {
        this.proImg = response.data
      })
  },
  methods: {
    addDIY (index) {
      var choiceImg = this.proImg[index].vImg
      console.log('目前圖片:' + choiceImg)
      this.cart.push(choiceImg)
      console.log('this.cart:' + this.cart)
      // var bucket = document.getElementById('diyBox')
      // this.$nextTick(() => {
      //   // TweenMax JS動畫庫
      //   TweenMax.from('#diyBox', 0.8, {
      //     // eslint-disable-next-line no-undef
      //     bottom: $evt.target.offset().bottom,
      //     opacity: 1,
      //     // eslint-disable-next-line no-undef
      //     ease: Power1.easeIn// 慢速開始，會越來越快
      //   })
      //   setTimeout(() => {
      //     this.cart.push(choiceImg)
      //   }, 800)
      // })
    },
    deletePic (index) {
      console.log('刪除車子第幾張圖片:' + index)
      this.cart.splice(index, 1)
      console.log('刪除過後 Cart:' + this.cart[index])
    }
  }
}
</script>

<style lang="scss">
@import "../scss/productShop.scss";
</style>
