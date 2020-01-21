<template>
  <div>
    <Head></Head>
    <ShareBody></ShareBody>
    <Footer></Footer>
  </div>
</template>

<script>


  import Head from "../../components/index/head"

  import Footer from "../../components/index/footer"


  /**
   * 个人分享身体
   */
  import ShareBody from "../../components/share/body"


  export default {
    name: "Share",
    components:{
      Head,
      ShareBody,
      Footer
    }
  }
</script>

<style scoped>

</style>