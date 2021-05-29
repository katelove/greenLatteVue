<template>
 <div class="container">
   <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12 board-style">
      <!-- 工具列 -->
      <div id="tool">
       <!-- 字的大小 -->
        <div v-on:click="show = !show">
          <h5>字級</h5>
          <h1>A</h1>
        </div>
        <transition name="ul">
          <ul v-if="show" class="ul-box">
            <li><h2>A</h2></li>
            <li><h4>A</h4></li>
            <li><h6>A</h6></li>
          </ul>
        </transition>
       <!-- 字的顏色 -->
        <div v-on:click="active = ! active">
          <h5>字的顏色</h5>
          <div class="tool-color"></div>
        </div>
        <transition name="ul">
          <ul v-if="active" class="ul-box">
            <li><div class="t-c-red"></div></li>
            <li><div class="t-c-blue"></div></li>
            <li><div class="t-c-green"></div></li>
          </ul>
        </transition>
      <!-- 貼圖 -->
          <div v-on:click="picture = ! picture">
            <h5>貼圖</h5>
            <div><img src="../../public/images/pic/crown.png" alt="" /></div>
          </div>
          <transition name="ul">
            <ul v-if="picture" class="ul-box">
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
          </transition>

          <!-- DIY綠拿鐵 -->
          <div v-on:click="diyGreen = ! diyGreen">
            <h5>DIY綠拿鐵</h5>
            <div><img src="../../public/images/pic/dragon-fruit.png" alt="" /></div>
          </div>
          <transition name="ul">
            <ul v-if="diyGreen" class="ul-box">
              <li><img src="../../public/images/pic/dragon-fruit.png" alt="" /></li>
              <li></li>
            </ul>
          </transition>
          <!-- 健康餐 -->
          <div v-on:click="healthMeal = ! healthMeal">
            <h4>健康餐</h4>
            <div><img src="../../public/images/pic/fried-rice.png" alt="" /></div>
          </div>
          <transition name="ul">
            <ul v-if="healthMeal" class="ul-box">
              <li><img src="../../public/images/pic/fried-rice.png" alt="" /></li>
            </ul>
          </transition>

          <!-- 推薦綠拿鐵 -->
          <div v-on:click="sugGreen = ! sugGreen">
            <h5>推薦<br />綠拿鐵</h5>
          </div>
          <transition name="ul">
            <ul v-if="sugGreen" class="ul-box">
              <li>
                <h6>火紅綠拿鐵</h6>
                <img src="../../public/images/pic/drink.png" alt="" />
              </li>
              <li>
                <h6>經典綠拿鐵</h6>
                <img src="../../public/images/pic/orange-juice.png" alt="" />
              </li>
              <li>
                <h6>清爽綠拿鐵</h6>
                <img src="../../public/images/pic/juice.png" alt="" />
              </li>
            </ul>
          </transition>

          <div class="tool-try">
            <h5>漸進式</h5>
            <h5>體驗式</h5>
            <h5>全面式</h5>
          </div>
      </div>
      <!-- 月曆大小 -->
<div id="calendarsite">
  <!-- 顯示年/月   -->
  <div id="topTitle">
    <h3 class='dateWord'>2021年6月</h3>
      <div class="rightOption">
        <div id='teamTimeBtn' class='btnStyle'>下午茶</div>
        <div id='nightBtn' class='btnStyle'>宵夜</div>
      </div>
  </div>
  <!-- 月曆 -->
  <div id="calendarTag">
   <table>
    <thead>
      <tr class="th-row">
        <th></th>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
        <th>日</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>早</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>中</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>晚</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>備註</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  </div>
      <!-- 下方按鈕 -->
   <div id="bottomBtn">
    <div id='saveBtn' class='btnStyle'>儲存</div>
    <div id='previewBtn' class='btnStyle'>預覽</div>
    <div id='downloadBtn' class='btnStyle'>下載PDF</div>
   </div>
   </div>
  </div>

 </div>
 </div>
</template>
<script>

export default {
  data () {
    return {
      show: false,
      active: false,
      picture: false,
      diyGreen: false,
      healthMeal: false,
      sugGreen: false
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
