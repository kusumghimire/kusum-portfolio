<template>
  <div class="banner-slider">
    <VueSlickCarousel :arrows="true" :dots="true">
      <div class="slide">
        <img src="@/assets/img/project.png" alt="" />
        <div class="content">
          <h5>Project1</h5>
          Worked as a lead frontend developer for the Tradr Stock Management
          Application that makes it easier for their users to buy and sell stock
          online.
        </div>
      </div>

      <div class="slide">
        <img src="@/assets/img/project-1.png" alt="" />
        <div class="content">
          <h5>Project2</h5>
          Worked as a lead frontend developer for the Tradr Stock Management
          Application that makes it easier for their users to buy and sell stock
          online.
        </div>
      </div>
       <div class="slide">
        <img src="@/assets/img/project.png" alt="" />
        <div class="content">
          <h5>Project3</h5>
          Worked as a lead frontend developer for the Tradr Stock Management
          Application that makes it easier for their users to buy and sell stock
          online.
        </div>
      </div>
       <div class="slide">
        <img src="@/assets/img/project.png" alt="" />
        <div class="content">
          <h5>Project5</h5>
          Worked as a lead frontend developer for the Tradr Stock Management
          Application that makes it easier for their users to buy and sell stock
          online.
        </div>
      </div>
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
  @media only screen and (max-width: 991px){
  margin-left: 0px;
  }
    @media only screen and (max-width: 767px){
  margin-top: -50px;
  margin-left: 20px;
  margin-right: 20px;
  }
  .slide {
    img {
      height: 430px;
      width: 100%;
      object-fit: cover;
      @media only screen and (max-width: 1600px) {
        height: 320px;
      }
      @media only screen and (max-width: 991px){
      height: 300px;
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
  display: inline-block;
  // padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  padding: 0 5px;
  opacity: 0.5;
  @media only screen and (max-width: 991px){
    transform: rotate(90deg);
  }
}
.slick-prev:before {
  font-family: "Font Awesome 5 Free";
  content: "\f063";
   display: inline-block;
  // padding-right: 3px;
  vertical-align: middle;
  font-weight: 900;
  padding: 0 5px;
  opacity: 0.5;
    @media only screen and (max-width: 991px){
    transform: rotate(90deg);
  }
}
.slick-next {
  top: 85%;
  right: 5%;
  @media only screen and (max-width: 991px){
    top: 75%;
  }
    @media only screen and (max-width: 425px){
      top: 65%;
  }
}
.slick-prev {
  top: 95%;
  left: 90%;
  z-index: 30;
      @media only screen and (max-width: 991px){
      top: 75%;
  left: 86%;
  }
      @media only screen and (max-width: 700px){
      top: 75%;
  left: 80%;

  }
    @media only screen and (max-width: 425px){
      top: 65%;
  }
}

.slick-prev:before,
.slick-next:before {
  color: #4285f4;
  font-size: 20px;
}
.slick-slide {
  outline: none;
}

</style>
