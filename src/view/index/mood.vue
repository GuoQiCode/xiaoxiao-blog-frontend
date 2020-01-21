<template>
  <div>
    <Head></Head>
    <MoodBody></MoodBody>
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

  export default {
    name: "Mood",
    components: {
      Head,
      MoodBody,
    }
  }
</script>

<style scoped>

</style>