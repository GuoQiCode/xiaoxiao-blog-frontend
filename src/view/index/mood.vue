<template>
  <div>
    <Head></Head>
    <MoodBody></MoodBody>
    <Footer></Footer>
  </div>
</template>

<script>
  /**
   * 头部信息
   */
  import Head from "../../components/index/head"
  /**
   * 导入身体
   */
  import MoodBody from "../../components/mood/body"
  /**
   * 脚
   */
  import Footer from "../../components/index/footer"
  export default {
    name: "Mood",
    components: {
      Head,
      MoodBody,
      Footer
    }
  }
</script>

<style scoped>

</style>