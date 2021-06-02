<template>
  <div class="container">
  <!-- 檢視健康 -->
  <div class="row">
    <div class="col-sm-12 -col-md-12 col-lg-12">
      <div class="chk_Title">
        <img src="../../public/images/company/leaf.png" />
          <div class="chk_all">
            <div class="chk_Word">
            <h2>健康綠生活-檢視自己健康</h2>
            </div>
            <div class="chk_article">
              <h4>健康意識抬頭，</h4>
              <p>改善飲食方式，創造健康的人生!</p>
            </div>
          </div>
        <img src="../../public/images/company/leaf.png" />
      </div>
    </div>
  </div>
  <div class="row">
      <!-- 基本測量 問題篇 -->
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 chk_base">
      <div class=" front">
        <h2>基本測量</h2>
          <div class="base_one">
            <h4>1. 請輸入身高/體重</h4>
            <div class="heightW">
              <!-- <validation-provider name="身高" rules="required|heigh" v-slot="{errors}"> -->
                <label for="heighV">身高: </label>
               <input v-validate="'required|heighV'" type="text" name="heighV" id="heighV" v-model.number="heighV" placeholder="請輸入身高"/>公分
               <span  v-show="errors.has('heighV')" style="color:red"> {{ errors.first('heighV') }} </span>
               <!-- <span>{{errors[0]}}</span> -->
              <!-- </validation-provider> -->
            </div>
            <div class="weightW">
              體重: <input type="text" name="weightV" id="weightV" required v-model.number="weightV"/>公斤
            </div>
          </div>
          <div class="base_two">
            <h4>2. 請輸入性別/年齡/體脂數(%)</h4>
              <b-form-group>
                <b-form-radio-group
                  id="radio-group-1"
                  v-model="selectedGender"
                  :options="options"
                  name="radio-options" required
                ></b-form-radio-group>
              </b-form-group>
            <input type="text" name="ageFat" id="ageFat" v-model.number="ageFat" required> 歲
            <input type="text" name="bodyFat" id="bodyFat" v-model.number="bodyFat" required> %
          </div>
          <div class="base_third">
            <h4>3. 請輸入總膽固醇脂數(TC)</h4>
            <input type="text" name="choleValue" id="choleValue" v-model.number="choleValue" required> mg/dl
          </div>
          <button class="baseBtn" value="送出" @click="baseAnswer()">
            <p>送出</p>
          </button>
        </div>
        <!-- 基本測量回答 -->
        <div v-show="display=='block'?true:false" class="back">
            <div class="base_one">
              <h4>1. 計算身體質量指數 </h4>
              <h6>BMI計算方式=>你的體重:{{weightV}} / 你的身高:{{heighV/100}}**2</h6>
              <h5>你的BMI值: <b>{{bmiValue()}}</b></h5>
              <h5>肥胖指數: <b>{{fatValue()}}</b></h5>
            </div>
            <div class="base_two">
              <h4>2. 男女體脂肪表準表</h4>
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
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 chk_base">
      <div class="front">
          <h2>你是久坐族嗎?</h2>
          <div class="choice_block">
            <h4>1.一天坐在椅子上有多久?</h4>
            <b-form-group>
            <b-form-radio-group
             id="radio-group-2"
             v-model="longSitChair"
             :options="sitOptions"
             name="radio-options-2" required
             ></b-form-radio-group>
            </b-form-group>
          </div>
          <div class="choice_block">
            <h4>2. 起來上廁所幾次?</h4>
            <b-form-group>
            <b-form-radio-group
             id="radio-group-3"
             v-model="longSitWC"
             :options="wcOptions"
             name="radio-options-3" required
             ></b-form-radio-group>
            </b-form-group>
          </div>
          <div class="choice_block">
            <h4>3. 每次起來走動約幾分鐘?</h4>
              <b-form-group>
              <b-form-radio-group
              id="radio-group-4"
              v-model="longSitWalk"
              :options="walkOptions"
              name="radio-options-4" required
              ></b-form-radio-group>
            </b-form-group>
          </div>
          <button class="baseBtn" value="送出" @click="sitAnswer()">
            <p>送出</p>
          </button>
      </div>
      <!-- 久坐族回答 -->
      <div v-show="display=='block'?true:false" class="back">
      <h3>{{sitGroup()}}</h3>
      </div>
    </div>
    <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 chk_base">
      <div class="front">
      <h2>你是肉食族嗎?</h2>
        <div class="choice_block">
          <h4>1. 三餐菜色為何?</h4>
          <b-form-group>
          <b-form-radio-group
          id="radio-group-5"
          v-model="meatThreeMeals"
          :options="mealsOptions"
          name="radio-options-5" required
          ></b-form-radio-group>
          </b-form-group>
        </div>
        <div class="choice_block">
          <h4>2. 每餐蔬菜量多少?</h4>
          <b-form-group>
          <b-form-radio-group
          id="radio-group-6"
          v-model="vgPlate"
          :options="vgPlateOptions"
          name="radio-options-6" required
          ></b-form-radio-group>
          </b-form-group>
        </div>
        <div class="choice_block">
          <h4>3. 每餐肉量多少?</h4>
          <b-form-group>
          <b-form-radio-group
          id="radio-group-7"
          v-model="meatPlate"
          :options="PlateOptions"
          name="radio-options-7" required
          ></b-form-radio-group>
          </b-form-group>
        </div>
      <button class="baseBtn" value="送出" @click="meatAnswer()">
        <p>送出</p>
      </button>
      </div>
      <!-- 肉食族回答 -->
      <div v-show="display=='block'?true:false" class="back">
        <h3>{{meatGroup()}}</h3>
      </div>
    </div>
  </div>
  </div>
