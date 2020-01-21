<template>
  <div>
    <!--头部信息-->
    <Head></Head>
    <MeBlogBody></MeBlogBody>
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

  export default {
    name: "MeBlog",
    components:{
      Head,
      MeBlogBody,

    }
  }
</script>

<style scoped>

</style>