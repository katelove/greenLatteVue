<template>
  <div id="app">
  <nav>
    <b-navbar toggleable="lg" type="dark" class="nature-bg fixed-top">
    <b-navbar-brand href="#sec1">
      <img src="../public/images/company/logo-small.png" alt="健康綠生活" />
          <div class="nature-word">
            <p>NatureLife 綠生活</p>
          </div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#sec2">身體分析</b-nav-item>
        <b-nav-item href="#sec3">檢視健康</b-nav-item>
        <b-nav-item href="#sec4">綠拿鐵</b-nav-item>
        <b-nav-item href="#sec5">蔬果市場</b-nav-item>
        <b-nav-item href="#sec6">DIY綠拿鐵</b-nav-item>
        <b-nav-item href="#sec7">綠拿鐵三餐規劃</b-nav-item>
        <b-nav-item class="nature-account" href="#"><font-awesome-icon icon="user-circle"></font-awesome-icon>  會員中心</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  </nav>
    <router-view/>

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
</style>
