<template>
  <div>
    <section class="white-wrapper">
      <div class="section-inner">
        <div class="container">
          <div class="row mb60 text-center">
            <div class="col-sm-12">
              <h3 class="section-title" >我的相册๑</h3>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <div class="col-sm-12 nopaddingleftright blog-list-item mb90">
                <div class="hover-effect smoothie mb40">
                  <a href="#" class="smoothie">
                    <img src="../../assets/images/blog/blog-1.jpg" alt="Image" class="img-responsive smoothie"></a>
                  <div class="hover-overlay smoothie text-center">
                    <div class="vertical-align-bottom">
                      <h4>The Glamorous Lifestyle</h4>
                      <span class="item-category-span">Lifestyle</span>
                    </div>
                  </div>
                  <div class="hover-caption dark-overlay smoothie text-center">
                    <div class="vertical-align-bottom">
                      <router-link to="/select_photo" class="btn btn-primary pull-right">看见我的世界๑</router-link>
                    </div>
                  </div>
                </div>
                <p class="mb20">Professionally engage excellent manufactured products whereas go forward synergy.
                  Collaboratively synergize sticky ideas before client-centric markets. Rapidiously synergize
                  distinctive potentialities whereas team driven channels. Objectively deploy distinctive data whereas
                  bricks-and-clicks bandwidth. Seamlessly fashion vertical intellectual capital and magnetic
                  e-business.</p>
                <router-link to="/select_photo" class="btn btn-primary pull-right">看见我的世界๑</router-link>
              </div>
              <div class="col-sm-12 nopaddingleftright blog-list-item mb90">
                <div class="hover-effect smoothie mb40">
                  <a href="#" class="smoothie">
                    <img src="../../assets/images/blog/blog-2.jpg" alt="Image" class="img-responsive smoothie"></a>
                  <div class="hover-overlay smoothie text-center">
                    <div class="vertical-align-bottom">
                      <h4>The Glamorous Lifestyle</h4>
                      <span class="item-category-span">Lifestyle</span>
                    </div>
                  </div>
                  <div class="hover-caption dark-overlay smoothie text-center">
                    <div class="vertical-align-bottom">
                      <a href="single-post.html" class="btn btn-primary pull-right mb20">看见我的世界๑</a>
                    </div>
                  </div>
                </div>
                <p class="mb20">Professionally engage excellent manufactured products whereas go forward synergy.
                  Collaboratively synergize sticky ideas before client-centric markets. Rapidiously synergize
                  distinctive potentialities whereas team driven channels. Objectively deploy distinctive data whereas
                  bricks-and-clicks bandwidth. Seamlessly fashion vertical intellectual capital and magnetic
                  e-business.</p>
                <a href="single-post.html" class="btn btn-primary pull-right">看见我的世界๑</a>
              </div>
              <div class="col-sm-12 nopaddingleftright blog-list-item mb90">
                <div class="hover-effect smoothie mb40">
                  <a href="#" class="smoothie">
                    <img src="../../assets/images/blog/blog-3.jpg" alt="Image" class="img-responsive smoothie"></a>
                  <div class="hover-overlay smoothie text-center">
                    <div class="vertical-align-bottom">
                      <h4>The Glamorous Lifestyle</h4>
                      <span class="item-category-span">Lifestyle</span>
                    </div>
                  </div>
                  <div class="hover-caption dark-overlay smoothie text-center">
                    <div class="vertical-align-bottom">
                      <a href="single-post.html" class="btn btn-primary pull-right mb20">看见我的世界๑</a>
                    </div>
                  </div>
                </div>
                <p class="mb20">Professionally engage excellent manufactured products whereas go forward synergy.
                  Collaboratively synergize sticky ideas before client-centric markets. Rapidiously synergize
                  distinctive potentialities whereas team driven channels. Objectively deploy distinctive data whereas
                  bricks-and-clicks bandwidth. Seamlessly fashion vertical intellectual capital and magnetic
                  e-business.</p>
                <a href="single-post.html" class="btn btn-primary pull-right">看见我的世界๑</a>
              </div>
            </div>

            <div class="col-sm-3 col-sm-offset-1 sidebar">
                <Gallery></Gallery>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

  import Gallery from "../../common/gallery/gallery"

  export default {
    name: "PhotoBody",
    components: {
      Gallery
    }
  }
</script>
<style scoped>

</style>