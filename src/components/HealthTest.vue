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
          <!-- 檢視健康 問題篇 -->
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 chk_base front">
            <h2>基本測量</h2>
            <form class="inner">
              <div class="base_one">
                  <h4>1. 請輸入身高/體重</h4>
                <div class="heightW">
                  身高: <input type="text" name="heighV" id="heighV" required v-model.number="heighV"/>公分
                  <span>請輸入2~3個數字</span>
                </div>
                <div class="weightW">
                  體重: <input type="text" name="weightV" id="weightV" required v-model.number="weightV"/>公斤
                  <span>請輸入2~3個數字</span>
                </div>
              </div>
              <div class="base_two">
                <h4>2. 請輸入體脂數(%)</h4>
                <input type="text" name="bodyFat" id="bodyFat" required> %
                <span>請輸入2~3個數字</span>
              </div>
              <div class="base_third">
                <h4>3. 請輸入膽固醇脂數(%)</h4>
                <input type="text" name="choleValue" id="choleValue" required> %
                <span>請輸入2~3個數字</span>
              </div>
              <div class="baseBtn">
                <a href="">送出</a>
              </div>
            </form>
          </div>
          <!-- 基本測量回答 -->
          <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 chk_base back">
            <div class="inner">
               <div class="base_one">
                 <h4>1. 計算身體質量指數 </h4>
                 <h6>你的體重:{{weightV}} / 你的身高:{{heighV/100}}**2</h6>
                 <h5>你的BMI值: <b>{{bmiValue()}}</b></h5>
                 <h5>肥胖指數: <b>{{fatValue()}}</b></h5>
              </div>
            <div class="base_two"></div>
            <div class="base_third"></div>
            </div>
          </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 chk_base">
              <h2>你是久坐族嗎?</h2>
              <div class="choice_block">
                <h4>1.一天坐在椅子上有多久?</h4>
                <div class="choice_detail">
                  <input type="radio" />4~6小時 <input type="radio" />8小時
                  <input type="radio" />8~12小時
                </div>
              </div>
              <div class="choice_block">
                <h4>2. 起來上廁所幾次?</h4>
                <div class="choice_detail">
                  <input type="radio" />2~3次 <input type="radio" />3~5次
                  <input type="radio" />5~10次
                </div>
              </div>

              <div class="choice_block">
                <h4>3. 每次起來走動約幾分鐘?</h4>
                <div class="choice_detail">
                  <input type="radio" />5~10分鐘 <input type="radio" />10~30分鐘
                  <input type="radio" />1小時
                </div>
              </div>
              <div class="baseBtn">
                <a href="">送出</a>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 chk_base">
              <h2>你是肉食族嗎?</h2>
              <div class="choice_block">
                <h4>1. 三餐菜色為何?</h4>
                <div class="choice_detail">
                  <input type="radio" />蔬菜多，少肉
                  <input type="radio" />蔬菜少，多肉
                </div>
              </div>
              <div class="choice_block">
                <h4>2. 每餐蔬菜量多少?</h4>
                <div class="choice_detail">
                  <input type="radio" />幾片葉子 <input type="radio" />少量
                  <input type="radio" />一大盤
                </div>
              </div>
              <div class="choice_block">
                <h4>3. 每餐肉量多少?</h4>
                <div class="choice_detail">
                  <input type="radio" />無肉 <input type="radio" />少量
                  <input type="radio" />一大盤
                </div>
              </div>

              <div class="baseBtn">
                <a href="">送出</a>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      heighV: '',
      weightV: ''
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
      console.log('BMI值:' + this.bmiValue() + 'typeof:' + typeof this.bmiValue())
      if (isNaN(this.bmiValue()) || typeof this.bmiValue() === 'string') {
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
    }
  }
}
</script>

<style lang="scss">
/* #sec3================================= */
.chk_Title {
  display: flex;
  align-items: center;
  img:last-of-type {
  transform: scaleX(-1);
  }
}

@media (max-width: 992px) {
  .chk_Title {
    margin-top: 20px;
    display: flex;
    justify-content: center;
img {
  display: none;
}
  }
}
.chk_all {
  display: inline-block;
  .chk_Word h2 {
  background-color: #2f5a28;
  color: white;
  padding: 10px 10px;
  display: inline-block;
  }
  .chk_article h4,p {
  color: #2f5a28;
  display: inline-block;
  }
}

/* 基本測量 */
.chk_quest {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
}

/* 久坐族 */

.chk_base {
  border: solid 3px;
  border-radius: 20px;
  margin: 5px;
  height: 600px;
  padding: 20px 10px 0 10px;
  display: inline-block;
  h2 {
  color: #2f5a28;
  text-align: center;
  padding-bottom: 20px;
  }
  .base_one input,
 .base_two input,
 .base_third input {
  border: solid 1px #2f5a28;
  border-radius: 10px;
  width: 100px;
  height: 30px;
 }
}

.heightW,
.weightW {
  padding-left: 20px;
  padding-top: 5px;
}

.base_one,
.base_two,
.base_third {
  padding-bottom: 30px;
  padding-left: 10px;
}

.base_two input,
.base_third input {
  margin-left: 60px;
}
.choice_block {
  padding-bottom: 30px;
  padding-left: 10px;
}
.choice_detail {
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

/* 檢視健康-送出按鈕 */

.baseBtn {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.baseBtn a {
  background-color: #2f5a28;
  text-align: center;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  width: 100px;
  padding: 10px 20px;
  height: 50px;
  font-size: 1em;
}

</style>
