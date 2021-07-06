<template>
<div id="app">
  <router-view name="nav"></router-view>
  <div class="home_content">
    <div class="socialLogo">
      <img src="../public/images/pic/mail.png" alt="Email" @click="showModal"/>
      <img src="../public/images/pic/youtube.png" alt="Youtube" />
      <img src="../public/images/pic/facebook.png" alt="FB" />
      <img src="../public/images/pic/instagram.png" alt="IG" />
    </div>
    <!-- 信件說明 -->
    <b-modal ref="my-modal" size="lg" hide-footer="false">
      <div class="d-block text-center">
         <Mail/>
      </div>
    </b-modal>
    <router-view name="home"></router-view>
  </div>
</div>
</template>

<script>
import Mail from './components/Mail.vue'

export default {

  methods: {
    // for modal
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    }
  },
  components: {
    Mail
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* social-media=================== */
.home_content {
  height: 100%;
}
@media (max-width: 768px) {
  .home_content {
    height: 80%;
  }
}
.socialLogo {
  position: fixed;
  /* 縱向排列 */
  flex-direction: column;
  display: flex;
  align-items: center;
  right: 0;
  bottom: 50%;
  z-index: 9999;
  img {
  width: 50px;
  padding-top: 1em;
  padding-right: 5px;
  background-color: rgb(221, 243, 203);
  border-radius: 100%;
  padding: 10px;
  margin: 5px;
 }
 :hover{
   cursor: pointer;
 }
}

@media (max-width: 576px) {
  .socialLogo {
    border-right: #f6f9f4;
    padding: 0 10px 0 10px;
    margin-left: 5px;
    z-index: 9999;
  }
}

</style>
