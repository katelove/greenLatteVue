<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <h6>*下方為已勾選蔬果</h6>
          <div class="diy-productCard">
            <!-- 資料庫傳回產品卡片 -->
            <img src="../../public/images/carousel/v_03.png" alt="">
            <img src="../../public/images/carousel/v_01.png" alt="">
            <img src="../../public/images/carousel/fruit1.png" alt="">
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-6 diy-glass">
        <img src="../../public/images/company/Glass.png"/>
      </div>
      <div class="col-md-6 col-lg-6 diy-leaf">
        <img src="../../public/images/company/leafCircle.png" />
          <div class="diy-aboard">
            <div class="diy-name" >
              <h3>命名:</h3>
                <input type="text" name="" id="">
            </div>
            <div class="diy-name">
              <h3>材料:</h3>
              <!-- 資料庫顯示資料 -->
              <h4>青江菜、小黃光、蘋果</h4>
            </div>
            <div class="diy-name">
              <h3>蔬菜 VS. 水果: </h3>
              <!-- 後端計算比例 -->
              <h4>2:1</h4>
            </div>
          </div>
        <img src="../../public/images/company/leaf.png" />
      </div>
    </div>
    <div class="row"></div>
    <div class="workerBtn">
        <a href="#sec5">返回</a>
        <a href="#sec8">三餐計畫</a>
    </div>
  </div>
</template>
<style lang="scss">@import "../scss/diyGreen.scss";</style>
