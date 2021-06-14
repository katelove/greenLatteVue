<template>
<div class="container">
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12">
      <div class="chk_Title">
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
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12 dateTime">
      <div class="dateTitle">
        <h4>起始日</h4>
      </div>
      <div class="dateStyle">
        <datepicker
        @input="sevenDays()"
        :bootstrap-styling="true"
        v-model="startDay"
        ></datepicker>
        <!-- <select name="" id=""></select><h5>年</h5>
        <select name="" id=""></select><h5>月</h5>
        <select name="" id=""></select><h5>日</h5> -->
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12 dateTime">
      <div class="dateTitle">
        <h4>終止日</h4>
      </div>
      <div class="dateStyle">
         <datepicker
         v-model="endDay"
         :bootstrap-styling="true"
         ></datepicker>
        <!-- <select name="" id=""></select><h5>年</h5>
        <select name="" id=""></select><h5>月</h5>
        <select name="" id=""></select><h5>日</h5> -->
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12">
      <div class="workerBtn">
        <a>下一步</a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
export default {
  data () {
    return {
      startDay: '',
      endDay: ''
    }
  },
  methods: {
    sevenDays () {
      var d = new Date(this.startDay)
      console.log('現在日期:' + d)
      var sevenDate = d.setDate(d.getDate() + 7)
      var dateObj = new Date(sevenDate)
      console.log('終止日:' + dateObj)
      var year = dateObj.getFullYear()
      var month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
      var day = ('0' + dateObj.getDate()).slice(-2)
      console.log('日期為: ' + year + '年' + month + '月' + day + '日')
      this.endDay = new Date(year, month - 1, day)
      console.log('終止日日期為:' + this.endDay)
      return this.endDay
    }
  },
  components: {
    Datepicker
  }
}
</script>
<style lang="scss">
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
</style>
