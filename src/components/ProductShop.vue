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
            <h4 @click="buyPro(index)">Add to DIY</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- DIY 購物籃 -->
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <transition name="diyChoice">
        <div class="diyBgc">
        </div>
      </transition>
    </div>
  </div>
</div>
</template>

<script>
import proInfo from '../data/db.json'
import axios from 'axios'

export default {
  data () {
    return {
      proImg: proInfo.proImg,
      proNum: ''

    }
  },
  mounted () {
    axios.get('http://localhost:3000/proImg')
      .then(response => {
        this.proImg = response.data
      })
  },
  methods: {
    buyPro (index) {
      this.proNum = index
      console.log('目前選擇產品是:' + this.proNum)
      var img = this.proImg[index].vImg
      console.log('目前圖片:' + img)
    }
  }
}
</script>

<style lang="scss">
@import "../scss/productShop.scss";
</style>
