<template>
  <div>
    <Head></Head>
    <!--中间内容-->
    <Center></Center>
    <!--
     选择的数据
    -->
    <Work></Work>
    <!--我的团队-->
    <meTeam></meTeam>
    <!--低部-->
    <Footer></Footer>
  </div>
</template>

<script>

  /**
   * 导入头部组件
   */
  import Head  from "../../components/index/head";
  /**
   * 导入低部组件
   */
  import Footer from "../../components/index/footer";
  /**
   * 导入我团队组件
   */
  import meTeam from "../../components/index/meTeam";
  /**
   * 导入我的工作组件
   */
  import Work from "../../components/index/work";
  /**
   * 中间内容
   */
  import Center from "../../components/index/center"

  export default {
    name: "index",
    components:{
      Head,
      Footer,
      meTeam,
      Work,
      Center
    }
  }
</script>
<style scoped>
</style>