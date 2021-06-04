<template>
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
</template>

<script>
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
    sitAnswer: function () {
      this.display = 'block'
    }
  }
}
</script>
