<template>
<div class="container">
  <div class="product-frame">
  <div class="row">
  <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
    <div class="product-left">
      <div class="product-pic">
       <h5>{{category}} :{{productName}}</h5>
      </div>
      <div class="productTimg"><img v-bind:src="img" /></div>
      <!-- 營養 -->
      <div class="productTword">
        <div v-for="(item,index) in nutrition" :key="index" class="product-word">
          <h6>{{nutrition[index].element}}</h6>
        </div>
      </div>
   </div>
  </div>
    <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
    <div class="product-right">
      <!-- 上半部 -->
      <div class="product-right-top">
        <div class="product-title col-sm-12 col-md-12 col-lg-7 col-xl-7">
       <!-- 食物好處 -->
          <div class="product-title-one" v-for="(item,index) in goodEffect" :key="index">
            <h2>{{goodEffect[index].id}}</h2>
            <h6>{{goodEffect[index].info}}</h6>
          </div>
        </div>
        <div class="product-secret col-sm-12 col-md-12 col-lg-5 col-xl-5">
          <div class="product-secret-title">
            <h5>挑菜秘訣</h5>
          </div>
          <div class="product-secret-detail">
            <div v-for="(item,index) in buySecret" :key="index">
              <div><font-awesome-icon icon="caret-right"/></div>
              <h6>{{buySecret[index].title}}</h6>
              <p>{{buySecret[index].detail}}</p>
            </div>
        </div>
        </div>
      </div>
      <!-- 下半部 -->
      <div class="product-right-bottom">
        <div class="product-save col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div class="product-save-title">
            <h5>保存技巧</h5>
          </div>
          <div class="product-save-top">
            <div class="product-save-detail">
              <div v-for="(item,index) in saveSkill" :key="index">
                <div> <font-awesome-icon icon="caret-right"/></div>
                <h6>{{saveSkill[index].option}}</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="product-price col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <h1>{{price}}</h1>
          <div class="product-unit"><h5>元/{{unit}}</h5></div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
</div>

</template>
<style lang="scss">@import "../scss/productDetail.scss"; </style>
<script>
export default {
  name: 'products',
  props: ['category', 'productName', 'img',
    'nutrition', 'goodEffect', 'buySecret',
    'saveSkill', 'price', 'unit']
}

</script>
