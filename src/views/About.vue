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

      </div>
    </div>
      <div class="row">
        <div class="col-12 col-md-12 col-lg-4 col-xl-4 d-flex flex-column  section-contact">
          <h2 class="text-nowrap">Contact Me</h2>
          <a href="https://www.linkedin.com/in/kusum-ghimire-a8bb50158/" target="_blank"><i class="fab fa-linkedin"></i> /kusum-ghimire</a>
          <a href="https://www.instagram.com/codewithkusum/" target="_blank"><i class="fab fa-instagram"></i> /codewithkusum</a>
        </div>
        <div class="col-12 col-md-12 col-lg-4 col-xl-4 d-flex flex-column section-contact">
          <h2 class="text-nowrap">Showcases</h2>
          <a href=""><i class="fab fa-github"></i>/kusumghimire</a>
          <a href=""><i class="fab fa-dribbble"></i>/kusumm</a>
          <a href="https://codepen.io/kusumghimire"><i class="fab fa-codepen"></i>/kusumghimire</a>
        </div>
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
