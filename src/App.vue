<template>
<div id="app">
  <NavBarLogin/>
  <!-- <NavBar/> -->
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
    <router-view/>
  </div>
</div>
</template>

<script>
import NavBarLogin from './components/NavBarLogin.vue'
// import NavBar from './components/NavBar.vue'
import Mail from './components/Mail.vue'

export default {
  name: 'navBar',
  components: {
    NavBarLogin,
    // NavBar,
    Mail
  },
  methods: {
    // for modal
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    }
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
  right: 0;
  bottom: 50%;
  z-index: 9999;
  img {
  width: 50px;
  padding-top: 1em;
  padding-right: 5px;
 }
}

@media (max-width: 576px) {
  .socialLogo {
    background-color: #f6f9f4;
    border-radius: 10px 0 0 10px;
    border: solid 2px #2f5a28;
    border-right: #f6f9f4;
    padding: 0 10px 0 10px;
    margin-left: 5px;
    z-index: 9999;
  }
}

</style>
