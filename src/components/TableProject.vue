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
            <li><div @click="yellowColor()" class="t-c-yellow"></div></li>
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
    <h3 class='dateWord'>健康綠生活-綠拿鐵周計劃</h3>
      <div class="rightOption">
        <div id='teamTimeBtn' class='btnStyle' @click="delAll">清除</div>
      </div>
  </div>
  <!-- 月曆 -->
  <div id="calendarTag">
   <table>
    <thead>
      <tr class="title-row">
        <th colspan="8"><h2>{{weekTilte}}</h2></th>
      </tr>
      <tr class="title-row">
        <th v-for='(item,index) in everyWeek' :key="index">{{item}}</th>
      </tr>
      <tr class="week-row">
        <!-- item 為list元素，index為索引值, :key="index"該筆資料唯一值 -->
        <th v-for='(item,index) in weekList' :key="index">{{item}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in tableTag" :key="index" class="th-row">
        <th>{{item.th}}</th>
        <TdCell
        v-for="(tdKey,index) in item.td"
        :tdKey="tdKey"
        :key="index"
        class="calendersSB"
        contenteditable="true"
        v-text="tdValue"
        ></TdCell>
      </tr>
    </tbody>
  </table>
  </div>
      <!-- 下方按鈕 -->
   <div id="bottomBtn">
    <!-- <div id='saveBtn' class='btnStyle'>儲存</div> -->
    <div class='btnStyle' @click="previewBtn()" >預覽</div>
    <div class='btnStyle' @click="pdfBtn()">下載PDF</div>
   </div>
   </div>
  </div>
    <!-- 綠拿鐵公告 -->
    <b-modal ref="my-modal" size="lg" hide-footer="false">
      <div class="d-block text-center">
         <GreenPlan/>
      </div>
    </b-modal>
    <!-- 預覽 -->
    <b-modal ref="preview-modal" size="lg" hide-footer="false">
      <div class="d-block text-center">
         <img v-bind:src="calendarImg" class="planSize" />
      </div>
    </b-modal>
 </div>
 </div>
</template>
<script>
import Sortable from 'sortablejs'
import domtoimage from 'dom-to-image'
import { jsPDF } from 'jspdf'
import GreenPlan from './greenPlan.vue'
import TdCell from './TdCell.vue'
import db from '../data/db.json'
import axios from 'axios'

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
      tdValue: ' ',
      // 日曆完成截圖
      calendarImg: '',
      // db 拿取日期
      datePlan: db.accountDate,
      // 擺放在日曆上的日期，先給第一個[0] 為空值
      everyWeek: [''],
      // 表格開頭
      weekTilte: ''
    }
  },
  mounted () {
    // =================建表格===============
    for (var i = 0; i < 4; i++) {
      var tr = this.tableTag[i]
      for (var j = 0; j < 7; j++) {
        var td = {
          text: (i * 7 + j),
          checked: false,
          styleList: {
            color: '#2f5a28',
            fontSize: '20px'
          }
        }
        tr.td.push(td)
      }
    }

    // ==============get 日期====================
    console.log('this.$store.getters.getUser:' + this.$store.getters.getUser.actName)
    // 1)先取caseId
    axios.get('http://localhost:3000/register', {
      params: {
        // eslint-disable-next-line no-undef
        actName: this.$store.getters.getUser.actName
      }
    }).then((response) => {
    // 2)取ID
      axios.get('http://localhost:3000/accountDate', {
        params: { caseId: response.data[0].caseId }
      }).then((res) => {
        console.log('diy id:' + res.data[0].data)
        var id = response.data[0].id
        axios.get(`http://localhost:3000/accountDate/${id}`)
          .then((diyres) => { this.datePlan = response.data[0].data })
          .catch((error) => { console.error(error) })
      }).catch((res) => { console.error(res) })
    }).catch((error) => { console.error(error) })

    // eslint-disable-next-line no-redeclare
    // 之後改寫，要用caseId取資料
    var startDay = this.datePlan[0].weekDate[0].datePlan.toString()
    console.log('startDay:' + startDay)
    var stYear = startDay.substr(0, 4)
    var stMonth = startDay.substr(4, 2)
    var stDay = startDay.substr(6, 2)
    this.weekTilte = stYear + '年' + stMonth + '月'
    console.log('起始日stYear:' + stYear + ' ,stMonth:' + stMonth + ' ,stDay:' + stDay)

    var endDay = this.datePlan[0].weekDate[1].datePlan.toString()
    console.log('endDay:' + endDay)
    var edMonth = endDay.substr(4, 2)
    var edDay = endDay.substr(6, 2)
    console.log('終止日 endMonth:' + edMonth + ' ,endDay:' + edDay)

    // 1)先判斷起始日月份 30,31
    // eslint-disable-next-line no-unused-vars
    var strNum
    var monthNum = stMonth.substr(1, 1)
    if (monthNum === '1' || monthNum === '3' ||
    monthNum === '5' || monthNum === '7' ||
    monthNum === '8' || monthNum === '10' ||
    monthNum === '12') {
      strNum = 31
    } else if (monthNum === '4' || monthNum === '6' ||
       monthNum === '9' || monthNum === '11') {
      strNum = 30
    } else if (monthNum === '2') {
      strNum = 28
    }

    // 2)起始日最後一天減起始日
    var sevenNum = strNum - stDay + 1
    console.log('離起始日最後一天剩幾天:' + sevenNum)
    if (sevenNum < 7) {
      // 3)確認選的周日期會跨月份
      for (stDay; stDay <= strNum; stDay++) {
      // eslint-disable-next-line no-redeclare
        for (var i = 1; i <= sevenNum; i++) {
          this.everyWeek.push(stMonth + '/' + stDay)
          break
        }
      }
      console.log('起始日最後一天) this.everyWeek:' + this.everyWeek)
      var stWeek = this.everyWeek.length - 1// 陣列起始位置
      // 4)新的月份起始日為1
      stDay = parseInt('01')
      stMonth = parseInt(stMonth) + 1
      console.log('新月)stDay:' + stDay + ' ,stMonth:' + stMonth)
      for (stDay; stDay <= edDay; stDay++) {
        for (var e = stWeek; e <= 7; e++) {
          this.everyWeek.push(stMonth + '/' + stDay)
          break
        }
      }
      console.log('有下個月) this.everyWeek:' + this.everyWeek)
    } else {
      for (stDay; stDay <= edDay; stDay++) {
        // eslint-disable-next-line no-redeclare
        for (var i = 1; i <= 7; i++) {
          this.everyWeek.push(stMonth + '/' + stDay)
          break
        }
      }
    }

    console.log('this.everyWeek:' + this.everyWeek)

    // =============拖曳功能============
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
    redColor () {
      // 搜尋哪個td
      var tr = this.tableTag
      for (var y = 0; y < tr.length; y++) {
        var td = this.tableTag[y].td
        for (var x = 0; x < td.length; x++) {
          if (td[x].checked === true) {
            td[x].styleList.color = 'red'
          }
        }
      }
    },
    blueColor () {
      var tr = this.tableTag
      for (var y = 0; y < tr.length; y++) {
        var td = this.tableTag[y].td
        for (var x = 0; x < td.length; x++) {
          if (td[x].checked === true) {
            td[x].styleList.color = 'blue'
          }
        }
      }
    },
    yellowColor () {
      var tr = this.tableTag
      for (var y = 0; y < tr.length; y++) {
        var td = this.tableTag[y].td
        for (var x = 0; x < td.length; x++) {
          if (td[x].checked === true) {
            td[x].styleList.color = '#e6c820'
          }
        }
      }
    },
    wordH2 () {
      var tr = this.tableTag
      for (var y = 0; y < tr.length; y++) {
        var td = this.tableTag[y].td
        for (var x = 0; x < td.length; x++) {
          if (td[x].checked === true) {
            td[x].styleList.fontSize = '24px'
          }
        }
      }
    },
    wordH4 () {
      var tr = this.tableTag
      for (var y = 0; y < tr.length; y++) {
        var td = this.tableTag[y].td
        for (var x = 0; x < td.length; x++) {
          if (td[x].checked === true) {
            td[x].styleList.fontSize = '16px'
          }
        }
      }
    },
    wordH6 () {
      var tr = this.tableTag
      for (var y = 0; y < tr.length; y++) {
        var td = this.tableTag[y].td
        for (var x = 0; x < td.length; x++) {
          if (td[x].checked === true) {
            td[x].styleList.fontSize = '12px'
          }
        }
      }
    },
    delAll () {
      console.log('進入清除動作')
      var tr = this.tableTag
      for (var y = 0; y < tr.length; y++) {
        var td = this.tableTag[y].td
        for (var x = 0; x < td.length; x++) {
          this.tdValue = ''
          console.log('全部清空')
        }
      }
    },
    previewBtn () {
      // 預覽功能
      // 1.截圖
      const planImg = document.getElementById('calendarTag')
      domtoimage.toPng(planImg)
        .then((dataUrl) => {
          this.calendarImg = dataUrl
          console.log('planImg:' + this.calendarImg)
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
      this.$refs['preview-modal'].show()
    },
    pdfBtn () {
      // 1.截圖
      const planImg = document.getElementById('calendarTag')
      domtoimage.toPng(planImg)
        .then((dataUrl) => {
          this.calendarImg = dataUrl
          console.log('pdfImg:' + this.calendarImg)
          // eslint-disable-next-line new-cap
          var doc = new jsPDF('p', 'px', 'a3')

          var width = doc.internal.pageSize.getWidth()
          var height = doc.internal.pageSize.getHeight()
          doc.addImage(this.calendarImg, 'PNG', 0, 0, width, height - 400)
          doc.save('diyGreenLatte.pdf')
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
    }
  },
  components: {
    GreenPlan,
    TdCell,
    // eslint-disable-next-line vue/no-unused-components
    domtoimage
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
