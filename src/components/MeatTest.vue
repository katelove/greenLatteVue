<template>
  <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 chk_base">
    <div class="front">
      <ValidationObserver  ref="meatForm">
      <form @submit.prevent="meatAnswer()">
      <h2>你是肉食族嗎?</h2>
        <div class="choice_block">
          <h4>1. 三餐菜色為何?</h4>
          <ValidationProvider name="菜色" rules="required|meatGroupOptions" v-slot="{errors}">
          <b-form-group>
          <b-form-radio-group
          id="radio-group-5"
          v-model="meatThreeMeals"
          :options="mealsOptions"
          name="meatGroupOptions" >
          <p style="color:red">{{errors[0]}}</p>
          </b-form-radio-group>
          </b-form-group>
          </ValidationProvider>
        </div>
        <div class="choice_block">
          <h4>2. 每餐蔬菜量多少?</h4>
          <ValidationProvider name="蔬菜量" rules="required|vgGroupOptions" v-slot="{errors}">
          <b-form-group>
          <b-form-radio-group
          id="radio-group-6"
          v-model="vgPlate"
          :options="vgPlateOptions"
          name="vgGroupOptions" >
          <p style="color:red">{{errors[0]}}</p>
          </b-form-radio-group>
          </b-form-group>
          </ValidationProvider>
        </div>
        <div class="choice_block">
          <h4>3. 每餐肉量多少?</h4>
          <ValidationProvider name="肉量" rules="required|maPlatGroup" v-slot="{errors}">
          <b-form-group>
          <b-form-radio-group
          id="radio-group-7"
          v-model="meatPlate"
          :options="PlateOptions"
          name="maPlatGroup">
          <p style="color:red">{{errors[0]}}</p>
          </b-form-radio-group>
          </b-form-group>
          </ValidationProvider>
        </div>
      <button class="baseBtn" value="送出" @click="meatAnswer()">
        <p>送出</p>
      </button>
      </form>
      </ValidationObserver>
      </div>
      <!-- 肉食族回答 -->
      <div v-show="display=='block'?true:false" class="back">
        <div class="bodyAswer">
          <div><font-awesome-icon icon="drumstick-bite"/></div>
          <h3>{{meatGroup()}}</h3>
        </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'
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
      console.log('this.meatThreeMeals:' + this.meatThreeMeals + 'this.vgPlate:' + this.vgPlate +
                  'this.PlateOptions:' + this.meatPlate)
      if (this.meatThreeMeals === '蔬菜少，多肉') {
        if (this.vgPlate === '幾片葉子' || this.vgPlate === '少量') {
          if (this.meatPlate === '一大盤') {
            return '你是標準肉食族'
          }
        }
      } else {
        return '恭喜你不是肉食族'
      }
    },
    async meatAnswer () {
      const success = await this.$refs.meatForm.validate()
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
          axios.post('http://localhost:3000/meatTest/', {
            caseId: response.data[0].caseId,
            meatThreeMeals: this.meatThreeMeals,
            vgPlate: this.vgPlate,
            meatPlate: this.meatPlate
          }).then((res) => {
            console.table(res.data)
          }).catch((error) => { console.error(error) })
        }).catch((error) => { console.error(error) })
        this.display = 'block'
      }
    }
  }
}
</script>
