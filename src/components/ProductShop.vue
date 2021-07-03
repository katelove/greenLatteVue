/* eslint-disable vue/no-parsing-error */
<template>
<div class="container">
  <!-- 標題 -->
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 titleWord">
      <h1>請選購 DIY 綠拿鐵蔬果產品</h1>
    </div>
  </div>
  <!-- 產品列表 -->
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <div class="proTitle">
        <div class="productList">
          <select v-model="input.type">
            <option>全部</option>
            <option>蔬菜類</option>
            <option>水果類</option>
          </select>
          <input type="text"
          v-model.trim="input.title"
          @keyup.enter="inputHandler"
          >
        </div>
      </div>
    </div>
  </div>
  <!-- 產品卡 -->
  <div class="row">
    <div v-for="(item,index) in titleMenu" :key="index">
      <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4 items">
        <div class="imgShopping">
          <img :src="item.vImg">
          <div class="itemInfo"><h4>{{item.category}}:</h4><h5>{{item.productName}}</h5></div>
          <div class="shoppingItems">
            <h4 @click='addDIY(index)'>Add to DIY</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- DIY 購物籃 -->
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 shopItems">
        <marquee><h6>*請把蔬果選入DIY 購物籃，記得<b>蔬果比例=> 蔬菜 2:水果 1 </b></h6></marquee>
        <div class="diyBgc">
          <div v-for="(item,index) in cart" :key="index" class="diyImg">
            <img :src="item" @click="deletePic(index)" :value="checkCart">
          </div>
          <input type="submit" method="post" value="DIY" @click="diyGreen">
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
      proImg: proInfo.proImg,
      cart: [],
      productCart: [],
      input: {
        type: '全部',
        title: ''
      },
      accoutDiyImg: { diyVgFruit: [] }
    }
  },
  mounted () {
    axios.get('http://localhost:3000/proImg')
      .then(response => {
        this.proImg = response.data
      })
  },
  methods: {
    addDIY (index) {
      var choiceImg = this.proImg[index].vImg
      var choiceProName = this.proImg[index].productName
      console.log('目前圖片:' + choiceImg + ',目前產品名稱:' + choiceProName)
      this.cart.push(choiceImg)
      console.log('this.cart:' + this.cart)
      this.productCart.push(choiceProName)
      console.log('this.productCart:' + this.productCart)
    },
    deletePic (index) {
      console.log('刪除車子第幾張圖片:' + index)
      // splice，索引位置index開始，刪除1個元素
      this.cart.splice(index, 1)
      console.log('刪除過後 Cart:' + this.cart[index])
    },
    diyGreen () {
      if (this.cart.length < '3') {
        alert('購物籃需挑選3種蔬果，歡迎選購 :)')
      } else {
        // this cart 變成物件
        for (var i = 0; i < this.cart.length; i++) {
          var diyVgFruit = {
            id: (i + 1),
            vImg: (this.cart[i]),
            productName: (this.productCart[i])
          }
          this.accoutDiyImg.diyVgFruit.push(diyVgFruit)
        }

        axios.get('http://localhost:3000/register', {
          params: {
            // eslint-disable-next-line no-undef
            actName: this.$store.state.user[0].actName
          }
        }).then((response) => {
          axios.post('http://localhost:3000/accoutDiyImg', {
            caseId: response.data[0].caseId,
            data: this.accoutDiyImg
          }).then(function (response) {
            console.log('post data' + response)
          })
            .catch((error) => { console.error(error) })
        }).then((res) => { console.table(res.data) })
          .catch((error) => { console.error(error) })
      }
    }
  },
  computed: {
    // 種類
    typeMenu () {
      if (this.input.type !== '全部') {
        return this.proImg.filter(item => {
          return item.category === this.input.type
        })
      } else {
        return this.proImg
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    titleMenu () {
      // 如果有打字input.title不是全部，幫你做篩選，
      // 轉小寫 toLowerCase()
      // indexOf() 方法返回的都是指定的子串在另一個字串中的位置，如果沒有找不到子串，則返回 -1。
      if (this.input.title) {
        return this.typeMenu.filter(item => {
          const itemTitle = item.productName.toLowerCase()
          const inputTitle = this.input.title.toLowerCase()
          return itemTitle.indexOf(inputTitle) !== -1
        })
      } else {
        return this.typeMenu
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    checkCart () {
      // console.log('this.cart.length:' + this.cart.length)
      if (this.cart.length >= '4') {
        // 刪除第4個蔬果
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.cart.splice(3, 1)
        alert('購物籃只能挑選3種蔬果，可點擊一下蔬果卡就能刪除~')
      }
    }
  }
}
</script>

<style lang="scss">
@import "../scss/productShop.scss";
</style>
