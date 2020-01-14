<template>
  <div>
    <!--头部组件-->
    <Head></Head>

    <!--导入身体组件-->
    <PigeonholeBody></PigeonholeBody>

    <!--脚-->
    <Footer></Footer>
  </div>
</template>

<script>
  /**
   * 导入头部组件
   */
  import Head from "../../components/index/head"


  /**
   * 导入身体组件
   */
  import PigeonholeBody from "../../components/pigeonhole/body"


  /**
   * 脚
   */
  import Footer from "../../components/index/footer"

  export default {
    name: "pigeonhole",
    components: {
      Head,
      Footer,
      PigeonholeBody
    }
  }
</script>

<style scoped>

</style>