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
    <BaseTest/>
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
          <div class="baseBtn" value="送出" @click="sitAnswer()">
            <p>送出</p>
          </div>
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
      <div class="baseBtn" value="送出" @click="meatAnswer()">
        <p>送出</p>
      </div>
      </div>
      <!-- 肉食族回答 -->
      <div v-show="display=='block'?true:false" class="back">
        <h3>{{meatGroup()}}</h3>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import '@/utils/validate.js' // 驗證相關
import BaseTest from './BaseTest.vue'
export default {
  data () {
    return {
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
    sitAnswer: function () {
      this.display = 'block'
    },
    meatAnswer: function () {
      this.display = 'block'
    }
  },
  computed: {
    state () {
      return Boolean(this.selectedGender)
    }
  },
  components: {
    BaseTest
  }
}

</script>

<style lang="scss">@import "../scss/healthTest.scss";

</style>
