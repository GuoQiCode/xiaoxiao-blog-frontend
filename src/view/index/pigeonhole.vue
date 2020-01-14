<template>
  <div>
    <!--头部组件-->
    <Head></Head>
    <TimerShaft></TimerShaft>
  </div>
</template>

<script>
  /**
   * 导入头部组件
   */
  import Head from "../../components/index/head"

  /**
   * 时间轴组件
   */
  import TimerShaft from "../../common/timersafht/timershaft"



  export default {
    name: "pigeonhole",
    components: {
      Head,
      TimerShaft
    }
  }
</script>

<style scoped>

</style>