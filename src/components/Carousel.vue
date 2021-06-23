<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      class="carousel-style carousel-img"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
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
          text: '品嚐食物原汁原味'
        },
        {
          id: 3,
          caption: '創造您的口感',
          image: require('../../public/images/carousel/3.png'),
          text: 'DIY天然蔬果汁'
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
}
.carousel-img{
  width:"1024px";
  height:"480px";
  color: white;
}
</style>
