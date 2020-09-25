<template>
<div class="wrapper">
  <div id="image-carousel" class="dragdealer">
    <div class="handle">
      <div class="slide img1">
        <img src="http://placehold.it/680x350/e74c3c/ffffff&text=Dragdealer" />
      </div>
      <div class="slide img2">
        <img src="http://placehold.it/680x350/3498db/ffffff&text=Is" />
      </div>
      <div class="slide img3">
        <img src="http://placehold.it/680x350/2ecc71/ffffff&text=Totally" />
      </div>
      <div class="slide img4">
        <img src="http://placehold.it/680x350/7f8c8d/ffffff&text=Awesome" />
      </div>
    </div>
    <ul class="pagination">
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

</div>

</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>

.wrapper {
  width: 280px;
  margin: auto;
  padding-top: 85px;
}
/* Image carousel */

#image-carousel {
  height: 350px;
  border-radius: 0;
  overflow: hidden;
  cursor: move;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  position: relative;
}
#image-carousel:active {
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
  #image-carousel .handle {
    width: 100%;
    height: 400%;
    border-radius: 0;
  }
    #image-carousel .handle .slide {
      float: left;
      position: relative;
      width: 100%;
      height: 25%;
      background-repeat: no-repeat;
      background-position: center center;
    }

#image-carousel .pagination {
  position: absolute;
  z-index: 1000;
  left: 16px;
  bottom: 5px;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
#image-carousel .pagination li {
  border-radius: 50%;
  border: 2px solid #fff;
  width: 8px;
  height: 8px;
  padding: 0;
  margin: 3px;
  cursor: pointer;
}
#image-carousel .pagination li.active {
  background: #fff;
}

</style>
