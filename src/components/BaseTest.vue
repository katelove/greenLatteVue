<template>
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 chk_base">
      <div class=" front">
        <ValidationObserver  ref="baseForm">
        <!-- 表單送出改為使用 form submit 的方法 -->
        <form @submit.prevent="baseAnswer()">
        <h2>基本測量</h2>
          <div class="base_one">
            <h4>1. 請輸入身高/體重</h4>
            <div class="heightW">
              <label for="heigh">身高: </label>
               <ValidationProvider name="身高" rules="required|heigh" v-slot="{errors, classes }">
               <input type="text" :class="classes" name="heigh" id="heigh" v-model.number="heigh" placeholder="請輸入身高"/>公分
               <span style="color:red">{{errors[0]}}</span>
               </ValidationProvider>
            </div>
            <div class="weightW">
              <label for="weightV">體重: </label>
              <ValidationProvider name="體重" rules="required|weightV" v-slot="{errors,classes}">
               <input type="text" :class="classes" name="weightV" id="weightV" v-model.number="weightV" placeholder="請輸入體重"/>公斤
               <span style="color:red">{{errors[0]}}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="base_two">
            <h4>2. 請輸入性別/年齡/體脂數(%)</h4>
              <div class="inlineSty">
                <label for="genderOptions"> 性別:  </label>
                <ValidationProvider name="性別" rules="required|genderOptions" v-slot="{errors}">
                <b-form-radio-group
                  id="radio-group-1"
                  v-model="selectedGender"
                  :options="options"
                  name="genderOptions">
                <span style="color:red">{{errors[0]}}</span>
                </b-form-radio-group>
                </ValidationProvider>
              </div>

              <!-- </b-form-group> -->
            <div class="inlineSty">
              <label for="ageFat">年齡: </label>
                <ValidationProvider name="年齡" rules="required|ageFat" v-slot="{errors, classes }">
                  <input type="text" :class="classes" name="ageFat" id="ageFat" v-model.number="ageFat" placeholder="請輸入年齡"> 歲
                  <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
            </div>
            <div class="inlineSty">
              <label for="bodyFat">體脂數: </label>
                <ValidationProvider name="體脂數" rules="required|bodyFat" v-slot="{errors, classes }">
                  <input type="text" :class="classes" name="bodyFat" id="bodyFat" v-model.number="bodyFat" placeholder="請輸入脂數"> %
                  <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
            </div>
          </div>
          <div class="base_third">
            <h4>3. 請輸入總膽固醇脂數(TC)</h4>
            <div class="inlineSty">
              <label for="choleValue">膽固醇脂數: </label>
                <ValidationProvider name="膽固醇脂數" rules="required|choleValue" v-slot="{errors, classes }">
                  <input type="text" :class="classes" name="choleValue" id="choleValue" v-model.number="choleValue" placeholder="請輸入脂數"> mg/dl
                  <span style="color:red">{{errors[0]}}</span>
                </ValidationProvider>
            </div>
          </div>
          <button type="submit" class="baseBtn" value="送出">
            <p>送出</p>
          </button>
           </form>
          </ValidationObserver>
        </div>
        <!-- 基本測量回答 -->
        <div v-show="display=='block'?true:false" class="back">
          <div class="bodyAswer">
            <div><font-awesome-icon icon="child"/></div>
            <div class="base_one">
              <h4>1. 計算身體質量指數 </h4>
              <h6>BMI計算方式=>你的體重:{{weightV}} / 你的身高:{{heigh/100}}**2</h6>
              <h5>你的BMI值: <b>{{bmiValue()}}</b></h5>
              <h5>肥胖指數: <b>{{fatValue()}}</b></h5>
            </div>
            <div class="base_two">
              <h4>2. 體脂肪表準表</h4>
              <h6>你是: <b>{{selectedGender}}</b></h6>
              <h6>你的年齡:<b>{{ageFat}}</b>歲</h6>
              <h5>你的體脂為<b>{{bodyfatNum()}}</b></h5>
            </div>
            <div class="base_third">
              <h4>3. 膽固醇健康指數</h4>
              <h5>你的總膽固醇 <b>{{choleNum()}}</b></h5>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      // 基本測量
      heigh: '',
      weightV: '',
      selectedGender: null,
      options: [
        { text: '男生', value: '男生' },
        { text: '女生', value: '女生' }
      ],
      ageFat: '',
      bodyFat: '',
      choleValue: '',
      display: 'none'
    }
  },
  methods: {
    // 計算BMI
    bmiValue: function () {
      // 身高cm 轉成公尺-四捨五入
      const heightMeter = this.heigh / 100
      const BMI = Math.floor(this.weightV / Math.pow(heightMeter, 2) * 100) / 100
      if (this.heigh === '' && this.weightV === '') {
        return ''
      } else {
        return BMI
      }
    },
    fatValue: function () {
      if (typeof this.bmiValue() === 'string') {
        return ''
      } else if (this.bmiValue() < 18.5) {
        return '體重過輕'
      } else if (this.bmiValue() >= 18.5 && this.bmiValue() < 24) {
        return '標準體重'
      } else if (this.bmiValue() >= 24) {
        if (this.bmiValue() >= 24 && this.bmiValue() < 27) {
          return '過重'
        } else if (this.bmiValue() >= 27 && this.bmiValue() < 30) {
          return '輕度肥胖'
        } else if (this.bmiValue() >= 30 && this.bmiValue() < 35) {
          return '中度肥胖'
        } else {
          return '重度肥胖'
        }
      }
    },
    bodyfatNum: function () {
      if (this.selectedGender === '男生') {
        if (this.ageFat <= 30 && this.ageFat > 18) {
          // 18~30
          if (this.bodyFat >= 14 && this.bodyFat <= 20) {
            return '理想'
          } else if (this.bodyFat > 25) {
            return '肥胖'
          }
        } else if (this.ageFat > 30 && this.ageFat <= 69) {
          // 30~69
          if (this.bodyFat >= 17 && this.bodyFat <= 23) {
            return '理想'
          } else if (this.bodyFat > 25) {
            return '肥胖'
          }
        }
      } else {
        // 體脂數女生
        if (this.ageFat <= 30 && this.ageFat > 18) {
          // 18~30
          if (this.bodyFat >= 17 && this.bodyFat <= 24) {
            return '理想'
          } else if (this.bodyFat > 30) {
            return '肥胖'
          }
        } else if (this.ageFat > 30 && this.ageFat <= 69) {
          // 30~69
          if (this.bodyFat >= 20 && this.bodyFat <= 27) {
            return '理想'
          } else if (this.bodyFat > 30) {
            return '肥胖'
          }
        }
      }
    },
    choleNum: function () {
      // 膽固醇
      if (typeof this.choleValue === 'string') {
        return ''
      } else if (this.choleValue < 200) {
        return '正常值'
      } else if (this.choleValue >= 200 && this.choleValue <= 239) {
        return '警戒值'
      } else {
        return '危險值'
      }
    },
    async baseAnswer () {
      // 基本測量
      // 欄位檢核,async: 非同步,await: 等待
      // success=true  校驗成功    success=false  校驗失敗
      const success = await this.$refs.baseForm.validate()
      if (!success) {
      // 校驗失敗，停止後續程式碼執行
        console.log('驗證失敗' + success)
        return false
      } else {
      // 顯示回答
        console.log('驗證成功' + success)
        // 1)先取caseId
        axios.get('http://localhost:3000/register', {
          params: {
            // eslint-disable-next-line no-undef
            actName: this.$store.getters.getUser.actName
          }
        }).then((response) => {
          axios.post('http://localhost:3000/baseTest', {
            caseId: response.data[0].caseId,
            heigh: this.heigh,
            weight: this.weightV,
            selectedGender: this.selectedGender,
            ageFat: this.ageFat,
            bodyFat: this.bodyFat,
            choleValue: this.choleValue
          }).then((res) => { console.table(res.data) })
            .catch((error) => { console.error(error) })
        }).then((res) => { console.table(res.data) })
          .catch((error) => { console.error(error) })
        this.display = 'block'
      }

      console.log('heigh確認值:' + this.heigh + ' weightV確認值:' + this.weightV + ' selectedGender確認值:' + this.selectedGender +
                  ' ageFat確認值:' + this.ageFat + ' bodyFat確認值:' + this.bodyFat + ' choleValue確認值:' + this.choleValue)
    }
  }

}

</script>
