<template>
  <div>
    <!--头部组件-->
    <Head></Head>

<!--    &lt;!&ndash;导入身体组件&ndash;&gt;
    <PigeonholeBody></PigeonholeBody>-->
    <TimerShaft></TimerShaft>
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


  import TimerShaft from "../../common/timersafht/timershaft"


  /**
   * 脚
   */
  import Footer from "../../components/index/footer"

  export default {
    name: "pigeonhole",
    components: {
      Head,
      Footer,
      PigeonholeBody,TimerShaft
    }
  }
</script>

<style scoped>

</style>