</template>

<script >
export default {
  data () {
    return {
      // 基本測量
      heighV: '',
      heighError: false,
      heighErrMsg: '',
      weightV: '',
      selectedGender: '',
      options: [
        { text: '男生', value: '男生' },
        { text: '女生', value: '女生' }
      ],
      ageFat: '',
      bodyFat: '',
      choleValue: '',
      display: 'none',
      // 久坐族
      longSitChair: '',
      sitOptions: [
        { text: '4~6小時', value: '4~6小時' },
        { text: '8小時', value: '8小時' },
        { text: '8~12小時', value: '8~12小時' }
      ],
      longSitWC: '',
      wcOptions: [
        { text: '2~3次', value: '2~3次' },
        { text: '3~5次', value: '3~5次' },
        { text: '5~10次', value: '5~10次' }
      ],
      longSitWalk: '',
      walkOptions: [
        { text: '5~10分鐘', value: '5~10分鐘' },
        { text: '10~30分鐘', value: '10~30分鐘' },
        { text: '1小時', value: '1小時' }
      ],
      meatThreeMeals: '',
      mealsOptions: [
        { text: '蔬菜多，少肉', value: '蔬菜多，少肉' },
        { text: '蔬菜少，多肉', value: '蔬菜少，多肉' }
      ],
      vgPlate: '',
      vgPlateOptions: [
        { text: '幾片葉子', value: '幾片葉子' },
        { text: '少量', value: '少量' },
        { text: '一大盤', value: '一大盤' }
      ],
      meatPlate: '',
      PlateOptions: [
        { text: '無肉', value: '無肉' },
        { text: '少量', value: '少量' },
        { text: '一大盤', value: '一大盤' }
      ]

    }
  },
  methods: {
    // 計算BMI
    bmiValue: function () {
      // 身高cm 轉成公尺-四捨五入
      const heightMeter = this.heighV / 100
      const BMI = Math.floor(this.weightV / Math.pow(heightMeter, 2) * 100) / 100
      if (this.heighV === '' && this.weightV === '') {
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
        // 女生
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
    sitGroup: function () {
      if (this.sitOptions === '8小時' || this.sitOptions === '8~12小時') {
        if (this.wcOptions === '2~3次') {
          if (this.walkOptions === '5~10分鐘') {
            return '你是標準坐久族'
          }
        }
      } else {
        return '恭喜你不是坐久族'
      }
    },
    meatGroup: function () {
      if (this.mealsOptions === '蔬菜少，多肉') {
        if (this.vgPlateOptions === '幾片葉子' || this.vgPlateOptions === '少量') {
          if (this.PlateOptions === '一大盤') {
            return '你是標準肉食族'
          }
        }
      // } else if (this.mealsOptions === '' &&
      //         this.vgPlateOptions === '' &&
      //         this.PlateOptions === ' ') {
      //   return '尚未填寫'
      } else {
        return '恭喜你不是肉食族'
      }
    },
    baseAnswer: function () {
      // 基本測量回答
      // 欄位檢核
      this.display = 'block'
    },
    sitAnswer: function () {
      this.display = 'block'
    },
    meatAnswer: function () {
      this.display = 'block'
    }
  }
}

</script>

<style lang="scss">@import "../scss/healthTest.scss"; </style>
