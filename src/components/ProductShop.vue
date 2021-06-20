<template>
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
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
            <h4>Add to Cart</h4>
          </div>
        </div>
      </div>
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
      proImg: proInfo.proImg
    }
  },
  mounted () {
    axios.get('http://localhost:3000/proImg')
      .then(response => {
        this.proImg = response.data
      })
  }
}
</script>

<style lang="scss">
@import "../scss/productShop.scss";
</style>
