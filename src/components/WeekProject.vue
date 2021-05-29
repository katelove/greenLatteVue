<template>
 <!-- <div class="container">
   <div class="row">
      <div class="col-sm-12 -col-md-12 col-lg-12 board-style"> -->
      <div class="board-style">
      <!-- 工具列 -->
      <div id="tool">
        <!-- <ul>
        <li> -->
          <div v-on:click="show = !show">
              <h3>字級</h3>
              <h1>A</h1>
          </div>
          <transition name="ul">
            <ul v-if="show" class="ul-box">
              <li><h2>A</h2></li>
              <li><h4>A</h4></li>
              <li><h6>A</h6></li>
            </ul>
          </transition>
        <!-- </li> -->
        <!-- <li>-->
          <div v-on:click="active = ! active">
              <h3>字的顏色</h3>
              <div class="tool-color"></div>
          </div>
          <transition name="ul">
            <ul v-if="active" class="ul-box">
              <li><div class="t-c-red"></div></li>
              <li><div class="t-c-blue"></div></li>
              <li><div class="t-c-green"></div></li>
            </ul>
          </transition>
        <!--</li> -->
        <!-- <li>
            <h3>貼圖</h3>
            <div><img src="../../public/images/pic/crown.png" alt="" /></div>
            <ul>
              <li>
                <img src="../../public/images/pic/crown.png" id="texture1" alt="" />
              </li>
              <li>
                <img src="../../public/images/pic/hearts.png" id="texture2" alt="" />
              </li>
              <li>
                <img src="../../public/images/pic/smile.png" id="texture3" alt="" />
              </li>
              <li>
                <img src="../../public/images/pic/confetti.png" id="texture4" alt="" />
              </li>
            </ul>
          </li>
          <li>
            <h3>DIY綠拿鐵</h3>
            <div><img src="../../public/images/pic/dragon-fruit.png" alt="" /></div>
            <ul>
              <li><img src="../../public/images/pic/dragon-fruit.png" alt="" /></li>
              <li></li>
            </ul>
          </li>
          <li>
            <h3>健康餐</h3>
            <div><img src="../../public/images/pic/fried-rice.png" alt="" /></div>
            <ul>
              <li><img src="../../public/images/pic/fried-rice.png" alt="" /></li>
            </ul>
          </li>
          <li>
            <h3>推薦<br />綠拿鐵</h3>
            <ul>
              <li>
                <h4>火紅綠拿鐵</h4>
                <img src="../../public/images/pic/drink.png" alt="" />
              </li>
              <li>
                <h4>經典綠拿鐵</h4>
                <img src="../../public/images/pic/orange-juice.png" alt="" />
              </li>
              <li>
                <h4>清爽綠拿鐵</h4>
                <img src="../../public/images/pic/juice.png" alt="" />
              </li>
            </ul>
          </li>

          <div class="tool-try">
            <h4>漸進式</h4>
            <h4>體驗式</h4>
            <h4>全面式</h4>
          </div> -->
        <!-- </ul> -->
      </div>

      <!-- 月曆大小 -->
      <div id="calendarsite">
        <!-- 顯示年/月   -->
        <div id="topTitle">
          <div class="rightOption">
            <div id='teamTimeBtn' class='btnStyle'>下午茶</div>
            <div id='nightBtn' class='btnStyle'>宵夜</div>
          </div>
        </div>
        <!-- 月曆 -->
        <div id="calendarTag"></div>
        <!-- 下方按鈕 -->
        <div id="bottomBtn"></div>
      </div>
      </div>
    <!-- </div>
  </div>
 </div> -->
</template>
<script>
export default {
  data () {
    return {
      show: false,
      active: false
    }
  }
}
</script>

<style lang="scss">@import "../scss/weekProject.scss"; </style>
<style>
/* 畫板展開收合的樣式 */
.ul-box {
  /* height: 300px; */
  overflow: hidden;
}
.ul-enter-active,
.ul-leave-active {
  transition: all 0.5s;
}
.ul-enter,
.ul-leave-to {
  height: 0;
}
</style>
