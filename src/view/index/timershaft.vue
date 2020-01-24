<template>
  <div>
    <Head></Head>
    <NoticeBody></NoticeBody>
  </div>
</template>

<script>

  /**
   * 头部
   */
  import Head from "../../components/index/head"
  /**
   * 身体
   */
  import NoticeBody from "../../components/notice/body"

  export default {
    name: "TimerShaft",
    components:{
      Head,
      NoticeBody
    }
  }
</script>

<style scoped>

</style>