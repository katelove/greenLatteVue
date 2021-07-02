<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      class="carousel-style"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

     <!-- :style="{ backgroundImage: 'url(' + item.image + ')' }" -->
      <b-carousel-slide
        v-for="item in carouselItems"
        :key="item.id"
        :img-src=item.image
        :caption="item.caption"
        :text="item.text"
        class="wordTitle"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      carouselItems: [
        {
          id: 1,
          caption: '',
          image: require('../../public/images/carousel/1.png'),
          text: ''
        },
        {
          id: 2,
          caption: '崇尚自然飲食',
          image: require('../../public/images/carousel/2.png'),
          text: '▶品嚐食物原汁原味'
        },
        {
          id: 3,
          caption: '創造您的口感',
          image: require('../../public/images/carousel/3.png'),
          text: '▶DIY天然蔬果汁'
        }
      ],
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
.carousel-style{
  width: 100%;
  min-height: 100%;
  width:"1024px";
  height:"480px";
  color: white;
}
.wordTitle{
  text-shadow: 2px 2px 10px #2f5a28;
  h3{
  font-size: 50px;
  background: rgb(250, 249, 249,0.5);
  font-weight: bold;
  font-family: '微軟正黑體';
  text-align: left;
  padding: 10px;
   }
  p{
    font-size: 25px;
     text-align: left;
  }
}

@media (max-width: 576px) {
.wordTitle{
  h3{
  font-size: 30px;
  padding: 5px;
   }
  p{
    font-size: 10px;
  }
 }
}
</style>
