<template>
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
</template>
<script>
export default {
  data () {
    return {
      display: 'none',
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
    meatAnswer: function () {
      this.display = 'block'
    }
  }
}
</script>
