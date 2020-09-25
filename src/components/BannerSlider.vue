<template>
  <div class="slider">
  <VueSlickCarousel
  ref="c2"
  :asNavFor="$refs.c1"
  :slidesToShow="1"
  :focusOnSelect="true">
  <div><h3>1</h3></div>
  <div><h3>2</h3></div>
  <div><h3>1</h3></div>
  <div><h3>3</h3></div>
</VueSlickCarousel>

<VueSlickCarousel
  ref="c1"
  :asNavFor="$refs.c2"
  :focusOnSelect="true">
  <div><h3>1</h3></div>
  <div><h3>2</h3></div>
  <div><h3>3</h3></div>
  <div><h3>3</h3></div>
</VueSlickCarousel>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'MyComponent',
  components: {
    VueSlickCarousel,
  },
  // data() {
  //   return {
  //     settings: {
  //       dots: true,
  //       infinite: true,
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       vertical: true,
  //       verticalSwiping: true,
  //     },
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.slider {
  width: 300px;
  height: 200px;
  background-color: red;
  margin-left: -120px;
}
</style>
