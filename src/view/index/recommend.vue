<template>
  <div id="master-wrapper">
    <!--
      头部
    -->
    <Head></Head>
    <!--身体-->
    <Body></Body>
    <!--脚-->
    <Footer></Footer>
  </div>
</template>

<script>
  /**
   * 导入头部
   */
  import Head from "../../components/index/head"
  /**
   * 导入身体
   */
  import Body from "../../components/recommend/body"
  /**
   * 脚
   */
  import Footer from "../../components/index/footer"

  export default {
    name: "recommend",
    components: {
      Head,
      Body,
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