<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 wordFruit">
        <h6>*下方為已勾選蔬果</h6>
        <div class="actDiyVg">
          <div v-for="(item,index) in userDiyImg.diyVgFruit" :key="index" class="diy-productCard">
            <!-- 資料庫傳回產品卡片 -->
            <img :src="item.vImg">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 diy-glass">
        <!-- muted 控制靜音，loop循環播放 -->
        <video height="400" autoplay  muted="false" loop="true">
          <source src="../../public/video/GreenLatteVideo.mp4" type="video/mp4">
        </video>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 diy-leaf">
        <div class="diy-aboard">
            <div class="diy-name" >
              <img src="../../public/images/pic/dragon-white.png">
              <div class="diy-subject">
                 <h3>命名:</h3>
                 <input type="text" v-model="diyGreenName">
              </div>
            </div>
            <div class="diy-name">
              <h3>材料:</h3>
              <!-- 資料庫顯示資料 -->
              <div v-for="(item,index) in userDiyImg.diyVgFruit" :key="index" class="diy-productCard">
                <h4>{{item.productName}}、</h4>
              </div>
            </div>
            <div class="diySave">
              <div class="diyNameBtn"><button type="submit" @click="saveName()">儲存</button></div>
              <div class="diyNameBtn"><button type="submit" @click="deleteName()">重新命名</button>
              </div>
            </div>
        </div>

      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="workerBtn diyBtn">
           <a href="#sec5">返回</a>
           <a href="#sec8">三餐計畫</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import proInfo from '../data/db.json'
import axios from 'axios'
export default {
  data () {
    return {
      userDiyImg: proInfo.accoutDiyImg,
      diyGreenName: ' ',
      diyProduct: []
    }
  },
  mounted () {
    console.log('this.$store.getters.getUser:' + this.$store.getters.getUser.actName)
    // 1)先取caseId
    axios.get('http://localhost:3000/register', {
      params: {
        // eslint-disable-next-line no-undef
        actName: this.$store.state.user.actName
      }
    }).then((response) => {
    // 2)取ID
      axios.get('http://localhost:3000/accoutDiyImg', {
        params: { caseId: response.data[0].caseId }
      }).then((res) => {
        console.log('diy id:' + res.data[0].data)
        var id = response.data[0].id
        axios.get(`http://localhost:3000/accoutDiyImg/${id}`)
          .then((diyres) => { this.userDiyImg = res.data[0].data })
          .catch((error) => { console.error(error) })
      }).catch((res) => { console.error(res) })
    }).catch((error) => { console.error(error) })
  },
  methods: {
    saveName () {
      for (var i = 0; i < this.userDiyImg.diyVgFruit.length; i++) {
        this.diyProduct.push(this.userDiyImg.diyVgFruit[i].productName)
      }
      console.log('目前diy產品名稱:' + this.diyProduct)

      // 1)先取caseId
      axios.get('http://localhost:3000/register', {
        params: {
          // eslint-disable-next-line no-undef
          actName: this.$store.state.user[0].actName
        }
      }).then((response) => {
        axios.post('http://localhost:3000/diyGreen/', {
          caseId: response.data[0].caseId,
          diyGreenName: this.diyGreenName,
          diyProduct: this.diyProduct
        }).then((res) => {
          console.table(res.data)
        }).catch((error) => { console.error(error) })
      }).catch((error) => { console.error(error) })
    },
    deleteName () {
      // 1)先取caseId
      axios.get('http://localhost:3000/register', {
        params: {
          // eslint-disable-next-line no-undef
          actName: this.$store.state.user[0].actName
        }
      }).then((response) => {
        axios.get('http://localhost:3000/diyGreen', {
          params: {
          // eslint-disable-next-line no-undef
            caseId: response.data[0].caseId
          }
        }).then((response) => {
          var id = response.data[0].id
          console.log('diy id:' + id)
          axios.delete(`http://localhost:3000/diyGreen/${id}`).then((res) => {
            console.table(res.data)
          }).catch((error) => { console.error(error) })
        }).catch((error) => { console.error(error) })
      }).catch((error) => { console.error(error) })
    }
  }
}
</script>
<style lang="scss">@import "../scss/diyGreen.scss";</style>
