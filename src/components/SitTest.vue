<template>
    <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 chk_base">
      <div class="front">
        <ValidationObserver  ref="sitForm">
        <form @submit.prevent="sitAnswer()">
          <h2>你是久坐族嗎?</h2>
            <div class="choice_block">
              <h4>1.一天坐在椅子上有多久?</h4>
              <ValidationProvider name="時間" rules="required|sitChairOptions" v-slot="{errors}">
              <b-form-group>
                <b-form-radio-group
               id="radio-group-2"
               v-model="longSitChair"
               :options="sitOptions"
               name="sitChairOptions">
                <p style="color:red">{{errors[0]}}</p>
                </b-form-radio-group>
              </b-form-group>
              </ValidationProvider>
            </div>
            <div class="choice_block">
              <h4>2. 起來上廁所幾次?</h4>
              <ValidationProvider name="次數" rules="required|wcGroupOptions" v-slot="{errors}">
              <b-form-group>
                <b-form-radio-group
               id="radio-group-3"
               v-model="longSitWC"
               :options="wcOptions"
               name="wcGroupOptions">
                <p style="color:red">{{errors[0]}}</p>
                </b-form-radio-group>
              </b-form-group>
              </ValidationProvider>
            </div>
            <div class="choice_block">
              <h4>3. 每次起來走動約幾分鐘?</h4>
              <ValidationProvider name="活動時間" rules="required|walkGroupOptions" v-slot="{errors}">
              <b-form-group>
                <b-form-radio-group
                 id="radio-group-4"
                 v-model="longSitWalk"
                 :options="walkOptions"
                 name="walkGroupOptions">
                <p style="color:red">{{errors[0]}}</p>
                </b-form-radio-group>
              </b-form-group>
               </ValidationProvider>
            </div>
            <button class="baseBtn" value="送出" @click="sitAnswer()">
              <p>送出</p>
            </button>
          </form>
        </ValidationObserver>
      </div>
      <!-- 久坐族回答 -->
      <div v-show="display=='block'?true:false" class="back">
        <div class="bodyAswer">
           <div><font-awesome-icon icon="chair"/></div>
          <h3>{{sitGroup()}}</h3>
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
      ]
    }
  },
  methods: {
    sitGroup: function () {
      if (this.longSitChair === '8小時' || this.longSitChair === '8~12小時') {
        if (this.longSitWC === '2~3次') {
          if (this.longSitWalk === '5~10分鐘') {
            return '你是標準久坐族'
          }
        }
      } else {
        return '恭喜你不是久坐族'
      }
    },
    async sitAnswer () {
      const success = await this.$refs.sitForm.validate()
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
          axios.post('http://localhost:3000/sitTest/', {
            caseId: response.data[0].caseId,
            longSitChair: this.longSitChair,
            longSitWC: this.longSitWC,
            longSitWalk: this.longSitWalk
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
