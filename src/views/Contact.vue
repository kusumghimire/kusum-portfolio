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
            Hi, I am Kusum a frontend developer based in Kathmandu, Nepal. I love working on fun
            little projects during my free time and post educational content on Instagram.
            <br />
            <br />I am open to projects at the moment.<br />
            <router-link to="/about">Contact me</router-link>
          </p>
        </aside>
      </div>
      <div
        class="col-12 col-md-12 col-lg-4 col-xl-4
         d-flex flex-column justify-content-center section-project"
      >

      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss"></style>
