<template>
<div class="container">
  <div class="row">
    <div class="col-sm-6 col-md-6 col-lg-3 col-xl-3">
      <div v-for="(item,index) in proImg" :key="index">
        <img :src="item.vImg">
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
      proImg: proInfo.proImg
    }
  },
  mounted () {
    axios.get('http://localhost:3000/proImg')
      .then(response => {
        this.proImg = response.data
      })
  }
}
</script>
