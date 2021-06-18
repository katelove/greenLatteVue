<template>
 <div class="container">
   <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12 board-style">
      <!-- 工具列 -->
      <div id="tool">
       <!-- 字的大小 -->
        <div class="tool-size" v-on:click="show = !show">
          <h5>字級</h5>
          <h1>A</h1>
        </div>
        <transition name="ul">
          <ul v-if="show" class="ul-box">
            <li><h2 @click="wordH2()">A</h2></li>
            <li><h4 @click="wordH4()">A</h4></li>
            <li><h6 @click="wordH6()">A</h6></li>
          </ul>
        </transition>
       <!-- 字的顏色 -->
        <div class="tool-size" v-on:click="active = ! active">
          <h5>字的顏色</h5>
          <div><font-awesome-icon icon="palette"/></div>
        </div>
        <transition name="ul">
          <ul v-if="active" class="ul-box">
            <li><div @click="redColor()" class="t-c-red"></div></li>
            <li><div @click="blueColor()" class="t-c-blue"></div></li>
            <li><div @click="greenColor()" class="t-c-green"></div></li>
          </ul>
        </transition>
      <!-- 貼圖 -->
          <div class="tool-size" v-on:click="picture = !picture">
            <h5>貼圖</h5>
            <div><font-awesome-icon icon="icons"/></div>
          </div>
          <transition name="ul">
            <ul :style="picture ? '' : 'display:none;'" class="ul-box" id="sitckers">
              <li>
                <img src="../../public/images/pic/crown.png" class="sticker" />
              </li>
              <li>
                <img src="../../public/images/pic/hearts.png"  class="sticker"/>
              </li>
              <li>
                <img src="../../public/images/pic/smile.png" class="sticker"/>
              </li>
              <li>
                <img src="../../public/images/pic/confetti.png" class="sticker"/>
              </li>
            </ul>
          </transition>

          <!-- DIY綠拿鐵 -->
          <div class="tool-size" v-on:click="diyGreen = ! diyGreen">
            <h5>DIY綠拿鐵</h5>
            <div><font-awesome-icon icon="leaf"/></div>
          </div>
          <transition name="ul">
            <ul :style="diyGreen ? '' : 'display:none;'" class="ul-box" id="sitckers">
              <li>
                <img src="../../public/images/pic/dragon-fruit.png" class="sticker" />
              </li>
            </ul>
          </transition>

          <!-- 推薦綠拿鐵 -->
          <div class="tool-size" v-on:click="sugGreen = ! sugGreen">
            <h5>推薦<br />綠拿鐵</h5>
            <div><font-awesome-icon icon="utensils"/></div>
          </div>
          <transition name="ul">
            <ul :style="sugGreen ? '' : 'display:none;'" class="ul-box" id="sitckers">
              <li>
                <h6>火紅綠拿鐵</h6>
                <img src="../../public/images/pic/drink.png" class="sticker"/>
              </li>
              <li>
                <h6>經典綠拿鐵</h6>
                <img src="../../public/images/pic/orange-juice.png" class="sticker" />
              </li>
              <li>
                <h6>清爽綠拿鐵</h6>
                <img src="../../public/images/pic/juice.png" class="sticker" />
              </li>
            </ul>
          </transition>
        <br>
        <div class="tool-try tool-size">
          <h5 v-on:click="glPlan = ! glPlan" >綠拿鐵飲食法</h5>
            <transition name="ul">
              <ul :style="glPlan ? '' : 'display:none;'" class="ul-box" id="sitckers">
                <li><h5 @click="showModal">說明</h5></li>
                <li><img src="../../public/images/pic/dragon-fruit.png" class="sticker" /></li>
                <li><img src="../../public/images/pic/fried-rice.png" class="sticker" /></li>
              </ul>
            </transition>
        </div>
      </div>
      <!-- 月曆大小 -->
