<template>
  <div>
    <Head></Head>
    <div>
      <section class="white-wrapper bg">
        <div class="section-inner">
          <div class="container "  >
            <div class="row">
              <div>
                <div class="col-sm-1 hidden-xs backstrech-controls vertical-center-js">
                  <div style="margin-top: 270px" @click.prevent="prevSlide">
                    <a href="#" class="pull-left"><i class="fa fa-2x fa-long-arrow-left"></i></a>
                  </div>
                </div>
                <div style="float: left">
                  <img class="img-size" src="../../assets/images/team-1.jpg" alt="">
                </div>
                <div class=" hidden-xs backstrech-controls vertical-center-js" style="float: end">
                  <div style="margin-left: 1400px" @click.prevent="nextSlide">
                    <a href="#" style="margin-top: 270px" class="pull-right"><i class="fa fa-2x fa-long-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-10 col-sm-offset-1">
                <div class="row project-item wow fadeIn" data-wow-delay="0.2s">
                  <div class="col-sm-9 ">
                    <p>Saw yet kindness too replying whatever marianne. Old sentiments resolution admiration unaffected
                      its mrs literature. Behaviour new set existence dashwoods. It satisfied to mr commanded consisted
                      disposing engrossed. Tall snug do of till on easy. Form not calm new fail.</p>
                    <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety
                      led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it
                      everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front
                      whole given.</p>
                  </div>
                  <div class="col-sm-3">
                    <p><strong>DATE:</strong> 21/01/2015</p>
                    <p><strong>CLIENT:</strong> Jeeves Design</p>
                    <p><strong>TAGS:</strong> Brand Design, Graphics</p>
                    <p class="mt30"><a href="#contact" class="btn btn-primary btn-theme page-scroll">Visit Project</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<!--
  当前页面为实现相册查看详情的页面
-->
<script>
  import Head from "../../components/index/head"

  export default {
    name: "SelectPhoto",
    data() {
      return {
        flag: null
      }
    },
    created: function () {
      this.nextSlide()
    },
    components: {
      Head
    },
    methods: {
      /**
       * 上一页
       */
      prevSlide() {
        window.clearInterval(this.flag)
        this.flag = null
      },
      /**
       * 下一页
       */
      nextSlide() {
        if (this.flag != null && this.flag != undefined) {
          console.log(11);
        } else {
          this.flag = setInterval(() => {
            console.log(22);
          }, 2000)
        }
      }
    }
  }
</script>

<style scoped>

</style>