<template>
  <div>
    <!--头部信息-->
    <Head></Head>
    <MeBlogBody></MeBlogBody>
    <Footer></Footer>
  </div>
</template>

<script>

  /**
   * 导入头部
   */
  import Head from "../../components/index/head"
  import MeBlogBody from "../../components/meblog/body"
  /**
   * 导入脚
   */
  import Footer from "../../components/index/footer"
  export default {
    name: "MeBlog",
    components:{
      Head,
      MeBlogBody,
      Footer
    }
  }
</script>

<style scoped>

</style>