<div id="calendarsite">
  <!-- 顯示年/月   -->
  <div id="topTitle">
    <h3 class='dateWord'>2021年6月</h3>
      <div class="rightOption">
        <div id='teamTimeBtn' class='btnStyle' @click="delAll">清除</div>
      </div>
  </div>
  <!-- 月曆 -->
  <div id="calendarTag">
   <table>
    <thead>
      <tr class="th-row">
        <!-- item 為list元素，index為索引值, :key="index"該筆資料唯一值 -->
        <th v-for='(item,index) in weekList' :key="index">{{item}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in tableTag" :key="index" class="th-row">
        <th>{{item.th}}</th>
        <TdCell
        v-for="(tdKey,index) in item.td"
        v-bind="tdKey"
        :key="index"
        class="calendersSB"
        @click="tdKey.checked = !tdKey.checked"
        ></TdCell>
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
    <!-- 綠拿鐵公告 -->
    <b-modal ref="my-modal" size="lg" hide-footer="false">
      <div class="d-block text-center">
         <GreenPlan/>
      </div>
    </b-modal>
 </div>
 </div>
</template>
<script>
import Sortable from 'sortablejs'
import GreenPlan from './greenPlan.vue'
import TdCell from './TdCell.vue'
export default {
  data () {
    return {
      // 工具列
      show: false,
      active: false,
      picture: false,
      diyGreen: false,
      sugGreen: false,
      glPlan: false,
      // 表格
      weekList: ['', '一', '二', '三', '四', '五', '六', '日'],
      tdFistList: ['早', '中', '晚', '備註'],
      // 做畫的td
      tableTag: [{ th: '早', td: [] },
        { th: '中', td: [] },
        { th: '晚', td: [] },
        { th: '備註', td: [] }],
      // 字體大小、字體顏色
      styleList: {
        color: '',
        fontSize: '12'
      },
      // 表格裡值
      tdValue: ' '
    }
  },
  mounted () {
    for (var i = 0; i < 4; i++) {
      var tr = this.tableTag[i]
      for (var j = 0; j < 7; j++) {
        var td = {
          text: (i * 7 + j),
          checked: false,
          styleList: {
            color: 'pink',
            fontSize: '50px',
            backgroundColor: 'yellow'
          }
        }
        tr.td.push(td)
      }
    }
    var sitckers = document.getElementById('sitckers')

    /* eslint-disable no-new */
    new Sortable(sitckers, {
      group: {
        name: 'shared',
        pull: 'clone'
      },
      animation: 150
    })

    var calenders = document.getElementsByClassName('calendersSB')
    calenders.forEach((el) => {
      new Sortable(el, {
        group: 'shared',
        animation: 150

      })
    })
  },
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    redColor ($event) {
      this.styleList.color = 'red'
      console.log('this.styleList.color:' + this.styleList.color)
      var tr = this.tableTag
      for (var y = 0; y < tr.length; y++) {
        console.log('tr 長度:' + tr.length)
        var td = this.tableTag[y].td
        for (var x = 0; x < td.length; x++) {
          console.log('確認td checked:' + td[x].checked)
          if (td[x].checked === true) {
            td[x].styleList.color = 'red'
          }
        }
      }
    },
    blueColor () {
      this.styleList.color = 'blue'
    },
    greenColor () {
      this.styleList.color = 'green'
    },
    wordH2 () {
      this.styleList.fontSize = '24px'
    },
    wordH4 () {
      this.styleList.fontSize = '16px'
    },
    wordH6 () {
      this.styleList.fontSize = '12px'
    },
    // handleInput ($event) {
    //   this.tdValue = $event.target.innerText
    //   console.log('this.tdValue:' + this.tdValue)
    // },
    delAll () {
      console.log('進入清除動作')
      // var tdName = document.getElementById('tdName')
      // tdName.innerHTML = ' '
      // console.log('td:' + tdName)

      for (var j = 0; j <= this.tdFistList.length; j++) {
        for (var i = 1; i <= this.weekList.length; i++) {
          console.log('表格:' + this.tdValue[i])
          this.tdValue = ' '
          // this.tdValue.slice(0, this.weekList.length, ' ')
          // eachValue.slice(0, this.weekList.length - 1)
          console.log('全部清空')
        }
      }
    }
  },
  components: {
    GreenPlan,
    TdCell
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

/* 移動圖片到td格裡 */
.calendersSB li img{
  width: 50px;
}
.calendersSB img{
   width: 50px;
}

</style>
