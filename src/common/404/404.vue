<template>
  <div>
    <Head></Head>
    <div class="fullheight dark-text">
      <div class="fullheight">
        <div class="container fullheight text-center">
          <div class="vertical-center-js">
            <h1><small>Oh no, this is an</small><br>
              404 Error</h1>
            <p>
              <router-link to="/index" class="btn btn-white btn-lg">返回首页~</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  /**
   * 头部
   */
  import Head from "../../components/index/head"


  import Footer from "../../components/index/footer"

  export default {
    name: "404",
    components: {
      Head,
      Footer
    }
  }
</script>

<style scoped>
  @import "../../assets/bootstrap/css/bootstrap.min.css";
  @import "../../assets/pe-icons/css/pe-icon-7-stroke.css";
  @import "../../assets/font-awesome/css/font-awesome.min.css";
  @import "../../assets/css/animate.css";
  @import "../../assets/css/plugins.css";
  @import "../../assets/css/style.css";
</style>