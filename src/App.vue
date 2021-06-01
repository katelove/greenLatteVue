<template>
  <div id="app">
   <NavBar/>
    <router-view/>

  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'navBar',
  components: {
    NavBar
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

</style>
