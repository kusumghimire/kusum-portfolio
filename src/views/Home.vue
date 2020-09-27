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
          <img class="mt-4 float-img" src="@/assets/img/coffee.png" alt="Coffee" srcset />
          <h3 class="section-sub-title text-uppercase py-3">About me</h3>
          <p>
            Hi, I am Kusum a frontend developer based in Kathmandu, Nepal. I
            love working on fun little projects during my free time and post
            educational content on Instagram.
            <br />
            <br />I am open to projects at the moment.<br>
            <a href>Contact Me</a>
          </p>
        </aside>
      </div>
      <div
        class="col-12 col-md-6 col-lg-5 col-xl-5
         d-flex justify-content-center align-items-end section-img"
      >
        <img src="@/assets/img/profile.png" alt="Coffee" srcset />
      </div>
      <div
        class="col-12 col-md-12 col-lg-4 col-xl-4
         d-flex flex-column justify-content-center section-project"
      >
        <verticalSlider />
        <!-- <aside class="projects">
          <figure>
            <img src="@/assets/img/project.png" alt="Project" srcset />
          </figure>
        </aside>
        <aside class="mx-4 slider-project">
          <h2>Tradr</h2>
          <p>
            Worked as a lead frontend developer for the Tradr
            Staock Management Application that make sit easier
            for their users to buy and sell stock online.
          </p>
        </aside> -->
        <aside class="m-4 slider-btn">
          <a href class="btn btn-git">
            <img src="@/assets/img/github-alt.png" srcset />
            Github
          </a>
          <a href class="btn btn-insta">
            <img src="@/assets/img/instagram.png" srcset />
            Instagram
          </a>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue';
import verticalSlider from '@/components/verticalSlider.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    verticalSlider,
  },
};
</script>

<style lang="scss">
</style>
