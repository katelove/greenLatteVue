<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <h6 class="wordFruit">*下方為已勾選蔬果</h6>
        <div class="actDiyVg">
          <div v-for="(item,index) in userDiyImg[0].diyVgFruit" :key="index" class="diy-productCard">
            <!-- 資料庫傳回產品卡片 -->
            <img :src="item.vImg">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 diy-glass">
        <!-- muted 控制靜音，loop循環播放 -->
        <video  width="750" autoplay  muted="false" loop="true">
          <source src="../../public/video/GreenLatteVideo.mp4" type="video/mp4">
        </video>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 diy-leaf">
        <div class="diy-aboard">
            <div class="diy-name" >
              <img src="../../public/images/pic/dragon-white.png">
              <div class="diy-subject">
                 <h3>命名:</h3>
                 <input type="text">
              </div>
            </div>
            <div class="diy-name">
              <h3>材料:</h3>
              <!-- 資料庫顯示資料 -->
              <h4>青江菜、小黃光、蘋果</h4>
            </div>
            <div class="diy-name">
              <h3>蔬菜 VS. 水果: </h3>
              <!-- 後端計算比例 -->
              <h4> 2:1</h4>
            </div>
        </div>

      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="workerBtn diyBtn">
           <a href="#sec5">返回</a>
           <a href="#sec8">三餐計畫</a>
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
      userDiyImg: proInfo.accoutDiyImg
    }
  },
  mounted () {
    axios.get('http://localhost:3000/accoutDiyImg')
      .then(response => {
        this.userDiyImg = response.data
      })
  }
}
</script>
<style lang="scss">@import "../scss/diyGreen.scss";</style>
