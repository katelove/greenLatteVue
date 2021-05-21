<template>
<div class="carousel">
<section><Carousel/></section>
</div>

</template>

<script>
import Carousel from '../components/Carousel'

export default {
  name: 'carousel',
  components: {
    Carousel

  }
}
</script>

<style lang="scss">
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        font-family: sans-serif;
        font-weight: bold;
      }
         section {
        min-height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
</style>
