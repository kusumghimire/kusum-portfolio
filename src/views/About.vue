<template>
  <div class="home container">
    <div class="row no-gutters">
      <Navbar />
      <div
        class="col-12 col-md-6 col-lg-3 col-xl-3
         d-flex flex-column justify-content-around section-title"
      >
        <h1 class="text-nowrap">
          Kusum
          <br />Ghimire
        </h1>
        <aside class="section-about">
 
        </aside>
      </div>
      <!-- <div class=" contact-section"> -->
      <div class="col-12 col-md-12 col-lg-4 col-xl-4 d-flex flex-column align-items-center justify-content-center section-project">
        <h2 class="text-nowrap">Contact Me</h2>
        <a href="">kusum-ghimire</a>
        <a href="">codewithkusum</a>
      </div>
      <div class="col-12 col-md-12 col-lg-4 col-xl-4 d-flex flex-column justify-content-center section-project">
        <h2 class="text-nowrap">Showcases</h2>
        <a href="">kusumghimire</a>
        <a href="">kusumm</a>
        <a href="">kusumghimire</a>
      </div>

      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';


export default {
  components: {
    Navbar,
  },
};
</script>
<style lang="scss"></style>
