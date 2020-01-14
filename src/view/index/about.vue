<template>
  <div>
    <!--头部-->
    <Head></Head>

    <!--身体组件-->
    <AboutBody></AboutBody>

    <!--脚部-->
    <Footer></Footer>
  </div>
</template>

<script>
  /**
   * 导入头部组件
   */
  import Head from "../../components/index/head"


  /**
   * 关于我的身体组件
   */
  import AboutBody from "../../components/about/body"

  /**
   * 底部
   */
  import Footer from "../../components/index/footer"

  export default {
    name: "About",
    components: {
      Head,
      AboutBody,
      Footer,
    }
  }
</script>

<style scoped>

</style>