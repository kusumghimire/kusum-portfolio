<template>
  <div class="banner-slider">
    <VueSlickCarousel :arrows="true" :dots="true">
      <div class="slide">
        <img src="@/assets/img/project.png" alt="" />
        <div class="content">
          Worked as a lead frontend developer for the Tradr Stock Management
          Application that makes it easier for their users to buy and sell stock
          online.
        </div>
      </div>

      <div><img src="@/assets/img/coffee.png" alt="" /></div>
      <div><h2>Kusum Ghimire</h2></div>
      <div>4</div>
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
};
</script>

<style lang="scss">
.banner-slider {
  margin-left: -30px;
  .slide {
    img {
      height: 430px;
      width: 100%;
      object-fit: cover;
      @media only screen and (max-width: 1600px) {
        height: 100%;
      }
    }
    .content {
      color: #fff;
      max-width: 400px;
      padding-left: 60px;
      padding-top: 40px;
      padding-right: 60px;
    }
  }
}
.slick-next:before {
  font-family: "Font Awesome 5 Free";
  content: "\f062";
}
.slick-prev:before {
  font-family: "Font Awesome 5 Free";
  content: "\f063";
}
.slick-next {
  top: 70%;
  right: 5%;
}
.slick-prev {
  top: 80%;
  left: 90%;
  z-index: 30;
}

.slick-prev:before,
.slick-next:before {
  color: #4285F4;
  font-size: 20px;
}
</style>
