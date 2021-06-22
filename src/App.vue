<template>
<div id="app">
  <router-view name="nav"></router-view>
  <div class="home_content">
    <div class="socialLogo">
      <div>
        <div class="socialFont">
          <font-awesome-icon icon="envelope"  @click="showModal"/>
        </div>
      </div>
      <div><img src="../public/images/pic/facebook.png" alt="facebook"/></div>
      <div><img src="../public/images/pic/instagram.png" alt="IG"/></div>
      <div><img src="../public/images/pic/youtube.png" alt="youtube"/></div>
      <!-- <div>
        <div class="socialFont">
          <font-awesome-icon icon="shopping-cart"/>
        </div>
      </div> -->

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
  components: {
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

/* social-media=================== */
.home_content {
  height: 100%;
  display: flex;
  align-items: center;
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
  justify-content: center;
  align-items: center;
  right: 0;
  bottom: 50%;
  z-index: 9999;

  img {
  width: 50px;
  padding-top: 1em;
  padding-right: 5px;
 }
 .socialFont{
  font-size: 40px;
  color:#2f5a28;
  padding: 5px;
 }
 div{
  border-radius: 100%;
  background-color: #d1e4c1;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

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
