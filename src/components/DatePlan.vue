/* eslint-disable no-unused-expressions */
<template>
<div class="container">
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12">
      <div class="date-Title">
        <img src="../../public/images/company/leaf.png" />
          <div class="chk_Word">
            <h2>健康綠生活-三餐規劃</h2>
          </div>
        <img src="../../public/images/company/leaf.png" />
      </div>
    </div>
  </div>
  <div class="row">
    <h4>*請選擇需實行計劃，時間最多為一個星期。</h4>
  </div>
  <ValidationObserver  ref="dateForm">
  <form @submit.prevent="dateAnswer()">
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12 dateTime">
      <div class="dateTitle">
        <h4>起始日</h4>
      </div>
      <div class="dateStyle">
      <ValidationProvider name="起始日" rules="required|dateTime" v-slot="{errors}">
        <datepicker
        @input="sevenDays()"
        :bootstrap-styling="true"
        v-model="startDay"
        ></datepicker>
        <p style="color:red">{{errors[0]}}</p>
      </ValidationProvider>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12 dateTime">
      <div class="dateTitle">
        <h4>終止日</h4>
      </div>
      <div class="dateStyle">
        <ValidationProvider name="終止日" rules="required|dateTime" v-slot="{errors}">
         <datepicker
         v-model="endDay"
         :bootstrap-styling="true"
         ></datepicker>
          <p style="color:red">{{errors[0]}}</p>
        </ValidationProvider>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12">
      <div class="workerBtn diyBtn" @click="dateAnswer()">
        <a>下一步</a>
      </div>
    </div>
  </div>
  </form>
  </ValidationObserver>
</div>
</template>
<script>
import Datepicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/zh-cn'
import axios from 'axios'
export default {
  data () {
    return {
      startDay: '',
      endDay: '',
      weekDate: []
    }
  },
  methods: {
    sevenDays () {
      var d = new Date(this.startDay)
      console.log('現在日期:' + d)
      var sevenDate = d.setDate(d.getDate() + 6)
      var dateObj = new Date(sevenDate)
      console.log('終止日:' + dateObj)
      var year = dateObj.getFullYear()
      var month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
      var day = ('0' + dateObj.getDate()).slice(-2)
      console.log('日期為: ' + year + '年' + month + '月' + day + '日')
      this.endDay = new Date(year, month - 1, day)
      console.log('終止日日期為:' + this.endDay)
      return this.endDay
    },
    async dateAnswer () {
      const success = await this.$refs.dateForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      } else {
        // post date ,startDay起始日
        var year = this.startDay.getFullYear()
        var month = ('0' + (this.startDay.getMonth() + 1)).slice(-2)
        var day = ('0' + this.startDay.getDate()).slice(-2)
        this.startDay = year + month + day
        // 終止日
        var eYear = this.endDay.getFullYear()
        var eMonth = ('0' + (this.endDay.getMonth() + 1)).slice(-2)
        var eDay = ('0' + this.endDay.getDate()).slice(-2)
        this.endDay = eYear + eMonth + eDay
        console.log('startDay:' + this.startDay + ',endDay:' + this.endDay)
        var dateDay = [this.startDay, this.endDay]
        for (var i = 0; i < dateDay.length; i++) {
          var datePlan = {
            id: (i + 1),
            datePlan: dateDay[i]
          }
          this.weekDate.push(datePlan)
        }

        // 1)先取caseId
        axios.get('http://localhost:3000/register', {
          params: {
          // eslint-disable-next-line no-undef
            actName: this.$store.state.user[0].actName
          }
        }).then((response) => {
          axios.post('http://localhost:3000/accountDate/', {
            caseId: response.data[0].caseId,
            weekDate: this.weekDate
          }).then((res) => {
            console.table(res.data)
          }).catch((error) => { console.error(error) })
        }).catch((error) => { console.error(error) })

        return true
      }
    }
  },
  components: {
    Datepicker
  }
}
</script>
<style lang="scss">
.date-Title{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
 .chk_Word h2 {
  background-color: #2f5a28;
  color: white;
  padding: 10px 10px;
  display: inline-block;
  }

 .dateTime{
  display: flex;
  justify-content: center;
  margin: 100px 0px;
  //日期
  .dateStyle{
   display: flex;
   justify-content:center;
   align-items: center;
   select{
     width: 180px;
     height: 50px;
     margin: 0px 10px;
     border-radius: 10px;
   }
   h5{
     color: #2f5a28;
   }
   input[type=text]{
     height: 50px;
   }
  }
   //小標
  .dateTitle{
  background-color: #2f5a28;
  color: white;
  border-radius: 20px;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  }
 }

.workerBtn{
  color: white;
}

.diyBtn:hover{
    color: #2f5a28;
  }
</style>
