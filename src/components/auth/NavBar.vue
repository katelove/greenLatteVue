<template>
    <nav>
    <b-navbar toggleable="lg" type="dark" class="nature-bg fixed-top">
    <router-link to="/home">
    <b-navbar-brand>
      <img src="../../../public/images/company/logo-small.png" alt="健康綠生活" />
          <div class="nature-word">
            <p>NatureLife 綠生活</p>
          </div>
    </b-navbar-brand>
    </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#sec1">天然蔬菜力</b-nav-item>
        <b-nav-item href="#sec2">身體分析</b-nav-item>
        <b-nav-item href="#sec3">檢視健康</b-nav-item>
        <b-nav-item href="#sec4">綠拿鐵</b-nav-item>
        <b-nav-item href="#sec5">蔬果卡</b-nav-item>
        <b-nav-item href="#sec6">綠市場</b-nav-item>
        <b-nav-item href="#sec7">DIY</b-nav-item>
        <b-nav-item href="#sec8">周計劃</b-nav-item>
        <b-nav-item href="#sec9">三餐日誌</b-nav-item>
        <b-nav-item class="nature-account"><font-awesome-icon icon="user-circle"></font-awesome-icon><router-link to="/register">會員中心</router-link></b-nav-item>
        <b-nav-item class="navWord"><a href="" @click.prevent="logout">Logout</a></b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  </nav>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$router.push('/')
      this.$store.dispatch('logout')
      alert('已登出')
      console.log('清除localStorage')
    }
  }
}
</script>
<style lang="scss">

nav{
  padding: 30px;
}
.nature-bg{
  background-color: #2f5a28;
}
.nature-word{
  display: inline-block;
   p{
     margin: 0 0 0 10px ;
   }
}

.nature-account{
  background-color: #11220f;
  border: #11220f 3px solid;
  border-radius: 15px;
}

.navWord{
  a{
    color: rgb(160, 159, 159);
  }
  a:hover{
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
}
</style>
