<template>
  <div
    id="myCarousel"
    class="vertical-slider carousel vertical slide col-md-12"
    data-ride="carousel"
  >
    <div class="row">
      <div class="col-md-4">
        <span
          data-slide="next"
          class="btn-vertical-slider glyphicon glyphicon-circle-arrow-up"
          style="font-size: 30px"
        ></span>
      </div>
      <div class="col-md-8"></div>
    </div>
    <br />
    <!-- Carousel items -->
    <div class="carousel-inner">
      <div class="item active">
        <div class="row">
          <div class="col-xs-6 col-sm-5 col-md-5">
            <a href="http://dotstrap.com/">
              <img
                src="http://placehold.it/150x150"
                class="thumbnail"
                alt="Image"
              />
            </a>
          </div>
          <div class="col-xs-6 col-sm-7 col-md-7">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet..
          </div>
        </div>
        <!--/row-fluid-->
      </div>
      <!--/item-->
      <div class="item">
        <div class="row">
          <div class="col-xs-6 col-sm-5 col-md-5">
            <a href="http://dotstrap.com/">
              <img
                src="http://placehold.it/150x150"
                class="thumbnail"
                alt="Image"
              />
            </a>
          </div>
          <div class="col-xs-6 col-sm-7 col-md-7">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet..
          </div>
        </div>
        <!--/row-fluid-->
      </div>
      <!--/item-->
      <div class="item">
        <div class="row">
          <div class="col-xs-6 col-sm-5 col-md-5">
            <a href="http://dotstrap.com/">
              <img
                src="http://placehold.it/150x150"
                class="thumbnail"
                alt="Image"
              />
            </a>
          </div>
          <div class="col-xs-6 col-sm-7 col-md-7">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet..
          </div>
        </div>
        <!--/row-fluid-->
      </div>
      <!--/item-->
    </div>
    <div class="row">
      <div class="col-md-4">
        <span
          data-slide="prev"
          class="btn-vertical-slider glyphicon glyphicon-circle-arrow-down"
          style="color: Black; font-size: 30px"
        ></span>
      </div>
      <div class="col-md-8"></div>
    </div>
  </div>
</template>