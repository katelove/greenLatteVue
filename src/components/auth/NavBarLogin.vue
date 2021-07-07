<template>
    <nav>
    <b-navbar toggleable="lg" type="dark" class="nature-bg fixed-top">
    <router-link to="/">
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
        <b-nav-item class="navWord" href="#sec2">身體分析</b-nav-item>
        <b-nav-item class="nature-account"><font-awesome-icon icon="user-circle"></font-awesome-icon><router-link to="/login">{{userLogin}}</router-link></b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  </nav>
</template>

<script>
export default {
  data () {
    return {
      userLogin: ''
    }
  },
  mounted () {
    var loginUser = localStorage.getItem('user')
    console.log('navLogin user:' + loginUser)
    if (loginUser === null) {
      // this.$router.push('/register')
      this.userLogin = '登入'
    } else {
      this.$router.push('/loginRegister')
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
  a{
    color: rgb(160, 159, 159);
  }
  a:hover{
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
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
