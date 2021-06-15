<template>

<div class="product-frame">
  <div class="product-left">
    <div class="product-pic">
      <h5>{{products.category}} :{{products.productName}}</h5>
    </div>
    <img v-bind:src="products.img" />
    <div class="product-word">
      <!-- 營養 -->
      <div v-for="(item,index) in products.nutrition" :key="index">
          <h6>{{products.nutrition[index].element}}</h6>
    </div>
    </div>
  </div>
  <div class="product-right">
    <div class="product-title">
      <!-- 食物好處 -->
      <div class="product-title-one" v-for="(item,index) in products.goodEffect" :key="index">
        <h2>{{products.goodEffect[index].id}}</h2>
        <h5>{{products.goodEffect[index].info}}</h5>
      </div>
    </div>
    <div class="product-dish">
      <div class="product-d-left-title">
        <h5>挑菜秘訣</h5>
      </div>
      <div class="product-d-left">
        <div class="p-left-detail">
          <div v-for="(item,index) in products.buySecret" :key="index">
            <i class="fa fa-caret-right"></i>
            <h6>{{products.buySecret[index].title}}</h6>
            <p>{{products.buySecret[index].detail}}</p>
          </div>
        </div>
      </div>
      <div class="product-d-right">
        <div class="product-d-right-title">
          <h5>保存技巧</h5>
        </div>
        <div class="product-d-r-top">
          <div class="p-right-detail">
            <div v-for="(item,index) in products.saveSkill" :key="index">
              <i class="fa fa-caret-right"></i>
              <p>{{products.saveSkill[index].option}}</p>
            </div>
          </div>
        </div>
        <div class="product-d-r-bottom">
          <h1>{{products.price}}</h1>
          <h5>元/{{products.unit}}</h5>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<style lang="scss">@import "../scss/productDetail.scss"; </style>
<script>
import axios from 'axios'
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/vgImg')
      .then(response => {
        console.log('讀取資料庫資料:' + response.data[0])
        this.products = response.data[0].vegetablesPro
      })
  }
}
</script>
