<template>
  <div>
    <Head></Head>
    <ShareBody></ShareBody>

  </div>
</template>

<script>


  import Head from "../../components/index/head"


  /**
   * 个人分享身体
   */
  import ShareBody from "../../components/share/body"


  export default {
    name: "Share",
    components:{
      Head,
      ShareBody,
    }
  }
</script>

<style scoped>

</style>